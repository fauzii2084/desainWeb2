<template>
    <div class="flex gap-6 justify-center items-center w-full flex-wrap">
        <div class="flex flex-col items-center">
            <svg class="w-20 h-20 xl:w-30 xl:h-30" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="16" fill="none" stroke="#e5e7eb" stroke-width="4" />
                <circle cx="20" cy="20" r="16" fill="none" stroke="#22c55e" stroke-width="4" stroke-linecap="round"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="circumference - circumference * completed / 100" />
                <text x="20" y="22" text-anchor="middle" font-size="6" font-weight="bold">{{ completed }}%</text>
            </svg>
            <span class="mt-2 text-sm font-medium">Completed</span>
        </div>
        <div class="flex flex-col items-center">
            <svg class="w-20 h-20 xl:w-30 xl:h-30" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="16" fill="none" stroke="#e5e7eb" stroke-width="4" />
                <circle cx="20" cy="20" r="16" fill="none" stroke="#3b82f6" stroke-width="4" stroke-linecap="round"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="circumference - circumference * inProgress / 100" />
                <text x="20" y="22" text-anchor="middle" font-size="6" font-weight="bold">{{ inProgress }}%</text>
            </svg>
            <span class="mt-2 text-sm font-medium">In Progress</span>
        </div>
        <div class="flex flex-col items-center">
            <svg class="w-20 h-20 xl:w-30 xl:h-30" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="16" fill="none" stroke="#e5e7eb" stroke-width="4" />
                <circle cx="20" cy="20" r="16" fill="none" stroke="#ff0000 " stroke-width="4" stroke-linecap="round"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="circumference - circumference * notStarted / 100" />
                <text x="20" y="22" text-anchor="middle" font-size="6" font-weight="bold">{{ notStarted }}%</text>
            </svg>
            <span class="mt-2 text-sm font-medium">Not Started</span>
        </div>
    </div>
</template>

<script setup>
const notStarted = 13;
const inProgress = 46;
const completed = 84;
const circumference = 2 * Math.PI * 16;
</script>
