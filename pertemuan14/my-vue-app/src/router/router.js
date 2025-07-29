import { createWebHistory, createRouter } from "vue-router";

import Dashboard from "@/pages/Dashboard.vue";
import MyTask from "../pages/MyTask.vue";
import TaskCategories from "@/pages/TaskCategories.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
    { path: "/", component: Dashboard },
    { path: "/my-task", component: MyTask },
    { path: "/task-categories", component: TaskCategories },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;