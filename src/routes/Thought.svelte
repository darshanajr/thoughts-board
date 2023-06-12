<section class="thought--page">
	<div class="thought--page-ruler">
		<div>
			<h2 class="thought--title">heading</h2>
			<p class="thought--date">2023-06-09</p>
		</div>
		<div class="thought--body">
			<p>empty thought</p>
		</div>
		<div>
			<p class="thought--author">- dj</p>
		</div>
	</div>
</section>

<style>
	.thought--page {
		width: 350px;
		height: fit-content;
		background-color: #e0e0df;
		padding: 20px 10px 10px 30px;
		position: relative;
		box-shadow: 2px 2px 1px gray;
	}

	.thought--title {
		text-decoration: underline;
		text-underline-position: under;
	}

	.thought--date {
		text-decoration: underline;
		text-decoration-style: dotted;
		text-underline-position: under;
		font-size: medium;
		position: absolute;
		top: 10px;
		right: 10px;
	}

	.thought--body {
		margin: 10px 0 5px 0;
	}

	.thought--author {
		text-align: right;
	}

	.thought--page-ruler {
		border-left: 2px solid maroon;
		height: 100%;
		padding-left: 3px;
	}
</style>
