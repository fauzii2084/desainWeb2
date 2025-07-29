<template>
    <div>
        <div class="shadow-xl rounded-xl py-6 px-8 w-full border border-gray-300 lg:border-none">
            <div class="flex items-center gap-2 mb-4">
                <Icon class="text-gray-500" icon="tdesign:task-checked" width="24" height="24" />
                <h2 class="text-[#ff6767] font-semibold">Task Status</h2>
            </div>
            <TaskStatus />
        </div>
        <div class="shadow-lg rounded-xl py-6 px-8 border border-gray-300 lg:border-none mt-4 w-full">
            <div class="flex items-center gap-2 mb-4">
                <Icon class="text-gray-500" icon="fluent:clipboard-task-24-regular" width="30" height="30" />
                <h2 class="text-[#ff6767] font-semibold">Completed Task</h2>
            </div>
            <CompletedCardTask />
            <CompletedCardTask />
            <CompletedCardTask />
        </div>
    </div>
</template>

<script setup>
import TaskStatus from '@/components/TaskStatus.vue';
import CompletedCardTask from '@/components/CompletedCardTask.vue';
import { Icon } from '@iconify/vue';
</script>