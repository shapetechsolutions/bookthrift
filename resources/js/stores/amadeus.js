import { defineStore } from 'pinia'
import api from '@/apis/amadeus'


export const useAmadeusStore = defineStore('amadeusStore', {
  state: () => ({
    airportDirectDestinations: null,
  }),

  actions: {
    async fetchAirportDirectDestinations (params) {
      const response = await api.fetchAirportDirectDestinations(params)
      return response.data
    },
  },
})