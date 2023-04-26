<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import {ref} from 'vue';
import Proyecto from './components/Proyecto.vue';
import About from './components/About.vue';

const vista = ref('about');

</script>

<template>
  <header>
    <h1 class="text-3xl font-bold text-white">Francisco Galindo</h1>
  </header>

  <hr>
  <nav>
    <button @click="vista = 'about'"
      v-bind:class="vista === 'about' ? 'bg-blue' : 'bg-brown-bright'"
      class=" rounded-md text-white pl-2 pr-2">Sobre mí</button>
    <button @click="vista = 'projects'"
      v-bind:class="vista === 'projects' ? 'bg-blue' : 'bg-brown-bright'"
      class="bg-blue rounded-md text-white pl-2 pr-2">Proyectos</button>
  </nav>

  <div class="text-white">
    <template v-if="vista === 'about'">
      <About>
      </About>
    </template>
    <template v-else>
      <Proyecto
      :titulo="'Mi proyecto'" :proj-url="'https://github.com'">

      <template v-slot:imagenes>
        <img src="https://wallpaperaccess.com/full/275904.jpg" alt="">
      </template>

      <template v-slot:cuerpo>
        <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error quo
        assumenda ipsa nihil architecto sed voluptatum illum explicabo,
        officiis deleniti nesciunt quibusdam ut. Pariatur quod, autem
        voluptates tempora amet blanditiis!
        </p>
      </template>
      </Proyecto>

      <Proyecto
      :titulo="'Otro proyecto'" :proj-url="'https://github.com'">

      <template v-slot:imagenes>
        <img src="https://www.lifewithcats.tv/wp-content/uploads/2017/01/Screen-Shot-2017-01-26-at-5.49.55-PM.png" alt="">
      </template>

      <template v-slot:cuerpo>
        <p>
        Dolor laborum sint voluptate sunt quas, temporibus amet, quae.
        Cumque harum ratione dicta dignissimos nesciunt Reprehenderit
        perferendis possimus quod neque incidunt Quae facere ipsa molestias
        fugit hic porro. Repellat vitae.
        </p>
      </template>
      </Proyecto>
    </template>
  </div>

  <footer>
    <div>Footer chido</div>
  </footer>

</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
}

header {
  padding: 1rem;
}

footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
