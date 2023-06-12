<script lang="ts">
	import './styles.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<Header user={data.user} />

<slot />

<Footer />
