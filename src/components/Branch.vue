<template>
	<div ref="branch" class="tree__branch branch" :class="'tree__branch--' + info.type + ' ' + info.id">
		<p class="tree__branch-name" @click.stop="toggleOpenFolder()">
			{{ level }} {{ info.type }} {{ info.name }}
		</p>
		
		
		<template v-if="info.type === 'folder' && info.children.length > 0">
			<branch v-for="child in info.children" :info="child" :level="level + 1" :key="child.id" />
		</template>
	</div>
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
				isOpened: true
			}
		},
		methods: {
			toggleOpenFolder() {
				this.$refs.branch.classList.toggle('closed')
			}
		}
	}
</script>

<style lang="scss">
	.tree {
		&__branch {
			padding-left: 1.5rem;
			
			background-position: 0 0;
			background-size: 1rem;
			background-repeat: no-repeat;
			
			&--file {
				background-image: url('/assets/img/file.png');
			}
			
			&--folder {
				background-image: url('/assets/img/folder-opened.png');
				
				&.closed {
					background-image: url('/assets/img/folder-closed.png');
				}
			}
			
			&.closed {
				.tree__branch {
					display: none;
					
					// &--folder {
					// 	background-image: url('/assets/img/folder-closed.png');
					// }
				}
			}
		}
	}
</style>