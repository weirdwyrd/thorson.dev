<main>
	<slot />
</main>

<style>
	:global(body) {
		margin: 0;
		background: rgb(13, 19, 32);
		background: radial-gradient( rgba(13, 19, 32, 1) 0%, rgba(8, 12, 21, 1) 100%);
	}

	main {
    	width: 100vw;
		height: 100vh;
	}
</style>
