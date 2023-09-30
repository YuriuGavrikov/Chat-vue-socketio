<script setup>
import { ref } from "vue";
import { io } from "socket.io-client";

const socket = io("wss://friend-chat.tw1.ru");
// const socket = io("ws://localhost:3030");

const messages = ref([]);
const value = ref("");
const username = ref("");
const connected = ref(false);

socket.on("message", (msg) => {
	messages.value.unshift(msg);
});

function connect() {
	connected.value = true;

	socket.emit("message", {
		event: "connection",
		username: username.value,
		id: Date.now(),
	});
}

const sendMessage = async () => {
	const message = {
		username: username.value,
		message: ` ${value.value}`,
		id: Date.now(),
		event: "message",
	};
	socket.emit("message", message);
	value.value = "";
};
</script>

<template>
	<div v-if="!connected">
		<div class="vstack gap-3 col-md-6 mx-auto">
			<div class="form-floating mb-3">
				<input
					v-model="username"
					@keypress.enter="connect"
					type="text"
					class="form-control"
					id="userName"
					placeholder="User name"
				/>
				<label for="floatingInput">Ваше имя</label>
			</div>
			<button
				@click="connect"
				type="button"
				class="btn btn-outline-success"
				:class="{ disabled: !username }"
			>
				Войти
			</button>
		</div>
	</div>

	<div v-else>
		<div class="vstack gap-3 col-md-6 mx-auto">
			<div>
				Вы: <span class="fw-bold text-success">{{ username }}</span>
			</div>
			<div class="form-floating">
				<textarea
					v-model="value"
					@keypress.enter="sendMessage"
					class="form-control"
					placeholder="Message"
					id="userMessage"
					style="min-height: 100px"
				></textarea>
				<label for="floatingTextarea">Сообщение</label>
			</div>
			<button
				@click="sendMessage"
				type="button"
				class="btn btn-outline-success"
				:class="{ disabled: !value }"
			>
				Отправить
			</button>
			<div v-for="mess in messages" :key="mess.id">
				<div
					v-if="mess.event === 'connection'"
					class="card text-bg-success d-inline-block"
				>
					<div class="card-body py-1">
						Пользователь {{ mess.username }} подключился
					</div>
				</div>
				<div v-else class="card">
					<div class="card-body px-3 py-2">
						<h5 class="card-title text-success">{{ mess.username }}</h5>
						<span>{{ mess.message }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
