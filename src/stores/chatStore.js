import { defineStore } from "pinia";
import { ref } from "vue";
import { io } from "socket.io-client";

export const useChatStore = defineStore("chatStore", () => {
	const socket = io("wss://friend-chat.tw1.ru");
	// const socket = io("ws://localhost:3030");

	const messages = ref([]);
	const value = ref("");
	const username = ref("");
	const connected = ref(false);

	socket.on("message", (msg) => {
		messages.value.push(msg);
	});

	const connect = () => {
		connected.value = true;

		socket.emit("message", {
			event: "connection",
			username: username.value,
			id: Date.now(),
		});
	};

	const sendMessage = async () => {
		const message = {
			username: username.value,
			message: value.value,
			id: Date.now(),
			event: "message",
		};
		socket.emit("message", message);
		value.value = "";
	};

	return { messages, value, username, connected, connect, sendMessage };
});
