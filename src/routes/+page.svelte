<script lang="ts">
	import type { PageData } from './$types';
	import Thought from './Thought.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="ThoughtsBoard home" />
</svelte:head>

<main>
	<div class="filters" />
	<div>
		{#each data.thoughts as post}
			<h2>{post.title}</h2>
			<p>{post.text}</p>
		{/each}
		<Thought />
	</div>
</main>

<style>
</style>
