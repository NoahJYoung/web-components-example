<svelte:options tag="svelte-app" />

<script>
	import {Observable} from 'windowed-observable';
	export let userdata;

	const headerObservable = new Observable('header');

	let message = '';

	const handleOnChange = (msg) => {
		headerObservable.publish(msg);
	}
</script>

<main>
	<h1>Hello {userdata}</h1>
	<h2>Welcome to the Svelte app!</h2>
	<p>Type a message below to see it appear in the header.</p>
	<div>
		<input bind:value={message} on:input={() => handleOnChange(message) } class='messageInput' />
	</div>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		animation: fadein 1s;
	}

	h2 {
		font-weight: 100;
		font-size: 2.5em;
		animation: fadein 1.25s;
	}

	p {
		text-align: center;
		font-weight: 100;
		font-size: 1.5em;
		animation: fadein 1.5s;
	}

	.messageInput {
		margin-top: 20px;
		text-align: center;
		font-family: inherit;
		font-size: 3em;
		font-weight: 100;
		width: 10em;
		animation: fadein 2s;
	}

	@keyframes fadein {
		from {
			opacity: 0;
			padding-right: 40px;
		}
		to {
			opacity: 1;
			padding-right: 0px;
		}
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
