<template>
    <div>{{ isLoading ? 'Loading...' : accessToken }}</div>
</template>
<script setup>
import { ref } from 'vue'
import AMADEUS_API from '@/apis/amadeus'
const accessToken = ref('')
const isLoading = ref(true)
const getData = async () => {
    accessToken.value = await AMADEUS_API.fetchAccessToken();
    isLoading.value = false
}
getData()
</script>