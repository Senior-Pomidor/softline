<template>
	<section class="section-tree">
		<h2>
			Бинарная структура
		</h2>

		<ul class="tree">
			<Branch v-for="branch in tree" :key="branch.id" :info="branch" />
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
.tree {
	--line-width: 2px;
	$line-color: $color-green;

	--branch-padding-left: 2rem;
	--btn-width: 1rem;

	--padding-left: 1rem;
	--padding-top: 1rem;

	position: relative;
	padding-top: var(--padding-top);
	padding-left: var(--padding-left);
	list-style-type: none;
	margin: 0;

	&::before {
		position: absolute;
		top: 0;
		left: 1.5rem;

		display: block;
		height: 1.5rem;
		border-left: var(--line-width) solid $line-color;
		content: "";
	}

	&__branch {
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
			top: calc(.5rem - var(--line-width) / 2);
			left: calc(var(--btn-width) / 2 - var(--line-width) / 2);
			display: block;
			width: calc(var(--branch-padding-left) / 1.5);
			height: calc(100% + .5rem);
			border-left: 2px solid $line-color;
			border-top: 2px solid $line-color;
			content: "";
			box-sizing: border-box;
		}

		&:last-child {
			&::after {
				border-left: none;
				box-sizing: border-box;
			}
		}

		&:not(:first-child) {
			margin-top: .5rem;
		}

		&--file {
			.branch__name {
				background-image: url('/img/icons/file.png');
			}
		}

		&--folder {
			> .tree__branch-name {
				background-image: url('/img/icons/folder-closed.png');
			}

			&.opened {
				> .tree__branch-name {
					background-image: url('/img/icons/folder-opened.png');
				}
			}
		}
	}

	&__btn {
		position: absolute;
		top: .5rem;
		left: 0;

		width: 1rem;
		height: 1rem;

		line-height: 1;
		border: 1px solid black;
		border-radius: 3px;
		padding: 0;
		margin: 0;

		background-image: url('/img/icons/plus.png');
		background-size: 70%;
		background-repeat: no-repeat;
		background-position: center;

		cursor: pointer;
		transform: translateY(-50%);
		z-index: 5;

		&.opened {
			background-image: url('/img/icons/minus.png');
		}
	}

	&__branch-name {
		display: inline-block;
		background-position: 0 0;
		background-size: 1rem;
		background-repeat: no-repeat;
		background-image: url('/img/icons/file.png');
		padding-left: 1.2rem;
	}

	&__subtree {
		position: relative;
		margin-top: 1rem;
		padding-left: 0;
		list-style-type: none;

		&::after {
			position: absolute;
			top: -1rem;
			left: calc(.5rem - var(--line-width) / 2);
			display: block;
			width: 1rem;
			height: 1.5rem;
			border-left: 2px solid $line-color;
			content: "";
			box-sizing: border-box;
		}
	}
}
</style>