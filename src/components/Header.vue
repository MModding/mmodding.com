<script setup>
import { ref } from "vue"

const brands = ref([
  {
    name: "YouTube",
    id: "youtube",
    icon: "youtube"
  },
  {
    name: "Discord",
    id: "discord",
    icon: "discord"
  },
  {
    name: "X",
    id: "x",
    icon: "twitter-x"
  },
  {
    name: "GitHub",
    id: "github",
    icon: "github"
  }
])
</script>

<template>
  <nav class="navbar is-transparent has-navbar-fixed-top is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink class="navbar-item" to="/">
        <img :src="$artRoot + '/brand/mmodding_title.png'" alt="MModding Title">
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
      <RouterLink v-for="brand in brands" class="navbar-item brand-logo" :to="'/' + brand.id">
        <i :class="'bi bi-' + brand.icon"/>
      </RouterLink>
    </div>
  </nav>
</template>

<style scoped>
.brand-logo {
  --bulma-navbar-item-img-max-height: 2.0rem;
}
i {
  font-size: 30px;
}
</style>
