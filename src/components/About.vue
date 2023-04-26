<script setup>
console.log('adsf');
</script>

<template>
    <h1 class="text-3xl">Sobre mí</h1>
  <div class="flex gap-5 text-justify mt-4 flex-col md:flex-row p-4">
    <img class="max-w-xs m-auto" src="https://usercontent1.hubstatic.com/6852008.jpg" alt="">
    <div>
      <p>
      Elit voluptates veritatis quas illum quasi Non dolor expedita nemo
      repellendus illo Error esse inventore amet ducimus quis id Rem reiciendis
      deleniti similique eveniet neque placeat. Consequuntur sint harum
      deleniti.
      </p>

      <div class="flex gap-5 justify-evenly mt-4">
        <a href="https://github.com/Francisco-Galindo">
          <button class="pl-2 pr-2 w-16 h-16 rounded-full bg-green">
            <img src="/src/assets/github-icon.svg" alt="GitHub">
          </button>
        </a>
        <a href="https://gitlab.com/Francisco-Galindo">
          <button class="pl-2 pr-2 w-16 h-16 rounded-full bg-yellow">
            <img src="/src/assets/gitlab-icon.svg" alt="GitLab">
          </button>
        </a>
        <a href="mailto:francisco@franciscogalindo.com">
          <button class="pl-2 pr-2 w-16 h-16 rounded-full bg-blue">
            <img src="/src/assets/email-icon.svg" alt="Mail">
          </button>
        </a>
      </div>
    </div>

  </div>
</template>

<style scoped>
</style>
