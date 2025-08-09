<script setup>
import { ref } from "vue"

const artRoot = ref("https://raw.githubusercontent.com/MModding/art/main")

const brands = ref(["YouTube", "Discord", "X", "GitHub"])
</script>

<template>
  <nav class="navbar is-transparent has-navbar-fixed-top is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink class="navbar-item" to="/">
        <img :src="artRoot + '/brand/mmodding_title.png'" alt="MModding Title">
      </RouterLink>
    </div>
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <RouterLink class="navbar-link" to="/docs">Documentation</RouterLink>
        <div class="navbar-dropdown">
          <p class="navbar-item">Example</p>
        </div>
      </div>
    </div>
    <div class="navbar-end">
      <RouterLink v-for="brand in brands" class="navbar-item brand-logo" :to="'/' + brand.toLowerCase()">
        <img :src="'./' + brand.toLowerCase() + '.png'" :alt="brand + ' Logo'">
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.brand-logo {
  --bulma-navbar-item-img-max-height: 2.0rem;
}
</style>
