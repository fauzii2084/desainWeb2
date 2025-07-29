import { defineStore } from "pinia";
import { getAllTodos } from "@/api/todoApi";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [],
    isLoading: false,
    error: null,
    fetched: false,
  }),
  actions: {
    async fetchTodos() {
      if (this.fetched) return;
      this.isLoading = true;
      try {
        const res = await getAllTodos();
        this.todos = res.data.todos;
        this.fetched = true;
      } catch (err) {
        this.error = err;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
