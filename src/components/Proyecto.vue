<script setup>
// import HelloWorld from './components/HelloWorld.vue'

defineProps({
    titulo: Function,
    imgUrl: String,
})
</script>

<template>
  <div class="proyecto-container mt-4">

    <h1 class="font-extrabold">{{ titulo }}</h1>

    <div class="mt-8">
      <slot name="imagenes"></slot>
    </div>

    <div class="adsf mt-8">
      <slot name="cuerpo"></slot>
    </div>
  </div>
</template>

<style scoped>
</style>
