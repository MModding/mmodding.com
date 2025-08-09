<script setup>
import { ref } from "vue"
import Header from "@/components/Header.vue";
import HomePage from "@/components/HomePage.vue";

const artRoot = ref("https://raw.githubusercontent.com/MModding/art/main")

const brands = ref(["YouTube", "Discord", "X", "GitHub"])
</script>

<template>
  <Header/>
  <RouterView/>
</template>

<style scoped>
</style>
