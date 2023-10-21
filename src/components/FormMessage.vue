<template>
	<div class="formMessage">
		<textarea
			v-model="chatStore.value"
			@keypress.enter="chatStore.sendMessage"
			class="inputFormMessage"
			placeholder="Введите сообщение"
			type="text"
		/>
		<Button :foo="chatStore.sendMessage">Отправить</Button>
	</div>
</template>

<script setup>
import Button from "./Button.vue";

import { useChatStore } from "../stores/chatStore";
const chatStore = useChatStore();
</script>

<style lang="scss" scoped>
.formMessage {
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;

	padding: 5px 5px;
}
.inputFormMessage {
	height: 40px;

	margin: 0 5px 0 0;
	padding: 10px;

	flex-grow: 1;

	border: solid rgb(196, 196, 196) 1px;
	border-radius: 5px;

	overflow: hidden;
	resize: none;
}
</style>
