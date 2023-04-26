<script setup>
// import HelloWorld from './components/HelloWorld.vue'

defineProps({
    titulo: Function,
    imgUrl: String,
    projUrl: String,
})
</script>

<template>
  <div class="proyecto-container mt-8">

    <h1 class="text-3xl font-extrabold">{{ titulo }}</h1>

    <div class="mt-8 max-w-xs m-auto">
      <slot name="imagenes"></slot>
    </div>

    <div class="adsf mt-8">
      <slot name="cuerpo"></slot>
    </div>
  </div>

  <a :href="projUrl">
    <button class="rounded-md pl-2 pr-2 bg-blue mt-4">Saber más</button>
  </a>
</template>

<style scoped>
</style>
