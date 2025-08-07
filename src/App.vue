<script setup>
import { ref } from "vue"

const artRoot = ref("https://raw.githubusercontent.com/MModding/art/main")

const brands = ref(["YouTube", "Discord", "X", "GitHub"])
</script>

<template>
  <nav class="navbar is-transparent has-navbar-fixed-top is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://mmodding.com">
        <img :src="artRoot + '/brand/mmodding_title.png'" alt="MModding Title">
      </a>
    </div>
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-hoverable">
        <p class="navbar-link">Documentation</p>
        <div class="navbar-dropdown">
          <p class="navbar-item">Example</p>
        </div>
      </div>
    </div>
    <div class="navbar-end">
      <a v-for="brand in brands" class="navbar-item brand-logo" :href="'https://mmodding.com' + brand.toLowerCase()">
        <img :src="'./' + brand.toLowerCase() + '.png'" :alt="brand + ' Logo'">
      </a>
    </div>
  </nav>
</template>

<style scoped lang="css">
  .brand-logo {
    --bulma-navbar-item-img-max-height: 2.0rem;
  }
</style>
