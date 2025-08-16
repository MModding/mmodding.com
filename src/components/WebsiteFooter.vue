<script setup>
</script>

<template>
  <hr>
  <footer class="footer">
    <p>
      The Official <strong>MModding</strong> Website. Its source code and multiple assets are <a href="https://github.com/MModding/mmodding.com/blob/main/LICENSE.md">licensed</a>.
    </p>
    <small>
      <strong>MModding</strong> is team of modders making mods for the <a href="https://minecraft.net">Minecraft</a> game.
      <strong>MModding</strong> is not affiliated to Mojang AB nor to TM Microsoft Corporation.
    </small>
  </footer>
</template>

<style scoped>
hr {
  margin-top: 30vh;
}
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
p, small {
  opacity: 33%;
}
@media (prefers-color-scheme: dark) {
  footer {
    background-color: rgb(0, 2, 17);
  }
}
</style>