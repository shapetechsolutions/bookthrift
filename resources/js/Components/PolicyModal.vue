<template>
    <div>
        <button @click="toggleModal()" class="uppercase py-2 px-4 bg-blue-400 text-white rounded m-3">open modal</button>
        <div v-if="isOpen" class="absolute top-0 left-0 w-screen bg-opacity-50 bg-gray-700 h-screen">
            <div class="rounded-lg relative text-black bg-white max-w-md m-auto shadow-lg mt-60 p-5">
                <button @click="toggleModal()" class="text-black top-0 right-0 text-right absolute leading-none mt-1 mr-2 text-2xl">&times;</button>
                <div class="px-5">
                    <div class="">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae ea soluta officiis tempore iste! Optio, odit quas ad illum magni nemo reprehenderit commodi, incidunt velit eveniet modi dolores nostrum consequatur!
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggleModal = () => isOpen.value = !isOpen.value
</script>