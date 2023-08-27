<template>
  <!-- header -->
  <DetailHeader class="mb-8"></DetailHeader>
  <!-- end of header -->

  <!-- tasks -->
  <section>
    <!-- header -->
    <section class="mb-6">
      <p class="text-sm text-gray-400 mb-2">3 Tasks for today</p>
      <h1 class="text-3xl font-semibold text-gray-700">Daily Task</h1>
    </section>

    <!-- timelines -->
    <section class="flex justify-between ">
      <!-- times -->
      <div class="w-3/12 flex flex-col gap-12">
        <template v-for="time in times" :key="time">
          <p class="font-semibold text-gray-700">{{ time }}</p>
        </template>
      </div>

      <!-- items -->
      <div class="w-9/12">
        <!-- first -->
        <div class="pb-4 border-b border-gray-200 mb-10">
          <!-- wrapper -->
          <div class="w-full p-3 rounded-full bg-slate-100 flex items-center gap-2">
            <div><span
                class="w-16 h-16 bg-slate-700 grid place-items-center rounded-full text-gray-100 font-semibold">CD</span>
            </div>
            <div>
              <p class="text-gray-700 font-semibold text-sm">Coding an app</p>
              <small class="text-gray-400">
                <i class="fa-regular fa-clock"></i>
                7am - 10am
              </small>
            </div>
          </div>
        </div>
        <!-- second -->
        <div class="pb-8 border-b border-gray-200">

          <!-- wrapper -->
          <div class="w-full py-3 px-5 rounded-xl bg-slate-100 mb-4">
            <div class="flex justify-between items-center mb-6">
              <p class="text-gray-700 font-medium text-lg">Review App Design</p>
              <i class="fa-solid fa-ellipsis"></i>
            </div>

            <div>
              <img src="/banners.png" class="mb-6" alt="banners">
              <div class="flex justify-between">
                <!-- users -->
                <div class="flex items-center">
                  <img src="/avatar.png" class="w-8 h-8 rounded-full border border-gray-100" alt="avatar">
                  <img src="/avatar.png" class="w-8 h-8 rounded-full border border-gray-100 -translate-x-3" alt="avatar">
                  <img src="/avatar.png" class="w-8 h-8 rounded-full border border-gray-100 -translate-x-6" alt="avatar">
                </div>
                <!-- action -->
                <button class="w-10 h-10 bg-slate-800 rounded-full text-gray-100"><i
                    class="fa-solid fa-phone"></i></button>
              </div>
            </div>
          </div>

          <!-- wrapper -->
          <div class="w-full p-3 rounded-full bg-slate-100 flex items-center gap-2">
            <div><span
                class="w-16 h-16 bg-slate-700 grid place-items-center rounded-full text-gray-100 font-semibold">CD</span>
            </div>
            <div>
              <p class="text-gray-700 font-semibold text-sm">Coding Cap app</p>
              <small class="text-gray-400">
                <i class="fa-regular fa-clock"></i>
                10am - 1:00pm
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup lang="ts">

import DetailHeader from '../components/detail/Header.vue'

const times: Array<string> = ['09:00', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00']

</script>
