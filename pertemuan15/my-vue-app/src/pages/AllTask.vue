<template>
   <Layout>
         <div class="md:border border-[#a1a3aba6] md:p-4 p-8 rounded-xl">
            <h2 class="text-xl font-semibold underline underline-offset-4 mb-4">Tasks</h2>
            <CardTask />
         </div>
   </Layout>
</template>

<script setup>
import Layout from '@/Layouts/Layout.vue';
import CardTask from '@/components/CardTask.vue';
</script>