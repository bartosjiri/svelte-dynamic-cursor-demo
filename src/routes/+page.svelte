<script lang="ts">
	import { cursorVariant } from '$lib/cursor';
</script>

<p>Welcome to the demo of custom dynamic cursor component</p>
<p>Hover over boxes below to try it out (requires device with visible pointer)</p>
<div class:picker={true}>
	<div on:mouseenter={() => ($cursorVariant = 'default')} role="none">
		<span>Dot (default)</span>
	</div>
	<div on:mouseenter={() => ($cursorVariant = 'left')} role="none">
		<span>Left</span>
	</div>
	<div on:mouseenter={() => ($cursorVariant = 'arrow')} role="none">
		<span>Arrow</span>
	</div>
	<div on:mouseenter={() => ($cursorVariant = 'pause')} role="none">
		<span>Pause</span>
	</div>
	<div on:mouseenter={() => ($cursorVariant = 'right')} role="none">
		<span>Right</span>
	</div>
</div>
<a href="https://github.com/bartosjiri/svelte-dynamic-cursor-demo" target="_blank"> Source code </a>
<a href="@TODO" target="_blank">Guide</a>
<p>A project by <a href="https://bartosjiri.com" target="_blank">bartosjiri</a></p>

<style lang="scss">
	.picker {
		display: flex;
		flex-direction: column;
		width: 85%;
		margin: 1.6rem 0;

		div {
			display: flex;
			justify-content: center;
			align-items: center;
			min-height: 10rem;
			border: 1px solid #000;
			border-bottom: none;

			&:last-child {
				border-bottom: 1px solid #000;
			}

			:global(*) {
				pointer-events: none;
			}
		}
	}
</style>
