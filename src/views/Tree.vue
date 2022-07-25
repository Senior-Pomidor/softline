<template>
	<section class="section-tree">
		<h2>
			Бинарная структура
		</h2>
		
		<ul class="tree">
			<Branch v-for="branch in tree" :key="branch.id"
					:class="{folder: branch.type === 'folder', file: branch.type === 'file'}"
					>
					<!-- {{ branch.type }} -->
			</Branch>
		</ul>
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
						children: [
							{
								id: 2,
								type: 'file'
							}
						]
					},
					{
						id: 3,
						type: 'folder',
						children: [
							{
								id: 4,
								type: 'folder',
								children: [
									{
										id: 4,
										type: 'file'
									}, 
									{
										id: 4,
										type: 'file'
									}
								]
							}, 
							{
									id: 5,
									type: 'file'
							}
						]
					},
					{
						id: 6,
						type: 'folder',
						children: []
					},
					{
						id: 7,
						type: 'file'
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.folder {
		color: red;
	}
</style>