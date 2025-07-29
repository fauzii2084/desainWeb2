<template>
   <Layout>
      <div class="mx-4 md:mx-0">
         <h2 class="text-2xl md:text-4xl font-semibold mb-8">Welcome back, Muhamad Rifki Fauzi!</h2>
         <div class="lg:border border-[#a1a3aba6] lg:p-8 rounded-xl flex flex-col lg:flex-row gap-4">
            <div class="lg:w-1/2 md:border border-gray-300 rounded-xl lg:border-none">
               <ToDo />
            </div>
            <div class="lg:w-1/2">
               <CompletedTask />
            </div>
         </div>
      </div>
   </Layout>
</template>

<script setup>
import Layout from '@/Layouts/Layout.vue';
import ToDo from '@/sections/ToDo.vue';
import CompletedTask from '@/sections/CompletedTask.vue';
</script>