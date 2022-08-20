const value = `
	<div class='w-full h-full flex flex-col items-start gap-4 lg:w-1/2'>
		<h1
		class='font-ms font-bold text-2xl bg-gradient-to-r from-[#EFFF3A] to-[#00ffc3d2] text-[#fff0] bg-clip-text uppercase md:text-3xl xl:text-4xl'
		>
			Interested in hiring me?
		</h1>

		<p class='font-op font-medium text-base text-grayWhite'>
			I'm currently looking for new opportunities. If you're interested in working with me 
			or hiring me, please contact me via email, Discord, LinkedIn or even Steam. Not so sure? 
			No problem, we can discuss it. I'm always open to new ideas and opportunities.
		</p>

		<div class='grid grid-cols-4 gap-3 text-[#fff]'>
			<a href='https://www.linkedin.com/in/jan-kom%C3%ADnek-36b4b7209/'>
				<svg
					class='h-12 transition-colors ease-out duration-150 logoHover'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z'
					/>
				</svg>
			</a>
			
			<a href='https://steamcommunity.com/id/H7KZ'>
				<svg
					class='h-12 transition-colors ease-out duration-150 logoHover'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M8.21 17.32 7 16.8a2.13 2.13 0 1 0 1.17-2.93l1.28.53a1.58 1.58 0 0 1-1.22 2.92z' />
					<path
						d='M12 2a10 10 0 0 0-10 9.34l5.38 2.21a2.31 2.31 0 0 1 .47-.24A2.62 2.62 0 0 1 9 13.1l2.44-3.56a3.8 3.8 0 1 1 3.8 3.8h-.08l-3.51 2.5a2.77 2.77 0 0 1-5.47.68l-3.77-1.6A10 10 0 1 0 12 2z'
					/>
					<path
						d='M17.79 9.5a2.53 2.53 0 1 0-2.53 2.5 2.54 2.54 0 0 0 2.53-2.5zm-4.42 0a1.9 1.9 0 1 1 1.9 1.91 1.9 1.9 0 0 1-1.9-1.92z'
					/>
				</svg>
			</a>

			<a href='https://discordapp.com/users/466867931821637632'>
				<svg
					class='h-12 transition-colors ease-out duration-150 logoHover'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M9.593 10.971c-.542 0-.969.475-.969 1.055 0 .578.437 1.055.969 1.055.541 0 .968-.477.968-1.055.011-.581-.427-1.055-.968-1.055zm3.468 0c-.542 0-.969.475-.969 1.055 0 .578.437 1.055.969 1.055.541 0 .968-.477.968-1.055-.001-.581-.427-1.055-.968-1.055z'
					/>
					<path
						d='M17.678 3H4.947A1.952 1.952 0 0 0 3 4.957v12.844c0 1.083.874 1.957 1.947 1.957H15.72l-.505-1.759 1.217 1.131 1.149 1.064L19.625 22V4.957A1.952 1.952 0 0 0 17.678 3zM14.01 15.407s-.342-.408-.626-.771c1.244-.352 1.719-1.13 1.719-1.13-.39.256-.76.438-1.093.562a6.679 6.679 0 0 1-3.838.398 7.944 7.944 0 0 1-1.396-.41 5.402 5.402 0 0 1-.693-.321c-.029-.021-.057-.029-.085-.048a.117.117 0 0 1-.039-.03c-.171-.094-.266-.16-.266-.16s.456.76 1.663 1.121c-.285.36-.637.789-.637.789-2.099-.067-2.896-1.444-2.896-1.444 0-3.059 1.368-5.538 1.368-5.538 1.368-1.027 2.669-.998 2.669-.998l.095.114c-1.71.495-2.499 1.245-2.499 1.245s.21-.114.561-.275c1.016-.446 1.823-.57 2.156-.599.057-.009.105-.019.162-.019a7.756 7.756 0 0 1 4.778.893s-.751-.712-2.366-1.206l.133-.152s1.302-.029 2.669.998c0 0 1.368 2.479 1.368 5.538 0-.001-.807 1.376-2.907 1.443z'
					/>
				</svg>
			</a>

			<a href='mailto:kominekjan.contact@gmail.com'>
				<svg
					class='h-12 transition-colors ease-out duration-150 logoHover'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z'
					/>
					<path d='M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z' />
				</svg>
			</a>

			<style scoped>
				.logoHover {
					fill: rgba(255, 255, 255);
				}

				.logoHover:hover {
					fill: #c2ff4f;
				}
			</style>
		</div>
	</div>

	<div class='hidden lg:block lg:w-1/2'>
		<img
			alt='contact_pic'
			class='h-full object-cover hidden rounded-2xl lg:block'
			src='contact/contact.webp'
		/>
	</div>
	`;

export default value;
