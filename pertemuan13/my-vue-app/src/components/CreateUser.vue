<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Tambah Pengguna Baru</h2>
    <form @submit.prevent="createUser">
      <input v-model="name" placeholder="Nama" class="border px-2 py-1 mb-2 block" />
      <input v-model="job" placeholder="Pekerjaan" class="border px-2 py-1 mb-2 block" />
      <button type="submit" class="bg-blue-500 text-white px-4 py-1 rounded" :disabled="loading">
        {{ loading ? 'Mengirim...' : 'Submit' }}
      </button>
    </form>

    <div v-if="responseId" class="mt-4 text-green-600">
      Pengguna berhasil dibuat! ID: {{ responseId }}
    </div>
    <div v-if="errorMsg" class="mt-4 text-red-600">
      {{ errorMsg }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')
const job = ref('')
const responseId = ref(null)
const errorMsg = ref('')
const loading = ref(false)

const createUser = async () => {
  errorMsg.value = ''
  responseId.value = null
  loading.value = true

  if (!name.value || !job.value) {
    errorMsg.value = 'Nama dan pekerjaan wajib diisi'
    loading.value = false
    return
  }

  try {
    const res = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      headers: { 'x-api-key': 'reqres-free-v1' },
      body: JSON.stringify({
        name: name.value,
        job: job.value
      })
    })

    console.log('Status code:', res.status)

    if (!res.ok) throw new Error('Gagal submit')

    const data = await res.json()
    responseId.value = data.id

    // Simpan user ke localStorage setelah berhasil
    const newUser = {
      id: data.id,
      first_name: name.value,
      last_name: '',
      email: `${name.value.toLowerCase()}@mail.com`,
      avatar: 'https://i.pravatar.cc/150?u=' + data.id // avatar dummy
    }

    const savedUsers = JSON.parse(localStorage.getItem('newUsers') || '[]')
    savedUsers.push(newUser)
    localStorage.setItem('newUsers', JSON.stringify(savedUsers))

    // Bersihkan input
    name.value = ''
    job.value = ''
  } catch (err) {
    errorMsg.value = 'Gagal membuat pengguna. Coba lagi.'
  } finally {
    loading.value = false
  }
}
</script>
