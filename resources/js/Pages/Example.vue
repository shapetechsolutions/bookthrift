<template>
  <div class="container">
      <div>
        <h1 class="text-4xl text-blue-500">Example</h1>
        <p>Success! This is example page</p>
        <p class="text-lg">Booking: {{ numberOfBookings }}</p>
        <button @click="addBooking()" class="px-4 py-2 mr-2 text-white uppercase bg-blue-500 rounded">Add</button>
        <button @click="addBooking()" class="px-4 py-2 text-white uppercase bg-red-500 rounded">Subtract</button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            numberOfBookings: 0
        }
    },
    methods: {
        addBooking() {
            this.numberOfBookings += 1
        },

        decrementBooking() {
            this.numberOfBookings -= 1
        }
    }
}
</script>

<style>

</style>
