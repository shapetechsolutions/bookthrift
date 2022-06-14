<template>
    <div class="container pt-8">
        <h2 class="my-2 text-2xl font-bold">Airport Direct Destinations</h2>
        <div class="table p-4 my-4 align-middle border rounded">
            <tr>
                <td class="px-8">
                    <Label class="text-lg" value="Departure Airport *" for="departureAirportCode" />
                    <p class="text-sm">You may try 'ATQ', 'BLR', or 'MLA'</p>
                </td>
                <td><Input v-model="params.departureAirportCode" type="text" id="departureAirportCode" class="uppercase"
                        required placeholder="Code" /></td>
            </tr>
        </div>
        <div>
            <p v-for="(err, idx) in errors" :key="'err' + idx" class="text-red-500">{{ err }}</p>
        </div>
        <Button @click="fetchData()" :disabled="loading">Search</Button>
        <div class="py-4">
            <table class="w-full text-center border border-collapse rounded-lg shadow border-slate-500">
                <thead>
                    <tr class="text-white bg-gray-500 border-b">
                        <th class="border border-slate-600 ">type</th>
                        <th class="border border-slate-600 ">subtype</th>
                        <th class="border border-slate-600 ">name</th>
                        <th class="border border-slate-600 ">iataCode</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-if="airportDirectDestinations.data.length">
                        <tr v-for="(add, idx) in airportDirectDestinations.data" :key="'add' + idx">
                            <td class="border border-slate-700">{{ add.type }}</td>
                            <td class="border border-slate-700">{{ add.subtype }}</td>
                            <td class="border border-slate-700">{{ add.name }}</td>
                            <td class="border border-slate-700">{{ add.iataCode }}</td>
                        </tr>
                    </template>
                    <template v-else>
                        <tr>
                            <td v-for="i in 4" :key="'d' + i"> {{ loading ? 'Loading...' : 'NO DATA' }}</td>
                        </tr>
                    </template>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>

import { useAmadeusStore, } from '@/stores/amadeus'
import { onMounted, ref } from 'vue'

import Input from '@/Components/Input'
import Label from '@/Components/Label'
import Button from '@/Components/Button'

const loading = ref(true)
const amadeus = useAmadeusStore()
const airportDirectDestinations = ref({
    data: []
})
const params = ref({
    departureAirportCode: ''
})

const errors = ref([])


const fetchData = async () => {
    errors.value = []
    if (params.value.departureAirportCode == '') errors.value.push('Departure airport is required')
    if (params.value.departureAirportCode && params.value.departureAirportCode.length != 3) errors.value.push('INVALID LENGTH')
    if (errors.value.length > 0) return
    loading.value = true
    airportDirectDestinations.value = { data: [] }
     let res = null
    try {
        res = await amadeus.fetchAirportDirectDestinations(params.value)
    } catch (error) {
        errors.value.push('Please try again')
    }
    if (res) {
        airportDirectDestinations.value = res
    }
    if (!airportDirectDestinations.value.data.length) errors.value.push('Please try again')
    loading.value = false
}


onMounted(() => {
    loading.value = false
})

</script>

<style lang="scss" scoped>
</style>