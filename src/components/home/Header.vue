<template>
  <header class="w-full fixed top-0 left-0 right-0 z-20">
    <!-- wrapper -->
    <section class="w-full md:w-4/12 md:mx-auto bg-white p-8">
      <!-- row -->
      <section class="flex justify-between">
        <!-- user -->
        <div class="flex gap-4 items-center w-7/12">
          <!-- avatar -->
          <div><img src="/avatar.png" alt="avatar" class="rounded-full h-12 shadow-lg"/></div>
          <!-- copywriter -->
          <div>
            <p class="text-xs text-gray-400">Welcome back</p>
            <h1 class="text-md font-semibold text-gray-700">Amirul Islam</h1>
          </div>
        </div>
        <!-- icons -->
        <div class="text-gray-600 flex gap-2">
          <button class="w-10 h-10 border border-gray-200 rounded-full hover:bg-gray-600 hover:text-gray-200 duration-300"><i class="fa-regular fa-calendar"></i></button>
          <button class="w-10 h-10 border border-gray-200 rounded-full hover:bg-gray-600 hover:text-gray-200 duration-300"><i class="fa-regular fa-bell"></i></button>
        </div>
      </section>
    </section>
  </header>
</template>

<script setup lang="ts">


</script>
