import { defineStore } from "pinia";
import { ref } from "vue";
import { io } from "socket.io-client";

export const useChatStore = defineStore("chatStore", () => {
	const socket = io("wss://friend-chat.tw1.ru");
	// const socket = io("ws://localhost:3030");

	const messages = ref([]);
	const valueInput = ref("");
	const username = ref("");
	const connected = ref(false);
	const chatInfoPressBtn = ref(false);

	socket.on("message", (msg) => {
		messages.value.push(msg);
	});

	const connect = () => {
		if (username.value !== "") {
			connected.value = true;

			socket.emit("message", {
				event: "connection",
				username: username.value,
				id: Date.now(),
			});
		}
	};

	const sendMessage = async () => {
		if (valueInput.value !== "") {
			const message = {
				username: username.value,
				message: valueInput.value,
				id: Date.now(),
				event: "message",
			};
			socket.emit("message", message);
			valueInput.value = "";
		}
	};

	const pressChatInfoBtn = () => {
		chatInfoPressBtn.value = !chatInfoPressBtn.value;
	};

	return {
		valueInput,
		username,

		connected,
		connect,

		chatInfoPressBtn,
		pressChatInfoBtn,

		messages,
		sendMessage,
	};
});
