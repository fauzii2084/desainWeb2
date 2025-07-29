<template>
   <Layout>
      <div class="mx-4 md:mx-0 flex flex-col lg:flex-row gap-4 mt-2">
         <div class="md:border border-[#a1a3aba6] md:p-4 lg:p-8 rounded-xl lg:w-3/4">
            <h2 class="text-xl font-semibold underline underline-offset-4">My Tasks</h2>
            <div class="grid grid-cols-1 2xl:grid-cols-2 gap-4 justify-between mt-4">
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
         <div class="border border-[#a1a3aba6] p-4 lg:p-8 rounded-xl flex flex-col gap-4 lg:w-2/4">
            <TaskDetail />
         </div>
      </div>
   </Layout>
</template>

<script setup>
import Layout from '@/Layouts/Layout.vue';
import CardTask from '@/components/CardTask.vue';
import TaskDetail from '@/components/TaskDetail.vue';
</script>