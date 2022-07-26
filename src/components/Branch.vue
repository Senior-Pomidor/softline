<template>
	<li ref="branch" class="tree__branch" :class="'tree__branch--' + info.type">
		<button class="tree__btn" v-if="info.children && info.children.length > 0" @click.stop="toggleOpenFolder()"
			:class="{ 'opened': isSubtreeOpened }">
			<!-- + -->
		</button>

		<span class="tree__branch-name">
			{{ level }} {{ info.type }} {{ info.name }}
		</span>

		<template v-if="info.type === 'folder' && info.children.length > 0">
			<ul class="tree__subtree" v-if="isSubtreeOpened">
				<branch v-for="child in info.children" :info="child" :level="level + 1" :key="child.id" />
			</ul>
		</template>
	</li>
</template>

<script>
export default {
	name: 'branch',
	props: {
		info: {
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
	},
	data() {
		return {
			isSubtreeOpened: false
		}
	},
	methods: {
		toggleOpenFolder() {
			this.$refs.branch.classList.toggle('opened')
			this.isSubtreeOpened = !this.isSubtreeOpened
		}
	}
}
</script>

<style lang="scss">

</style>
