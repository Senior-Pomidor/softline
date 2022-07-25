<template>
	<div ref="branch" class="branch" :class="'branch--' + info.type">
		<button class="branch__btn" v-if="info.children && info.children.length > 0" @click.stop="toggleOpenFolder()" :class="{ 'opened': isSubtreeOpened}">
			<!-- + -->
		</button>
		
		<p class="branch__name">
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
				this.$refs.branch.classList.toggle('opened')
				this.isSubtreeOpened = !this.isSubtreeOpened
			}
		}
	}
</script>

<style lang="scss">
	.tree {
		--padding: 1rem;
		--line-width: 2px;
		--background-image: '';
		$line-color: $color-green;
		
		--branch-padding-left: 1.6rem;
		--icon-url: url('/img/icons/file.png');
		--line-top: .6rem;
		
		$icon-file-url: '/img/icons/file.png';
		$icon-folder-opened-url: '/img/icons/folder-opened.png';
		$icon-plus-url: '/img/icons/plus.png';
		$icon-minus-url: '/img/icons/minus.png';
		

		.branch {
			position: relative;
			padding-left: var(--branch-padding-left);
			
			background-position: 0 0;
			background-size: 1rem;
			background-repeat: no-repeat;
			
			
				::before,
				::after,
				&::after {
					display: block;
					content: "";
				}
			
			&::after {
				position: absolute;
				top: .5rem;
				right: 100%;
				display: block;
				width: 1rem;
				height: calc(100% + .5rem);
				border-left: 2px solid $color-green;
				border-top: 2px solid $color-green;
				content: "";
				box-sizing: border-box;
			}
			
			&:last-child {
				&::after {
					border-left: none;
					box-sizing: border-box;
				}
			}
			
			
			&__name {
				background-position: 0 0;
				background-size: 1rem;
				background-repeat: no-repeat;
				background-image: var(--icon-url);
				padding-left: 1.2rem;
			}
			
			
			&__btn {
				position: absolute;
				top: .5rem;
				left: -.5rem;
				
				width: 1rem;
				height: 1rem;
				
				line-height: 1;
				border: 1px solid black;
				border-radius: 3px;
				padding: 0;
				margin: 0;
				
				background-image: url($icon-plus-url);
				background-size: 70%;
				background-repeat: no-repeat;
				background-position: center;
				
				cursor: pointer;
				transform: translateY(-50%);
				z-index: 5;
				
				&.opened {
					background-image: url($icon-minus-url);
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
					border-left: 2px solid $color-green;
					content: "";
					box-sizing: border-box;
				}
			}
			
			+ .branch {
				margin-top: .5rem;
			}
			
			&--file {
				--icon-url: url('img/icons/file.png');
			}
			
			&--folder {
				--icon-url: url('img/icons/folder-closed.png');
			}
				
			&.opened {
				--icon-url: url('img/icons/folder-opened.png');
			}
		}
	}
</style>
