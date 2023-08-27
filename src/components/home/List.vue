<template>
  <section class="w-full p-4 border border-gray-100 rounded-xl flex justify-between items-start">
    <div class="flex gap-4 items-center w-10/12">
      <div>
        <span class="w-12 h-12 grid place-items-center rounded-xl bg-sky-blue">
          <i class="fa-solid fa-phone text-gray-100"></i>
        </span>
      </div>
      <div>
        <p class="uppercase text-sm text-gray-400 mb-2">Cat Food</p>
        <p class="font-semibold text-gray-700 mb-1">Find new pet home for my new cat</p>
        <small class="text-gray-400">
          <i class="fa-regular fa-calendar"></i>
          25 Apr
        </small>
      </div>
    </div>

    <div><i class="fa-solid fa-ellipsis"></i></div>
  </section>
</template>

<script lang="ts" setup>

defineProps({
  index: {
    type: Number
  }
})

</script>
