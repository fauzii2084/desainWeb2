<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Daftar Pengguna</h2>
    <ul>
      <li v-for="user in users" :key="user.id" class="mb-2">
        <img :src="user.avatar" class="w-12 h-12 inline rounded-full mr-2" />
        {{ user.first_name }} {{ user.last_name }}
        <button @click="goToDetail(user.id)" class="ml-4 text-blue-500 underline">Lihat Detail</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const users = ref([])
const router = useRouter()

const getUsers = async () => {
  try {
    const response = await axios.get('https://reqres.in/api/users', {
      headers: {
        'x-api-key': 'reqres-free-v1'
      }
    })
    const apiUsers = response.data.data

    const localUsers = JSON.parse(localStorage.getItem('newUsers') || '[]')
    users.value = [...apiUsers, ...localUsers]
  } catch (err) {
    console.error('Gagal mengambil data pengguna:', err)
    users.value = JSON.parse(localStorage.getItem('newUsers') || '[]') // fallback jika API gagal
  }
}

const goToDetail = (id) => {
  router.push(`/user/${id}`)
}

onMounted(getUsers)
</script>
