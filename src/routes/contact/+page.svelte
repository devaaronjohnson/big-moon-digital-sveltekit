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
		<img src="/digital_moon.svg" alt="" class="absolute top-0 left-[50%] w-full opacity-10" />
		<div class="container_xl relative flex flex-col items-start gap-20 px-5 lg:flex-row 2xl:px-0">
			<div class="w-full lg:w-2/5">
				<h1 class="mb-5 font-rubik text-6xl leading-[1.1] font-bold text-white">
					Let's Build Something Awesome!
				</h1>
				<p class="font-karla text-xl font-light text-white">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis iste soluta earum
					corporis rem, repellendus error eos sequi consequatur officiis.
				</p>
			</div>
			<div class="w-full lg:flex-1">
				<!-- <form>
					<div class="mb-5">
						<label for="name" class="mb-1 block w-full font-rubik text-lg font-normal text-white"
							>Your Name</label
						>
						<input
							id="name"
							type="text"
							bind:value={name}
							class="w-full rounded-lg border border-white/50 bg-white/2 p-4 font-karla font-light"
						/>
					</div>
					<div class="mb-5">
						<label for="email" class="mb-1 block w-full font-rubik text-lg font-normal text-white"
							>Your Email</label
						>
						<input
							id="email"
							type="text"
							bind:value={email}
							class="w-full rounded-lg border border-white/50 bg-white/2 p-4 font-karla font-light"
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
							class="w-full rounded-lg border border-white/50 bg-white/2 p-4 font-karla font-light"
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
							class="w-full rounded-lg border border-white/50 bg-white/2 p-4 font-karla font-light"
						></textarea>
					</div>
					<button
						type="submit"
						class="rounded-full border border-lightBlue bg-lightBlue px-8 py-3 font-karla text-base font-normal text-white uppercase transition-all duration-200 hover:border-darkBlue hover:bg-darkBlue"
						>Submit Form</button
					>
				</form> -->
			</div>
		</div>
	</section>
</main>
