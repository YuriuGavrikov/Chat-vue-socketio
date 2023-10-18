<template>
	<div>
		<button @click="foo" type="button" class="btn">
			<slot></slot>
		</button>
	</div>
</template>

<script setup>
const props = defineProps({
	foo: {
		type: Function,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
.btn {
	padding: 5px;
	border: solid rgb(196, 196, 196) 1px;
	border-radius: 5px;
	&:hover {
		background: #fafafa;
	}
}
</style>
