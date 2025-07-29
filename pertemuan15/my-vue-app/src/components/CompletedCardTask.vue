<template>
    <div class="border border-[#a1a3aba6] py-2 px-10 mt-4 rounded-xl relative w-full">
        <Icon class="absolute top-2 left-2 text-green-600" icon="gg:radio-check" width="16" height="16" />
        <div class="flex items-center justify-between gap-4">
            <div>
                <h3 class="text-md font-semibold mb-2 line-clamp-2 overflow-ellipsis">
                    Web Service & Responsive Design - Vue
                </h3>
                <p class="text-sm text-gray-700 line-clamp-2 overflow-ellipsis">
                    Make a web application using Vue.js and submit it to the repository on GitHub or another platform.
                    Use Vue Router for navigation and Vuex for state management.
                </p>
                <p class="text-[10px] mt-4">
                    Status: <span class="text-green-500">Completed</span>
                </p>
                <p class="text-[10px] text-gray-500">Completed 2 days ago</p>
            </div>
            <div>
                <img class="hidden md:block md:w-50 lg:w-100 2xl:w-30 h-auto rounded-lg"
                    src="https://github.com/prettier.png" alt="Task illustration" />
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>