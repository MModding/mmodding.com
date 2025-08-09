<script setup>
</script>

<template>
  <div class="logo-container">
    <div class="logo-title">
      <img :src="$artRoot + '/brand/mmodding.png'" alt="MModding Title">
      <h1 class="bulma-title is-1">Injecting our imagination into Minecraft.</h1>
      <p>With multiple projects.</p>
      <h2>You can view them on <a href="https://modrinth.com">Modrinth</a> and <a href="https://curseforge.com">CurseForge</a>:</h2>
      <div class="project-websites">
        <a class="button is-outlined modrinth" href="https://modrinth.com/organization/mmodding">View Modrinth Projects</a>
        <a class="button is-outlined curseforge" href="https://www.curseforge.com/members/mmoddingteam/projects">View CurseForge Projects</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@500&display=swap');

.logo-container {
  display: flex;
  justify-content: center;
}
.logo-title {
  display: flex;
  flex-direction: column;
  height: 60vh;
  justify-content: center;
  align-items: center;
}
img {
  width: 30vh;
}
h1 {
  padding-top: 20px;
  font-size: 30px;
  font-family: "Lexend", sans-serif;
  color: rgb(177, 78, 198);
}
h2 {
  padding-top: 20px;
  font-size: 20px;
  font-family: "Lexend", sans-serif;
}
.project-websites {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  justify-items: stretch;
  gap: 10px;
}
.button.modrinth {
  border-color: rgb(27, 218, 106);
  color: rgb(27, 218, 106);
}
.button.curseforge {
  border-color: rgb(255, 120, 77);
  color: rgb(255, 120, 77);
}
</style>