<script lang="ts">
	import type { User } from '../lib/model';

	export let user: User | null;
</script>

<header>
	<h1>ThoughtsBoard</h1>
	<div>
		<nav />
		<div class="user--data">
			{#if !user}
				<a href="register">Sign In</a>
				<a href="login">Log In</a>
			{:else}
				<p class="username">{user.username} |</p>
				<a href="/">Log Out</a>
			{/if}
		</div>
	</div>
</header>

<style>
	header {
		display: flex;
		background-color: black;
		height: 55px;
		align-items: center;
		padding: 0 10px;
	}

	h1 {
		margin: 0;
		color: white;
		width: 250px;
		text-align: center;
	}

	header > div {
		justify-content: space-between;
		margin-left: 50px;
		width: 100%;
	}

	.user--data {
		display: flex;
		float: right;
		align-items: center;
	}

	a {
		border: 2px dashed white;
		background-color: transparent;
		color: white;
		padding: 5px 10px;
		font-size: large;
		border-radius: 2px;
		cursor: pointer;
		text-decoration: none;
	}

	.user--data > a:last-of-type {
		margin-left: 10px;
	}

	a:hover {
		background-color: rgb(58, 58, 58);
	}

	.username {
		color: white;
		font-size: larger;
	}
</style>
