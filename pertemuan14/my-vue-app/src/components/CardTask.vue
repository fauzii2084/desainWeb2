<template>
    <div class="border border-[#a1a3aba6] py-2 px-10 rounded-xl relative">
        <Icon class="absolute top-2 left-2 text-blue-500" icon="gg:radio-check" width="16" height="16" />
        <div class="flex items-center justify-between gap-4">
            <div>
                <h3 class="text-md font-semibold mb-2 line-clamp-2 overflow-ellipsis">
                    Web Service & Responsive Design - Vue
                </h3>
                <p class="text-sm text-gray-700 line-clamp-4 overflow-ellipsis">
                    Make a web application using Vue.js and submit it to the repository on GitHub or another platform.
                    Use Vue Router for navigation and Vuex for state management.
                </p>
            </div>
            <div>
                <img class="hidden md:block md:w-50 lg:w-100 h-auto rounded-lg" src="https://github.com/prettier.png"
                    alt="Task illustration" />
            </div>
        </div>
        <div class="flex text-[10px] gap-3 mt-4">
            <p>Priority: <span class="text-blue-400">Moderrate</span></p>
            <p>Status: <span class="text-blue-700">In Progress</span></p>
            <p class="text-gray-400">Created At: <span>2025-06-15</span></p>
        </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>