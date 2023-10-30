<template>
	<div class="wrapper">
		<div class="container">
			<TheHeader />
			<Chat v-if="chatStore.connected" />
			<FormRegistration v-if="!chatStore.connected" />
			<FormMessage v-else />
		</div>
	</div>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import FormRegistration from "./components/FormRegistration.vue";
import FormMessage from "./components/FormMessage.vue";
import Chat from "./components/Chat.vue";

import { useChatStore } from "./stores/chatStore";
const chatStore = useChatStore();
</script>

<style lang="scss" scoped>
.wrapper {
	display: flex;
	justify-content: center;
	align-items: center;

	height: 100vh;

	background: #eaf0f9;
}
.container {
	height: 95vh;
	width: 95vw;

	padding: 20px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	position: relative;

	border: 1px solid rgb(255, 255, 255);
	border-radius: 20px;

	background: #eaf0f9;
}
</style>
