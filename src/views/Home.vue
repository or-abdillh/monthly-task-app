<template>
  <!-- header -->
  <HomeHeader></HomeHeader>
  <!-- end of header -->

  <!-- stats -->
  <section class="flex justify-between items-center pt-24 mb-8">
    <!-- tasks -->
    <div class="w-6/12">
      <h1 class="text-lg font-semibold text-gray-700 mb-2">My Monthly Task</h1>
      <p class="text-gray-400 text-sm">8 Tasks for <span class="underline">today</span></p>
    </div>

    <!-- actions -->
    <div class="w-4/12 flex gap-6 justify-end">
      <button class="active:scale-95 duration-300"><i class="fa-solid fa-search text-xl"></i></button>
      <button class="bg-sunset-orange text-gray-100 w-12 h-12 rounded-full active:scale-95 duration-300"><i class="fa-solid fa-plus text-xl"></i></button>
    </div>
  </section>
  <!-- end of stats -->

  <!-- cards -->
  <section class="mb-8">
    <Swiper :pagination="{ clickable: true }" :space-between="30" :slides-per-view="'auto'" :modules="[Pagination]">
      <template v-for="card in 5" :key="card">
        <SwiperSlide>
          <HomeCard :index="card"></HomeCard>
        </SwiperSlide>
      </template>
    </Swiper>
  </section>
  <!-- end of cards -->

  <section>
    <!-- header -->
    <div class="flex justify-between items-center mb-6">
      <h1 class="font-semibold text-gray-700 text-lg">Upcoming Plans</h1>
      <h1 class="font-semibold text-gray-400 text-lg">See All</h1>
    </div>

    <!-- lists -->
    <div class="flex flex-col gap-3">
      <template v-for="list in 6" :key="list">
        <HomeList :index="list"></HomeList>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">

import HomeHeader from '../components/home/Header.vue'
import HomeCard from '../components/home/Card.vue'
import HomeList from '../components/home/List.vue'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

</script>
