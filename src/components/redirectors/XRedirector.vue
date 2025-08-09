<script setup>
const target = "https://x.com/@MModdingTeam";
window.location = target;
</script>

<template>
  <p class="content">If you were not redirected, click on <a :href="target">this</a>.</p>
</template>