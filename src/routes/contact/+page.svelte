<script>
	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let message = $state('');

	// function submitForm() {
	// 	console.log('Submit form');
	// }
</script>

<main>
	<section class="relative bg-darkBackground pt-48 pb-20">
		<img
			src="/digital_moon.svg"
			alt=""
			class="absolute top-0 left-[50%] hidden w-full opacity-[0.02] lg:block"
		/>
		<div
			class="container_xl relative flex flex-col items-start gap-10 px-5 lg:flex-row lg:gap-20 2xl:px-0"
		>
			<div class="w-full lg:w-2/5">
				<h1 class="mb-5 font-rubik text-6xl leading-[1.1] font-bold text-white">
					Let's Build Something Awesome!
				</h1>
				<p class="mb-5 font-karla text-xl font-light text-white">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis iste soluta earum
					corporis rem, repellendus error eos sequi consequatur officiis.
				</p>
				<!-- <p class="font-karla text-xl font-light text-white">
					<a href=".">629-230-4121</a>
				</p> -->
			</div>
			<div class="relative w-full lg:flex-1">
				<form>
					<div class="mb-5">
						<label for="name" class="mb-1 block w-full font-rubik text-lg font-normal text-white"
							>Your Name *</label
						>
						<input
							id="name"
							type="text"
							bind:value={name}
							class="w-full rounded-lg border border-white/50 bg-white/2 p-4 font-karla text-xl font-light text-white transition-all duration-200 hover:border-lightBlue focus:border-lightBlue focus:outline-none"
						/>
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
						class="rounded-full border border-darkestBlue bg-darkestBlue px-8 py-3 font-karla text-base font-normal text-white uppercase transition-all duration-200 hover:border-darkBlue hover:bg-darkBlue focus:outline-none"
						>Submit Form</button
					>
				</form>
			</div>
		</div>
	</section>
	<section class="pt-10 pb-10 lg:pt-20 lg:pb-20">
		<div class="container_lg px-5 2xl:px-0">
			<h2 class="mb-7 text-center font-rubik text-4xl font-normal lg:text-5xl">
				Let's talk about your next project.
			</h2>
			<p class="mb-5 px-0 text-center font-karla text-xl font-light text-balance lg:px-40">
				Get a free 30 minute consultation to discuss your project to see if we can build something
				great!
			</p>
			<div class="flex items-center justify-center">
				<a
					href="https://calendly.com/aaronjohnsondev/30min"
					target="_blank"
					aria-label="Opens in a new tab"
					class="rounded-full border border-darkestBlue bg-darkestBlue px-8 py-3 font-karla text-base font-normal text-white uppercase transition-all duration-200 hover:border-darkBlue hover:bg-darkBlue"
					>Book a Free Call</a
				>
			</div>
			<p class="mt-10 text-center font-karla text-xl font-light">Prefer email?</p>
			<div class="flex items-center justify-center">
				<a
					href="mailto:hello@bigmoondigital.io"
					class="text-center font-karla text-xl font-light text-lightBlue underline"
					>hello@bigmoondigital.io</a
				>
			</div>
		</div>
	</section>
</main>
