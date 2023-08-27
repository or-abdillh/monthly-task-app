<template>
  <main class="w-full md:w-4/12 md:mx-auto bg-white min-h-screen p-8">
    <router-view></router-view>
  </main>
  <BottomBar></BottomBar>
</template>

<script setup lang="ts">

import BottomBar from './components/BottomBar.vue'

</script>
