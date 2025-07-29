<template>
    <div class="shadow-lg border border-gray-300 lg:border-none rounded-xl py-6 px-4 md:px-4 w-full">
            <div class="flex justify-between">
               <div class="flex items-center gap-2">
                  <Icon class="text-gray-500" icon="tdesign:task-time" width="24" height="24" />
                  <h2 class="text-[#ff6767] font-semibold">To-Do</h2>
               </div>
               <div class="flex items-center gap-2">
                  <Icon class="text-gray-500" icon="basil:plus-solid" width="24" height="24" />
                  <h2 class="text-gray-500 text-sm">Add Task</h2>
               </div>
            </div>
            <p class="text-sm my-4">{{ new Date().toLocaleDateString('en-US', {
               weekday: 'long', month: 'long', day:
               'numeric' }) }}, <span class="text-gray-500">Today</span></p>
            <div class="grid grid-cols-1 2xl:grid-cols-2 gap-4 justify-between px-2">
               <CardTask />
               <CardTask />
               <CardTask />
               <CardTask />
               <CardTask />
               <CardTask />
               <CardTask />
               <CardTask />
            </div>
         </div>
</template>

<script setup>
import CardTask from '@/components/CardTask.vue';
import { Icon } from '@iconify/vue';
</script>