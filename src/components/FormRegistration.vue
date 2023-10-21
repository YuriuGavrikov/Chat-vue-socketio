<template>
	<div class="formRegistration">
		<input
			class="inputFormRegistration"
			v-model="chatStore.username"
			@keypress.enter="chatStore.connect"
			placeholder="Ваше имя"
			type="text"
		/>
		<Button :foo="chatStore.connect">Войти</Button>
	</div>
</template>

<script setup>
import Button from "./Button.vue";

import { useChatStore } from "../stores/chatStore";
const chatStore = useChatStore();
</script>

<style lang="scss" scoped>
.formRegistration {
	position: fixed;
	bottom: 45vh;
}
.inputFormRegistration {
	height: 50px;
	width: 300px;

	padding: 10px;
	margin: 10px 0;

	border: solid rgb(196, 196, 196) 1px;
	border-radius: 5px;
}
</style>
