<template>
  <Layout>
    <h2 class="text-2xl font-semibold mb-6 text-blue-800">Tambah User</h2>

    <form @submit.prevent="submitUser" class="space-y-5 max-w-md">
      <div>
        <label class="block mb-1 font-medium text-gray-700">Nama</label>
        <input
          v-model="form.name"
          type="text"
          class="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Masukkan nama"
          required
        />
      </div>

      <div>
        <label class="block mb-1 font-medium text-gray-700">Email</label>
        <input
          v-model="form.email"
          type="email"
          class="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Masukkan email"
          required
        />
      </div>

      <div>
        <label class="block mb-1 font-medium text-gray-700">Avatar (URL)</label>
        <input
          v-model="form.avatar"
          type="text"
          class="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Masukkan URL gambar"
        />
      </div>

      <button
        type="submit"
        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition font-semibold"
      >
        Simpan
      </button>
    </form>
  </Layout>
</template>

<script setup>
import { ref } from 'vue'
import Layout from '../components/Layout.vue'
import { useRouter } from 'vue-router'

const form = ref({
  name: '',
  email: '',
  avatar: '',
})

const router = useRouter()

const submitUser = async () => {
  try {
    await fetch('https://68886995adf0e59551b9d98e.mockapi.io/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    router.push('/')
  } catch (error) {
    console.error('Gagal menambahkan user:', error)
  }
}
</script>
