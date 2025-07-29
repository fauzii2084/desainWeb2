<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-gradient-to-r from-blue-700 to-blue-400 text-white px-8 py-5 shadow-lg flex items-center justify-between">
      <h1 class="text-2xl font-extrabold tracking-wide flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        User Manager
      </h1>

      <!-- Tombol Tambah -->
      <router-link to="/add" class="bg-white text-blue-700 px-4 py-2 rounded font-semibold hover:bg-blue-100 transition">
        + Tambah User
      </router-link>
    </header>

    <!-- Konten Utama -->
    <main class="flex-1 p-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="max-w-4xl mx-auto rounded-lg shadow-md bg-white p-8 min-h-[60vh]">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<script>
export default {
    name: 'Layout',
};
</script>

<style scoped>
</style>