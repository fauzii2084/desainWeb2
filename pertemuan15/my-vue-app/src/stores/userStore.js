import { defineStore } from "pinia";
import { getAllUsers } from "@/api/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    isLoading: false,
    error: null,
    fetched: false,
  }),
  actions: {
    async fetchUsers() {
      if (this.fetched) return; 
      this.isLoading = true;
      try {
        const res = await getAllUsers();
        this.users = res.data.users;
        this.fetched = true; 
      } catch (err) {
        this.error = err;
      } finally {
        this.isLoading = false;
      }
    },
  },
});
