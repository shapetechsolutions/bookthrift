<template>
  
<div class="bg-blue-100">
    <div class="container p-8 bg-gray-50 ">
        <div class="max-w-md bg-white rounded-lg ml-32  mt-40 py-4 px-8 shadow-lg">
             <div class="text-center text-700 font-bold text-2xl py-4 border-b-4"><h2>Book Your Flight</h2>
            </div>
            <div class="py-4 border-t text-right">
            <input type="radio" class="appearance-none indeterminate:bg-gray-300 ..." />
            <label for="oneway">One Way</label>
            <input type="radio" class="appearance-none indeterminate:bg-gray-300 ..." />
            <label for="roundtrip">Round Trip</label>
            </div>

 
    <div class="text-left py-4"> 
                
                <div class="my-4">
                    <label class="pr-3.5">From:</label>
                    <input type="origin" class="rounded-full w-80 h-10 pl-3 border border-gray-200"> 
                </div>    
                 <div class="my-3">
                    <label class="pr-8">To:</label>
                    <input type="destination" class="rounded-full w-80 h-10 pl-3 border border-gray-200"> 
                </div>    
                 <div class="my-3">
                    <label class="">Departure</label>
                    <br>
                    <input type="enddate" class="rounded-full w-80 h-10 pl-3 border border-gray-500" placeholder="MM/DD/YYYY"
                    onfocus="(this.type='date')"> 
                </div> 
                <div class="my-3">
                    <label class="">Return</label>
                    <br>
                   <input type="enddate" class="rounded-full w-80 h-10 pl-3 border border-gray-500" placeholder="MM/DD/YYYY"
                    onfocus="(this.type='date')">
                </div>   
    <div class="text-left py-4">
        <label for="travelclass">Travel Class</label>
        <br>
        <select name="travelclass" id="travelclass" class="rounded-full w-80 h-10 pl-3 border border-gray-200">
        <option value=""></option>
        <option value="first class">First Class</option>
        <option value="business class">Business Class</option>
        <option value="economy class">Economy Class</option>
        </select>
    </div>
    <div class="text-left py-4">
         <label for="adults">Adults</label>
        <br>
        <select name="adults" id="adults" class="rounded-full w-80 h-10 pl-3 border border-gray-200">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        </select>
    </div>
    <div class="text-left py-4">
        <label for="children">Children</label>
        <br>
        <select name="" id="" class="rounded-full w-80 h-10 pl-3 border border-gray-200">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        </select>
        
    </div>
    

                          
    </div>
    <div class="text-center text-black-50 text-l px-4">
          <Button>Check Flight</Button>
    </div>            
        </div>

 
    </div>
    
</div>
</template>



<script>
import { Link } from '@inertiajs/inertia-vue3'
import PolicyModal from '@/Components/PolicyModal'
import Button from '@/Components/Button'
import Dropdown from '@/Components/Dropdown'
import Checkbox from '@/Components/Checkbox'
export default {
    components: {
        Link,
        PolicyModal,
        Button,
        Dropdown,
        Checkbox,

       }
}

</script>