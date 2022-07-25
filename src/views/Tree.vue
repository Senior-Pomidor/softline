<template>
	<section class="section-tree">
		<h2>
			Бинарная структура
		</h2>
		
		<div class="tree">
			<Branch v-for="branch in tree" :key="branch.id" :info="branch" />
		</div>
	</section>
</template>

<script>
	import Branch from '@/components/Branch'
	export default {
		name: 'tree',
		components: {
			Branch
		},
		data() {
			return {
				tree: [
					{
						id: 1,
						type: 'folder',
						name: 'Folder 1',
						children: [
							{
								id: 10,
								type: 'file',
								name: 'Item 1.1',
							}
						]
					},
					{
						id: 2,
						type: 'folder',
						name: 'Folder 2',
						children: [
							{
								id: 20,
								type: 'folder',
								name: 'Subfolder 2.1',
								children: [
									{
										id: 201,
										type: 'file',
										name: 'File 2.1.1',
									}, 
									{
										id: 202,
										type: 'file',
										name: 'File 2.1.2',
									}
								]
							}, 
							{
									id: 21,
									type: 'file',
									name: 'File 2.2',
							}
						]
					},
					{
						id: 3,
						type: 'folder',
						name: 'Folder 3 (closed at start)',
						children: []
					},
					{
						id: 4,
						type: 'file',
						name: 'File 4',
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.tree {
		--padding-left: 2rem;
		--padding-top: 1rem;
		
		position: relative;
		padding-top: var(--padding-top);
		padding-left: var(--padding-left);
		// border: 1px solid red;
		
		&::before {
			position: absolute;
			top: .5rem;
			left: 1rem;
			display: block;
			height: var(--padding-top);
			// width: 1px;
			// background-color: $color-green;
			border-left: 1px solid $color-green;
			content: "";
			box-sizing: border-box;
		}
	}
</style>