<template>
    <div class="overflow-x-auto">
        <h1 class="text-lg font-semibold mb-4">Task Status</h1>
        <div class="rounded-xl border border-gray-200 overflow-hidden mb-12">
            <table class="table-auto w-full">
                <thead>
                    <tr class="border-b border-gray-200">
                        <th class="p-2 text-center border-r border-gray-200 w-16">SN</th>
                        <th class="p-2 text-center border-r border-gray-200 w-3/4">Task Status</th>
                        <th class="p-2 text-center w-2/4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="p-4 text-center border-r border-gray-200 w-16">1</td>
                        <td class="p-4 text-center border-r border-gray-200">Not Started</td>
                        <td class="flex px-4 md:px-6 py-3 md:py-4 space-x-2 justify-center">
                            <button @click="editUser()"
                                class="inline-flex items-center gap-1 bg-white border border-yellow-400 text-yellow-600 hover:bg-yellow-50 px-3 py-1.5 rounded-full shadow-sm transition text-xs font-semibold">
                                <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                                        d='M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h2v2a2 2 0 002 2h2a2 2 0 002-2v-2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2H7a2 2 0 00-2 2v2a2 2 0 002 2z' />
                                </svg>
                                Edit
                            </button>
                            <button @click="deleteUser()"
                                class="inline-flex items-center gap-1 bg-white border border-red-400 text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-full shadow-sm transition text-xs font-semibold">
                                <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                                        d='M6 18L18 6M6 6l12 12' />
                                </svg>
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td class="p-4 text-center border-r border-gray-200 w-16">2</td>
                        <td class="p-4 text-center border-r border-gray-200">In Progress</td>
                        <td class="flex px-4 md:px-6 py-3 md:py-4 space-x-2 justify-center">
                            <button @click="editUser()"
                                class="inline-flex items-center gap-1 bg-white border border-yellow-400 text-yellow-600 hover:bg-yellow-50 px-3 py-1.5 rounded-full shadow-sm transition text-xs font-semibold">
                                <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                                        d='M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h2v2a2 2 0 002 2h2a2 2 0 002-2v-2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2H7a2 2 0 00-2 2v2a2 2 0 002 2z' />
                                </svg>
                                Edit
                            </button>
                            <button @click="deleteUser()"
                                class="inline-flex items-center gap-1 bg-white border border-red-400 text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-full shadow-sm transition text-xs font-semibold">
                                <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                                        d='M6 18L18 6M6 6l12 12' />
                                </svg>
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td class="p-4 text-center border-r border-gray-200 w-12">3</td>
                        <td class="p-4 text-center border-r border-gray-200">Completed</td>
                        <td class="flex px-4 md:px-6 py-3 md:py-4 space-x-2 justify-center">
                            <button @click="editUser()"
                                class="inline-flex items-center gap-1 bg-white border border-yellow-400 text-yellow-600 hover:bg-yellow-50 px-3 py-1.5 rounded-full shadow-sm transition text-xs font-semibold">
                                <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                                        d='M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h2v2a2 2 0 002 2h2a2 2 0 002-2v-2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2H7a2 2 0 00-2 2v2a2 2 0 002 2z' />
                                </svg>
                                Edit
                            </button>
                            <button @click="deleteUser()"
                                class="inline-flex items-center gap-1 bg-white border border-red-400 text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-full shadow-sm transition text-xs font-semibold">
                                <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                                        d='M6 18L18 6M6 6l12 12' />
                                </svg>
                                Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h1 class="text-lg font-semibold mb-4">Task Priority</h1>
        <div class="rounded-xl border border-gray-200 overflow-hidden">
            <table class="table-auto w-full">
                <thead>
                    <tr class="border-b border-gray-200">
                        <th class="p-2 text-center border-r border-gray-200 w-16">SN</th>
                        <th class="p-2 text-center border-r border-gray-200 w-3/4">Task Priority</th>
                        <th class="p-2 text-center w-2/4">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="p-4 text-center border-r border-gray-200 w-16">1</td>
                        <td class="p-4 text-center border-r border-gray-200">Extreme</td>
                        <td class="flex px-4 md:px-6 py-3 md:py-4 space-x-2 justify-center">
                            <button @click="editUser()"
                                class="inline-flex items-center gap-1 bg-white border border-yellow-400 text-yellow-600 hover:bg-yellow-50 px-3 py-1.5 rounded-full shadow-sm transition text-xs font-semibold">
                                <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                                        d='M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h2v2a2 2 0 002 2h2a2 2 0 002-2v-2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2H7a2 2 0 00-2 2v2a2 2 0 002 2z' />
                                </svg>
                                Edit
                            </button>
                            <button @click="deleteUser()"
                                class="inline-flex items-center gap-1 bg-white border border-red-400 text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-full shadow-sm transition text-xs font-semibold">
                                <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                                        d='M6 18L18 6M6 6l12 12' />
                                </svg>
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td class="p-4 text-center border-r border-gray-200 w-16">2</td>
                        <td class="p-4 text-center border-r border-gray-200">Moderate</td>
                        <td class="flex px-4 md:px-6 py-3 md:py-4 space-x-2 justify-center">
                            <button @click="editUser()"
                                class="inline-flex items-center gap-1 bg-white border border-yellow-400 text-yellow-600 hover:bg-yellow-50 px-3 py-1.5 rounded-full shadow-sm transition text-xs font-semibold">
                                <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                                        d='M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h2v2a2 2 0 002 2h2a2 2 0 002-2v-2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2H7a2 2 0 00-2 2v2a2 2 0 002 2z' />
                                </svg>
                                Edit
                            </button>
                            <button @click="deleteUser()"
                                class="inline-flex items-center gap-1 bg-white border border-red-400 text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-full shadow-sm transition text-xs font-semibold">
                                <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                                        d='M6 18L18 6M6 6l12 12' />
                                </svg>
                                Delete
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td class="p-4 text-center border-r border-gray-200 w-12">3</td>
                        <td class="p-4 text-center border-r border-gray-200">Low</td>
                        <td class="flex px-4 md:px-6 py-3 md:py-4 space-x-2 justify-center">
                            <button @click="editUser()"
                                class="inline-flex items-center gap-1 bg-white border border-yellow-400 text-yellow-600 hover:bg-yellow-50 px-3 py-1.5 rounded-full shadow-sm transition text-xs font-semibold">
                                <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                                        d='M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h2v2a2 2 0 002 2h2a2 2 0 002-2v-2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2H7a2 2 0 00-2 2v2a2 2 0 002 2z' />
                                </svg>
                                Edit
                            </button>
                            <button @click="deleteUser()"
                                class="inline-flex items-center gap-1 bg-white border border-red-400 text-red-600 hover:bg-red-50 px-3 py-1.5 rounded-full shadow-sm transition text-xs font-semibold">
                                <svg xmlns='http://www.w3.org/2000/svg' class='h-4 w-4' fill='none' viewBox='0 0 24 24'
                                    stroke='currentColor'>
                                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                                        d='M6 18L18 6M6 6l12 12' />
                                </svg>
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
function editUser() {
    alert('Successfully edited the user!');
}

function deleteUser() {
    alert('Successfully deleted the user!');
}
</script>