<template>
	<header class="header">
		<h1 class="title">Friends Chat</h1>
		<ChatInfo v-if="chatStore.connected" />
	</header>
</template>

<script setup>
import { useChatStore } from "../stores/chatStore";
const chatStore = useChatStore();

import ChatInfo from "./ChatInfo.vue";
</script>

<style lang="scss" scoped>
.header {
	display: flex;
	justify-content: space-between;

	margin: 10px 0;

	width: 100%;
}
.title {
	font-size: 30px;
}
</style>
