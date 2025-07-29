<template>
  <div>
    <nav class="p-4 bg-gray-200 flex gap-4 font-semibold">
      <router-link to="/" class="text-blue-600 hover:underline">Daftar User</router-link>
      <router-link to="/create" class="text-blue-600 hover:underline">Tambah User</router-link>
    </nav>
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// Tidak perlu import router-link dan router-view
</script>
