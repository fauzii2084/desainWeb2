<template>
    <header class="bg-[#f8f8f8] text-black p-6 shadow-md flex items-center justify-between fixed top-0 left-0 w-full z-50">
        <h1 v-if="route.path === '/'" class="text-2xl font-bold"><span class="text-[#ff6767]">Dash</span>board</h1>
        <h1 v-else-if="route.path === '/my-task'" class="text-2xl font-bold"><span class="text-[#ff6767]">My</span>Task
        </h1>
        <h1 v-else-if="route.path === '/task-categories'" class="text-2xl font-bold"><span
                class="text-[#ff6767]">Task</span>Categories</h1>
        <h1 v-else class="text-2xl font-bold"><span class="text-[#ff6767]">Not</span>Found</h1>
        <button class="md:hidden focus:outline-none" @click="$emit('toggle-sidebar')" aria-label="Open sidebar">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
    </header>
</template>

<script setup>
import { useRoute } from 'vue-router';
const emit = defineEmits(['toggle-sidebar'])
const route = useRoute();
</script>