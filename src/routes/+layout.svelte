<script lang="ts">
	import { Cursor, cursorVariant } from '$lib/cursor';

	import '../styles/_global.scss';
</script>

<main on:mouseover={() => ($cursorVariant = 'default')} on:focus role="none">
	<slot />
</main>
<Cursor />

<style lang="scss">
	main {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
	}
</style>
