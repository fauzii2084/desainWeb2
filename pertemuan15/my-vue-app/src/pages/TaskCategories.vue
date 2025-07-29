<template>
   <Layout>
      <div class="md:border border-[#a1a3aba6] md:p-4 lg:p-8 rounded-xl mx-4 md:mx-0 mt-2">
         <div class="flex items-center justify-between gap-2">
            <h2 class="text-2xl font-semibold">Task Categories</h2>
            <p class="underline underline-offset-4">Go Back</p>
         </div>
         <button class="text-white bg-red-500 py-2 px-4 rounded-lg my-4 hover:bg-red-600 transition-colors">
            Add New Category
         </button>
         <div class="mt-8">
            <TableCategorie />
         </div>
      </div>
   </Layout>
</template>

<script setup>
import Layout from '@/Layouts/Layout.vue';
import TableCategorie from '@/components/TableCategorie.vue';
</script>