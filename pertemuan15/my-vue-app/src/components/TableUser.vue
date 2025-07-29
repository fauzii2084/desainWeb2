<template>
  <div v-if="userStore.isLoading" class="flex justify-center items-center h-40 text-lg font-semibold text-blue-600">Loading...</div>
  <div v-else class="flex justify-center p-4 bg-gray-50 min-h-[60vh]">
    <div class="w-full bg-white rounded-xl shadow-xl overflow-x-auto border border-gray-200">
      <table class="w-full text-sm min-w-[600px]">
        <thead>
          <tr class="bg-gray-200">
            <th class="px-4 md:px-6 py-3 md:py-4 text-center  font-semibold text-gray-700">No</th>
            <th class="px-4 md:px-6 py-3 md:py-4 text-center  font-semibold text-gray-700">Nama</th>
            <th class="px-4 md:px-6 py-3 md:py-4 text-center  font-semibold text-gray-700">Username</th>
            <th class="px-4 md:px-6 py-3 md:py-4 text-center  font-semibold text-gray-700">Role</th>
            <th class="px-4 md:px-6 py-3 md:py-4 text-center  font-semibold text-gray-700">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, idx) in userStore.users" :key="user.id" class="hover:bg-gray-50 transition">
            <td class="px-4 md:px-6 py-3 md:py-4 text-gray-500">{{ idx + 1 }}</td>
            <td class="px-4 md:px-6 py-3 md:py-4 text-gray-900 font-medium whitespace-nowrap">{{ user.firstName }} {{ user.lastName }}</td>
            <td class="px-4 md:px-6 py-3 md:py-4 text-gray-700 whitespace-nowrap">{{ user.username }}</td>
            <td class="px-4 md:px-6 py-3 md:py-4 text-center">
              <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-700 capitalize">{{ user.role }}</span>
            </td>
            <td class="flex px-4 md:px-6 py-3 md:py-4 space-x-2 justify-center">
              <button @click="editUser(user)" class="inline-flex items-center gap-1 bg-white border border-yellow-400 text-yellow-600 hover:bg-yellow-50 px-3 py-1.5 rounded-full shadow-sm transition text-xs font-semibold">
                <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h2v2a2 2 0 002 2h2a2 2 0 002-2v-2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2H7a2 2 0 00-2 2v2a2 2 0 002 2z'/></svg>
                Edit
              </button>
              <button @click="deleteUser(user)" class="inline-flex items-center gap-1 bg-white border border-red-400 text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-full shadow-sm transition text-xs font-semibold">
                <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12'/></svg>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useUserStore } from '@/stores/userStore';

const userStore = useUserStore();

onMounted(() => {
  userStore.fetchUsers();
});

function editUser(user) {
  alert(`Edit user: ${user.firstName} ${user.lastName}`);
}

function deleteUser(user) {
  alert(`Delete user: ${user.firstName} ${user.lastName}`);
}
</script>