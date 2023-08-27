<template>
  <section class="fixed bottom-0 left-0 right-0 z-20">
    <!-- wrapper -->
    <section class="w-full md:w-4/12 md:mx-auto bg-white p-8 flex justify-center gap-10 border-t border-gray-100">
      <template v-for="menu in menus" :key="menu.name">
        <button @click="active = menu.name" :class="menu.name == active ? 'bg-sunset-orange rounded-full text-gray-100 shadow-xl -translate-y-3' : ''" class="text-gray-400 text-xl duration-100 w-16 h-16"><i class="fa-solid" :class="menu.icon"></i></button>
      </template>
    </section>
  </section>
</template>

<script setup lang="ts">

import { ref } from 'vue'

type Menu = {
  name: string
  icon: string
}

const active = ref<string>('add')

const menus: Array<Menu> = [
  {
    name: 'home',
    icon: 'fa-home'
  },
  {
    name: 'add',
    icon: 'fa-plus'
  },
  {
    name: 'gear',
    icon: 'fa-cog'
  },
]

</script>
