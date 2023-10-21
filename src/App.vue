<template>
	<div class="wrapper">
		<Header />
		<Chat v-if="chatStore.connected" />
		<FormRegistration v-if="!chatStore.connected" />
		<FormMessage v-else />
	</div>
</template>

<script setup>
import Header from "./components/Header.vue";
import FormRegistration from "./components/FormRegistration.vue";
import FormMessage from "./components/FormMessage.vue";
import Chat from "./components/Chat.vue";

import { useChatStore } from "./stores/chatStore";
const chatStore = useChatStore();
</script>

<style lang="scss" scoped>
.wrapper {
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: relative;
}
</style>
