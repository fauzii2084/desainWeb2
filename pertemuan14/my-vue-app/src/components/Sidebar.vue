<template>
    <aside
        class="bg-transparent md:bg-[#ff6767] backdrop-blur-md w-full md:w-60 lg:w-90 min-h-[calc(100vh-400px)] p-6 shadow fixed top-0 md:top-20 md:mt-16 rounded-r-xl left-0 h-full z-55 transition-transform duration-200"
        :class="[
            show ? 'translate-x-0' : '-translate-x-full',
            'md:translate-x-0 md:block'
        ]">

        <button class="md:hidden mb-4 focus:outline-none w-full" @click="$emit('close')" aria-label="Close sidebar">
            <svg class="w-6 h-6 ms-auto" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>
        <div
            class="absolute md:top-[-35px] left-[50%] transform -translate-x-1/2 flex flex-col items-center justify-center">
            <img class="rounded-full"
                src="https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg?semt=ais_hybrid&w=70"
                alt="">
            <h2 class="md:text-white text-lg font-semibold mt-2">Muhamad Rifki Fauzi</h2>
            <p class="md:text-white text-sm">fauzii2084@gmail.com</p>
        </div>
        <nav class="md:text-white space-y-4 flex flex-col justify-center mt-40 md:mt-24 w-full">
            <router-link to="/" exact-active-class="bg-[#ff6767]/40 md:bg-white text-[#ff6767] rounded-md"
                class="hover:text-black px-4 py-2 flex gap-2 items-center w-full">
                <Icon icon="material-symbols:dashboard" width="24" height="24" />
                <p class="font-semibold">Dashboard</p>
            </router-link>
            <router-link to="/my-task" exact-active-class="bg-[#ff6767]/30 md:bg-white text-[#ff6767] rounded-md"
                class="hover:text-black px-4 py-2 flex gap-2 items-center w-full">
                <Icon icon="bx:task" width="24" height="24" />
                <p class="font-semibold">My Task</p>
            </router-link>
            <router-link to="/task-categories" exact-active-class="bg-[#ff6767]/30 md:bg-white text-[#ff6767] rounded-md"
                class="hover:text-black px-4 py-2 flex gap-2 items-center w-full">
                <Icon icon="carbon:collapse-categories" width="32" height="32" />
                <p class="font-semibold">Task Categories</p>
            </router-link>
        </nav>
    </aside>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['close'])
</script>