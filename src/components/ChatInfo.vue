<template>
	<div>
		<button @click="chatStore.pressChatInfoBtn">Chat info</button>
		<div v-if="chatStore.chatInfoPressBtn" class="chatInfo">
			<p>User</p>
			<p>User</p>
			<p>User</p>
			<p>User</p>
		</div>
	</div>
</template>

<script setup>
import { useChatStore } from "../stores/chatStore";
const chatStore = useChatStore();
</script>

<style lang="scss" scoped>
.chatInfo {
	position: absolute;
	left: 20px;
	width: 300px;

	border: 1px solid black;
	background: #eaf0f9;
}
</style>
