<template>
	<div
		:class="{
			messageRight: chatStore.username === name,
			messageLeft: chatStore.username !== name,
		}"
	>
		<div v-if="event === 'connection'" class="messageConnection">
			<span>Пользователь {{ name }} подключился</span>
		</div>
		<div
			v-else
			class="messageUser"
			:class="{
				messageBorderRight: chatStore.username === name,
				messageBorderLeft: chatStore.username !== name,
			}"
		>
			<div class="name">{{ name }}</div>
			<div class="message">{{ message }}</div>
		</div>
	</div>
</template>

<script setup>
import { useChatStore } from "../stores/chatStore";
const chatStore = useChatStore();

const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: false,
	},
	event: {
		type: String,
		required: true,
	},
});
</script>

<style lang="scss" scoped>
.messageConnection {
	margin: 10px 0;
}
.messageUser {
	max-width: 500px;

	display: inline-block;
	padding: 10px 15px;
	margin: 10px 0;

	border: solid rgb(196, 196, 196) 1px;

	.name {
		font-size: 14px;
		margin: 0 0 5px 0;
	}
	.message {
		font-size: 16px;
	}
}
.messageRight {
	text-align: right;
}
.messageLeft {
	text-align: left;
}
.messageBorderRight {
	border-radius: 15px 15px 0px 15px;
}
.messageBorderLeft {
	border-radius: 15px 15px 15px 0px;
}
</style>
