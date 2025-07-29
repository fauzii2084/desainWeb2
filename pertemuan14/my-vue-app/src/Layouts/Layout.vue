<template>
    <div class="min-h-screen flex flex-col bg-[#F5F8FF]">
        <Header @toggle-sidebar="sidebarOpen = !sidebarOpen" ></Header>
        <div class="flex flex-1">
            <Sidebar :show="sidebarOpen" @close="sidebarOpen = false" />
            <main class="flex-1 overflow-y-auto mt-24 md:mt-35 md:ms-64 lg:ms-105 md:me-4 lg:me-16">
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import Sidebar from '@/components/Sidebar.vue';

const sidebarOpen = ref(false);
</script>