<template>
	<div class="chat" ref="chat">
		<Message
			v-for="mess in chatStore.messages"
			:key="mess.id"
			:name="mess.username"
			:message="mess.message"
			:event="mess.event"
		/>
	</div>
</template>

<script setup>
import Message from "./Message.vue";

import { useChatStore } from "../stores/chatStore";
const chatStore = useChatStore();

import { ref, watch } from "vue";

const scrollDown = () => {
	chat.value.scrollTo({
		top: chat.value.scrollHeight,
		left: 0,
		behavior: "smooth",
	});
};

const chat = ref(null);
watch(chatStore.messages, () => {
	//Сделать без таймайута
	setTimeout(scrollDown, 100);
});
</script>

<style lang="scss" scoped>
.chat {
	width: 100%;
	overflow: auto;
	flex-grow: 1;
	padding: 20px;

	border-top: 1px solid #000;
	border-bottom: 1px solid #000;
}
</style>
