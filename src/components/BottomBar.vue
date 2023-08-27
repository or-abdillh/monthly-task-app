<template>
  <section class="fixed bottom-0 left-0 right-0 z-20">
    <!-- wrapper -->
    <section :class="routeName == 'Home' ? 'justify-center' : 'justify-end'" class="w-full md:w-4/12 md:mx-auto bg-white p-8 flex gap-10 border-t border-gray-100">
      <template v-for="menu in menus" :key="menu.name">
        <button v-if="menu.routes.includes( routeName )" @click="active = menu.name" :class="menu.name == active || routeName == 'Detail' ? 'bg-sunset-orange rounded-full text-gray-100 shadow-xl -translate-y-3' : 'text-gray-400'" class="text-xl duration-100 w-16 h-16"><i class="fa-solid" :class="menu.icon"></i></button>
      </template>
    </section>
  </section>
</template>

<script setup lang="ts">

import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

type Menu = {
  name: string
  icon: string
  routes: string[]
}

const route = useRoute()

const routeName = computed(() => route.name as string)

const active = ref<string>('add')

const menus: Array<Menu> = [
  {
    name: 'home',
    icon: 'fa-home',
    routes: ['Home']
  },
  {
    name: 'add',
    icon: 'fa-plus',
    routes: ['Detail', 'Home']
  },
  {
    name: 'gear',
    icon: 'fa-cog',
    routes: ['Home']
  },
]

</script>
