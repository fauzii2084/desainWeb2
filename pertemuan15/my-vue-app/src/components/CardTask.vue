<template>
    <div class="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-4 ">
        <div v-for="task in todoStore.todos" :key="task.id"
            class="border border-[#a1a3aba6] py-2 px-10 rounded-xl relative bg-white shadow-sm flex flex-col justify-between">
            <Icon class="absolute top-2 left-2 text-blue-500" icon="gg:radio-check" width="16" height="16" />
            <div class="flex items-center justify-between gap-4">
                <div class="min-w-0">
                    <h3 class="text-md font-semibold mb-2 line-clamp-2 overflow-ellipsis">{{ task.todo }}</h3>
                    <p class="text-sm text-gray-700 line-clamp-4 overflow-ellipsis">
                        User ID: {{ task.userId }}<br />
                        Completed: <span :class="task.completed ? 'text-green-500' : 'text-red-500'">{{ task.completed ? 'Yes' : 'No' }}</span>
                    </p>
                </div>
            </div>
            <div class="flex text-[10px] gap-3 mt-4 flex-wrap">
                <p>ID: <span class="text-blue-400">{{ task.id }}</span></p>
                <p>Status: <span :class="task.completed ? 'text-green-600' : 'text-blue-700'">{{ task.completed ? 'Completed' : 'In Progress' }}</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { onMounted } from "vue";
import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();

onMounted(async () => {
  await todoStore.fetchTodos();
});

</script>