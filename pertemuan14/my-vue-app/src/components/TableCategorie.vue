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
                        <td class="p-4 text-center flex flex-col lg:flex-row gap-2 justify-center"> <button class="text-white bg-blue-500 py-1 px-6 rounded-lg">Edit</button> <button
                                class="text-white bg-red-500 py-1 px-6 rounded-lg">Delete</button> </td>
                    </tr>
                    <tr>
                        <td class="p-4 text-center border-r border-gray-200 w-16">2</td>
                        <td class="p-4 text-center border-r border-gray-200">In Progress</td>
                        <td class="p-4 text-center flex flex-col lg:flex-row gap-2 justify-center"> <button class="text-white bg-blue-500 py-1 px-6 rounded-lg">Edit</button> <button
                                class="text-white bg-red-500 py-1 px-6 rounded-lg">Delete</button> </td>
                    </tr>
                    <tr>
                        <td class="p-4 text-center border-r border-gray-200 w-12">3</td>
                        <td class="p-4 text-center border-r border-gray-200">Completed</td>
                        <td class="p-4 text-center flex flex-col lg:flex-row gap-2 justify-center"> <button class="text-white bg-blue-500 py-1 px-6 rounded-lg">Edit</button> <button
                                class="text-white bg-red-500 py-1 px-6 rounded-lg">Delete</button> </td>
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
                        <td class="p-4 text-center flex flex-col lg:flex-row gap-2 justify-center"> <button class="text-white bg-blue-500 py-1 px-6 rounded-lg">Edit</button> <button
                                class="text-white bg-red-500 py-1 px-6 rounded-lg">Delete</button> </td>
                    </tr>
                    <tr>
                        <td class="p-4 text-center border-r border-gray-200 w-16">2</td>
                        <td class="p-4 text-center border-r border-gray-200">Moderate</td>
                        <td class="p-4 text-center flex flex-col lg:flex-row gap-2 justify-center"> <button class="text-white bg-blue-500 py-1 px-6 rounded-lg">Edit</button> <button
                                class="text-white bg-red-500 py-1 px-6 rounded-lg">Delete</button> </td>
                    </tr>
                    <tr>
                        <td class="p-4 text-center border-r border-gray-200 w-12">3</td>
                        <td class="p-4 text-center border-r border-gray-200">Low</td>
                        <td class="p-4 text-center flex flex-col lg:flex-row gap-2 justify-center"> <button class="text-white bg-blue-500 py-1 px-6 rounded-lg">Edit</button> <button
                                class="text-white bg-red-500 py-1 px-6 rounded-lg">Delete</button> </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>

</script>