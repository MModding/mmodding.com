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

const switchDropdownState = (event) => {
  event.currentTarget.classList.toggle("is-active")
}
</script>

<template>
  <nav class="navbar has-navbar-fixed-top is-black" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink class="navbar-item" to="/">
        <img src="/src/assets/banner.png" alt="MModding Title">
      </RouterLink>
    </div>
    <div class="navbar-start">
      <div class="navbar-item has-dropdown is-active" @click="switchDropdownState">
        <p class="navbar-link">Guides</p>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="https://wiki.mmodding.com">Mod Wikis</a>
          <a class="navbar-item" href="https://docs.mmodding.com">Dev Docs</a>
        </div>
      </div>
      <!--
      <RouterLink class="navbar-item" to="/projects">Projects</RouterLink>
      <RouterLink class="navbar-item" to="/team">Team</RouterLink>
      <RouterLink class="navbar-item" to="/timeline">Timeline</RouterLink>
      <RouterLink class="navbar-item" to="/about">About</RouterLink>
      -->
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
p {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
i {
  font-size: 30px;
}
</style>
