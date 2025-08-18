<script setup lang="ts">
import { ref } from "vue";

const friends = ref(["nonsense"]);
const index = ref(Math.ceil(friends.value.length * Math.random()) - 1);
const friend = ref(friends.value[index.value]);
</script>

<template>
  <div class="friend-container">
    <img :src="'/friends/' + friend + '.png'" alt="404 Image">
    <h2 class>It seems that you've lost your way. Look, this <strong>{{ friend.replace("_", " ") }}</strong> came to say hi!</h2>
    <small>404 - Not Found</small>
  </div>
</template>

<style scoped>
.friend-container {
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 10px;
}
img {
  width: 40vh;
}
h2 {
  padding-top: 10px;
  font-size: 20px;
}

@media (max-width: 1024px) {
  .friend-container {
    height: 80vh;
  }
}
</style>