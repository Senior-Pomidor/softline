<template>
	<section class="section-tree">
		<h2>
			Бинарная структура
		</h2>
		
		<div class="tree">
			<Branch v-for="branch in tree" :key="branch.id" :info="branch" />
		</div>
		
		<div class="test">
			<button class="test__btn"></button>
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime hic explicabo officia maiores? Nemo eius perferendis sed eum porro fuga culpa pariatur nulla non quidem. Recusandae, numquam. Commodi beatae quas saepe ut praesentium alias dolore nihil sit, eos perspiciatis, voluptatem nobis? Vel, tempora. Sed, totam voluptatum amet vel adipisci beatae dolores? Omnis nobis nisi deserunt odio nulla porro iste vel, pariatur iusto, dignissimos, doloribus dolore nihil velit minus. Vel facere, quia rem quidem perspiciatis debitis libero non dignissimos sint ea voluptatibus iste, blanditiis excepturi architecto suscipit officiis deserunt similique eligendi odio magni fuga, voluptatum delectus in temporibus. Adipisci, reprehenderit ut?
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
						// name: 'Folder 1',
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
	.test {
		position: relative;
		// display: flex;
		// align-items: baseline;
		
		&__btn {
			position: absolute;
			top: 1em;
			flex-shrink: 0;
			display: block;
			width: 20px;
			height: 20px;
			box-sizing: border-box;
			border: none;
			background-color: red;
			// transform: translateY(-50%);
		}
	}
	
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