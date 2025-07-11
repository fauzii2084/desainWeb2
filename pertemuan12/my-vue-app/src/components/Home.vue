<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold text-blue-600">Home Page</h1>
    <p class="my-2 text-lg">Counter: {{ counter.count }}</p>

    <div class="space-x-4 mt-4">
      <button
        @click="counter.increment()"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Tambah
      </button>

      <button
        @click="counter.reset()"
        class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
      >
        Hapus
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCounterStore } from '../stores/counter'
const counter = useCounterStore()
</script>
