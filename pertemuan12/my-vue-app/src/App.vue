<template>
  <div class="p-6">
    <nav class="space-x-4">
      <router-link to="/" class="text-blue-500 hover:underline">Home</router-link>
      <router-link to="/about" class="text-green-500 hover:underline">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
