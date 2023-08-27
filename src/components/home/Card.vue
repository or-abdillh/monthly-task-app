<template>
  <section class="px-6 py-8 bg-vivid-tangerine rounded-3xl shadow-sm">
    <header class="flex justify-between mb-8">
      <!-- label -->
      <span class="px-8 py-2 rounded-full bg-orange-100 bg-opacity-60 text-gray-100 font-semibold">Top</span>
      <!-- action -->
      <button class="rounded-full bg-orange-100 bg-opacity-60 h-10 w-10 text-gray-100"><i class="fa-solid fa-plus"></i></button>
    </header>

    <!-- body -->
    <section class="mb-4">
      <p class="text-2xl text-gray-100 font-semibold">Dribble Shoots for this monthly</p>
    </section>

    <!-- footer -->
    <section class="flex justify-between items-center text-gray-100">
      <div>
        <i class="fa-regular fa-calendar"></i>
        16 Feb
      </div>
      <div class="flex gap-6">
        <span>
          <i class="fa-regular fa-message"></i>
          6
        </span>
        <span>
          <i class="fa-regular fa-flag"></i>
          6
        </span>
      </div>
    </section>
  </section>
</template>

<script lang="ts" setup>

defineProps({
  index: {
    type: Number
  }
})

</script>
