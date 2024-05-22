<script>
	// Color Backgrounds
	export let bgColor = null;

	// Gradient Backgrounds
	export let bgGradient = null;
	// Image Backgrounds
	export let bgImage = null;
	export let bgSize = null;
	export let bgPosition = null;
	export let bgRepeat = null;
	export let bgOpacity = null;
	// Video Backgrounds
	export let bgVideo = null;
	export let bgVideoLoop = null;
	export let bgVideoMuted = null;
	// Iframe Backgrounds
	export let bgIframe = null;
	export let bgInteractive = null;
	// Transitions
</script>

<section
	data-background-color={bgColor}
	data-background-gradient={bgGradient}
	data-background-image={bgImage}
	data-background-size={bgSize}
	data-background-position={bgPosition}
	data-background-repeat={bgRepeat}
	data-background-opacity={bgOpacity}
	data-background-video={bgVideo}
	data-background-video-loop={bgVideoLoop}
	data-background-video-muted={bgVideoMuted}
	data-background-iframe={bgIframe}
	data-background-interactive={bgInteractive}
>
	<slot />
</section>
