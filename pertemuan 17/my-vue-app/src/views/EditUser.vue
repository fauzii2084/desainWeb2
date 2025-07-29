<template>
  <Layout>
    <h2 class="text-2xl font-semibold mb-6 text-blue-800">Edit User</h2>

    <div v-if="loading" class="text-gray-500">Memuat data user...</div>

    <form v-else @submit.prevent="updateUser" class="space-y-5 max-w-md">
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
        Update
      </button>
    </form>
  </Layout>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Layout from '../components/Layout.vue'

const route = useRoute()
const router = useRouter()

const userId = route.params.id
const loading = ref(true)

const form = ref({
  name: '',
  email: '',
  avatar: ''
})

onMounted(async () => {
  try {
    const res = await fetch(`https://68886995adf0e59551b9d98e.mockapi.io/users/${userId}`)
    const data = await res.json()
    form.value = {
      name: data.name,
      email: data.email,
      avatar: data.avatar
    }
    console.log("Test", data.name)
  } catch (error) {
    console.error('Gagal mengambil data user:', error)
  } finally {
    loading.value = false
  }
})

const updateUser = async () => {
  try {
    await fetch(`https://68886995adf0e59551b9d98e.mockapi.io/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form.value)
    })

    router.push('/')
  } catch (error) {
    console.error('Gagal mengupdate user:', error)
  }
}
</script>
