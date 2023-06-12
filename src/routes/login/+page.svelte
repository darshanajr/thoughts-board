<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<main>
	<div class="container">
		<h2>Log In</h2>
		<form use:enhance method="post">
			<section>
				<label for="username">Username</label>
				{#if form?.errors?.username}
					<p class="error">{form.errors.username}</p>
				{/if}
				<input type="text" name="username" id="username" value={form?.data?.username ?? ''} />
			</section>
			<section>
				<label for="password">Password</label>
				{#if form?.errors?.password}
					<p class="error">{form.errors.password}</p>
				{/if}
				<input type="password" name="password" id="password" value={form?.data?.password ?? ''} />
			</section>
			<section>
				{#if form?.errors?.message}
					<p class="info">{form.errors.message}</p>
				{/if}
				<button>Submit</button>
			</section>
		</form>
	</div>
</main>

<style>
	h2 {
		text-align: center;
		padding-top: 10px;
		color: white;
	}

	form {
		padding-top: 30px;
		margin: 0 auto;
	}

	label,
	input,
	button {
		display: block;
	}

	input {
		border: none;
		border-radius: 2px;
		height: 30px;
		width: 350px;
		padding-top: 2px;
		font-size: large;
	}

	input:focus {
		outline: none;
	}

	label {
		padding-top: 10px;
		color: white;
	}

	button {
		border: 2px dashed white;
		background-color: transparent;
		color: white;
		padding: 5px 10px;
		font-size: large;
		border-radius: 2px;
		cursor: pointer;
		align-self: flex-end;
		margin-top: 20px;
		width: fit-content;
	}

	button:hover {
		background-color: rgb(58, 58, 58);
	}

	.error {
		color: crimson;
		position: absolute;
		align-self: flex-end;
		margin-top: 10px;
	}

	section {
		position: relative;
		display: flex;
		flex-direction: column;
	}

	.info {
		color: crimson;
		position: absolute;
		margin-top: 25px;
	}
</style>
