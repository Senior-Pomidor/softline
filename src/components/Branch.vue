<template>
	<div ref="branch" class="branch closed" :class="'branch--' + info.type + ' ' + info.id">
		<p class="branch__name" @click.stop="toggleOpenFolder()">
			{{ level }} {{ info.type }} {{ info.name }}
		</p>
		
		
		<template v-if="info.type === 'folder' && info.children.length > 0">
			<div class="branch__subtree" v-if="isSubtreeOpened">
				<branch v-for="child in info.children" :info="child" :level="level + 1" :key="child.id" />
			</div>
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
				isSubtreeOpened: false
			}
		},
		methods: {
			toggleOpenFolder() {
				this.$refs.branch.classList.toggle('closed')
				this.isSubtreeOpened = !this.isSubtreeOpened
			}
		}
	}
</script>

<style lang="scss">
	.tree {
		--padding: 1rem;
		--line-width: 1px;
		$line-color: $color-green;
		
		.branch {
			position: relative;
			padding-left: 1.5rem;
			
			background-position: 0 0;
			background-size: 1rem;
			background-repeat: no-repeat;
			
			cursor: pointer;
			
			&::after {
				position: absolute;
				top: .5rem;
				right: 100%;
				display: block;
				width: 1rem;
				height: calc(100% + .5rem);
				// background-color: $color-green;
				border-left: 1px solid $color-green;
				border-top: 1px solid $color-green;
				content: "";
				box-sizing: border-box;
			}
			
			&:last-child {
				&::after {
					// width: 1rem;
					border-left: none;
					box-sizing: border-box;
				}
			}
			
			&__subtree {
				position: relative;
				padding-top: .5rem;
				
				&::after {
					position: absolute;
					top: 0;
					right: 100%;
					display: block;
					width: 1rem;
					height: 1rem;
					// background-color: $color-green;
					border-left: 1px solid $color-green;
					content: "";
					box-sizing: border-box;
				}
			}
			
			+ .branch {
				margin-top: .5rem;
			}
			
			&--file {
				background-image: url('/assets/img/file.png');
			}
			
			&--folder {
				background-image: url('/assets/img/folder-opened.png');
				
				&.closed {
					background-image: url('/assets/img/folder-closed.png');
				}
			}
		}
	}
</style>
