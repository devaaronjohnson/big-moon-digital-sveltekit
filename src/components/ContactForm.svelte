<script>
	import { preventDefault } from 'svelte/legacy';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let message = $state('');

	let nameClicked = $state(false);
	let emailClicked = $state(false);

	let isValidName = $derived(name.length > 0);
	let isValidEmail = $derived(validateEmail(email));

	function validateEmail(email) {
		var emailRegEx =
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailRegEx.test(String(email).toLowerCase());
	}
	// function validatePhone(phone) {
	// 	let regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	// 	return regex.test(phone);
	// }

	async function submitForm() {
		if (!isValidName || !isValidEmail) {
			nameClicked = true;
			emailClicked = true;
			return;
		}

		const url = 'https://ajdev.flywheelsites.com/';

		const formData = {
			input_1: name,
			input_3: email,
			input_4: phone,
			input_6: message
		};

		const body = JSON.stringify(formData);

		const str =
			'ck_b3757bfc8b568ac36422ec5f735d771c53d9c061:cs_06fe17d358a4b85f143b2848e1bb3221f6b92caa';

		const encodedString = btoa(str);

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: 'Basic ' + encodedString
			},
			body: body
		};

		const res = await fetch(url, options);

		const json = await res.json();

		if (!res.ok) throw new Error('There was an issue submitting the form');

		goto('/thank-you');
	}
</script>

<form
	onsubmit={(e) => {
		e.preventDefault();
		submitForm();
	}}
>
	<div class="relative mb-5">
		<label for="name" class="relative mb-1 block w-full font-rubik text-lg font-normal text-white"
			>Your Name *</label
		>
		<input
			id="name"
			type="text"
			bind:value={name}
			class="relative w-full rounded-lg border border-white/50 bg-white/2 p-4 font-karla text-xl font-light text-white transition-all duration-200 hover:border-lightBlue focus:border-lightBlue focus:outline-none"
		/>
		{#if nameClicked && !isValidName}
			<p class="mt-1 font-karla text-base font-normal text-red-300">Please add your full name</p>
		{/if}
	</div>
	<div class="mb-5">
		<label for="email" class="mb-1 block w-full font-rubik text-lg font-normal text-white"
			>Your Email *</label
		>
		<input
			id="email"
			type="text"
			bind:value={email}
			class="w-full rounded-lg border border-white/50 bg-white/2 p-4 font-karla text-xl font-light text-white transition-all duration-200 hover:border-lightBlue focus:border-lightBlue focus:outline-none"
		/>
		{#if emailClicked && !isValidEmail}
			<p class="mt-1 font-karla text-base font-normal text-red-300">Please include a valid email</p>
		{/if}
	</div>
	<div class="mb-5">
		<label for="phone" class="mb-1 block w-full font-rubik text-lg font-normal text-white"
			>Phone Number</label
		>
		<input
			id="phone"
			type="text"
			bind:value={phone}
			class="w-full rounded-lg border border-white/50 bg-white/2 p-4 font-karla text-xl font-light text-white transition-all duration-200 hover:border-lightBlue focus:border-lightBlue focus:outline-none"
		/>
	</div>
	<div class="mb-5">
		<label for="message" class="mb-1 block w-full font-rubik text-lg font-normal text-white"
			>Message</label
		>
		<textarea
			rows="5"
			id="message"
			type="text"
			bind:value={message}
			class="focus:lightBlue w-full rounded-lg border border-white/50 bg-white/2 p-4 font-karla text-xl font-light text-white transition-all duration-200 hover:border-lightBlue focus:border-lightBlue focus:outline-none"
		></textarea>
	</div>
	<button
		type="submit"
		class="cursor-pointer rounded-full border border-darkestBlue bg-darkestBlue px-8 py-3 font-karla text-base font-normal text-white uppercase transition-all duration-200 hover:border-darkBlue hover:bg-darkBlue focus:outline-none"
		>Submit Form</button
	>
</form>
