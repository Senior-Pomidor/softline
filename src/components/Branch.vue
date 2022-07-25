<template>
	<div class="tree__branch branch" :style="{ 'padding-left': `${level * 10}px` }">
		<div class="branch__type">
			{{data.type}}
		</div>
		
		<template v-if="data.type === 'folder' && data.children.length > 0">
			<branch v-for="child in data.children" :data="child" :level="level + 1" :key="child.id"/>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'branch',
		props: {
			data: {
				type: Object,
				default() {
					return {
						id: null,
						type: null,
						children: [],
					};
				}
			},
			level: {
				type: Number,
				default() {
					return 0;
				},
			}
		}
	}
</script>

<style>

</style>