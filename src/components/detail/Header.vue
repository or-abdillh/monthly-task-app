<template>
  <header>
    <!-- wrapper -->
    <section class="flex justify-between items-center mb-8">
      <div class="flex gap-3 items-center">
        <!-- month options -->
        <select class="appearance-none bg-white text-lg outline-none active:scale-90 duration-300">
          <template v-for="month in months" :key="month.value">
            <option :value="month.value">{{ month.name }}</option>
          </template>
        </select>
        <!-- option button -->
        <i class="fa-solid fa-chevron-down"></i>
      </div>
      <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
    </section>

    <!-- Dates picker -->
    <section class="flex justify-between gap-3">
      <template v-for="date in dates" :key="date.number">
        <div class="flex flex-col gap-2">
          <p class="text-gray-700">{{ date.day }}</p>
          <span @click="activeDate = date.number"
            :class="{ 'text-gray-400': date.isPast, 'text-gray-700': !date.isPast, 'bg-sunset-orange text-gray-100 shadow': date.number == activeDate }"
            class="h-10 w-10 border border-gray-100 text-sm grid place-items-center rounded-xl duration-300">{{
              date.number }}</span>
        </div>
      </template>
    </section>
  </header>
</template>

<script setup lang="ts">

import { ref } from 'vue'

type Month = {
  name: string
  value: string
}

type Date = {
  day: string
  number: number
  isPast: boolean
}

const activeDate = ref<number>(1)

const dates: Array<Date> = [
  { day: 'Mon', number: 28, isPast: true },
  { day: 'Tue', number: 29, isPast: true },
  { day: 'Wed', number: 30, isPast: true },
  { day: 'Thu', number: 1, isPast: false },
  { day: 'Fri', number: 2, isPast: false },
  { day: 'Sat', number: 3, isPast: false },
  { day: 'Sun', number: 4, isPast: false },
]

const months: Array<Month> = [
  {
    name: 'January',
    value: 'jan'
  },
  {
    name: 'February',
    value: 'feb'
  },
  {
    name: 'March',
    value: 'mar'
  },
  {
    name: 'April',
    value: 'apr'
  },
  {
    name: 'May',
    value: 'may'
  },
  {
    name: 'June',
    value: 'jun'
  },
  {
    name: 'July',
    value: 'jul'
  },
  {
    name: 'August',
    value: 'aug'
  },
  {
    name: 'September',
    value: 'sep'
  },
  {
    name: 'October',
    value: 'oct'
  },
  {
    name: 'November',
    value: 'nov'
  },
  {
    name: 'December',
    value: 'dec'
  },
]

</script>
