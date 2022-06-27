<template>
  
<div class="bg-blue-100">
    <div class="container p-8 bg-gray-50 ">
        <div class="text-left pl-24 text-black-50 font-bold text-2xl py-4"><h2>AGENT REGISTRATION</h2></div>
        <div class="max-w-md bg-lime-400 rounded-lg  mt-8 py-4 px-6 shadow-lg">


  <div class="text-center py-4"> 
                
                <div class="my-3">
                    <label class="">Agency Name</label>
                    <br>
                    <input type="Agency Name" class="rounded-full w-96 h-10 pl-3 border border-gray-200"> 
                </div>    
    </div>   

    <div class="text-left py-4"> 
                
                <div class="my-3">
                    <label class="">Contact Number</label>
                    <br>
                    <input type="Contact Number" class="rounded-full w-80 h-10 pl-3 border border-gray-200"> 
                </div>    
                 <div class="my-3">
                    <label class="">Street</label>
                    <br>
                    <input type="Street" class="rounded-full w-80 h-10 pl-3 border border-gray-200"> 
                </div>    
                 <div class="my-3">
                    <label class="">Postal Code</label>
                    <br>
                    <input type="Postal Code" class="rounded-full w-80 h-10 pl-3 border border-gray-200"> 
                </div>  
    <div class="text-left py-4">
        <label for="province">Province</label>
        <br>
        <select name="province" id="province" class="rounded-full w-80 h-10 pl-3 border border-gray-200">
        <option value="batangas">Batangas</option>
        <option value="albay">Albay</option>
        <option value="cagayan">Cagayan</option>
        <option value="guimaras">Guimaras</option>
        </select>
    </div>
    <div class="text-left py-4">
         <label for="City">City</label>
        <br>
        <select name="city" id="city" class="rounded-full w-80 h-10 pl-3 border border-gray-200">
        <option value="abra">Abra</option>
        <option value="bantayan">Bantayan</option>
        <option value="angat">Angat</option>
        <option value="alfonso">Alfonso</option>
        </select>
    </div>
    <div class="text-left py-4">
        <label for="Travel & Tourism Business Type">Travel & Tourism Business type</label>
        <br>
        <select name="" id="" class="rounded-full w-80 h-10 pl-3 border border-gray-200">
        <option value=""></option>
        <option value="primarytype">Primary Type</option>
        <option value="secondarytype">Secondary Type</option>
        </select>
        
    </div>
    

                          
    </div>            
        </div>
<div class="max-w-md bg-slate-200 rounded-lg  mb-8 py-4 px-6 shadow-lg">
      <div class="text-left py-4">

                <div class="my-3">
                    <label class="">ISD</label>
                    <br>
                    <input type="Isd" class="rounded-full w-32 h-10 pl-3 border border-gray-200"> 
                </div>
                <div class="my-3">
                    <label class="">Password</label>
                    <br>
                    <input type="Password" class="rounded-full w-80 h-10 pl-3 border border-gray-200"> 
                </div>  
                <div class="my-3">
                    <label class="">Confirm Password</label>
                    <br>
                    <input type="Password" class="rounded-full w-80 h-10 pl-3 border border-gray-200"> 
                </div>  
                <div class="my-3">
                    <label class="">Email</label>
                    <br>
                    <input type="Email" class="rounded-full w-80 h-10 pl-3 border border-gray-200"> 
                </div>  
                <div class="my-3">
                    <label class="">Mobile Number</label>
                    <br>
                    <input type="Mobile Number" class="rounded-full w-80 h-10 pl-3 border border-gray-200"> 
                </div>  
     </div>
 </div>
 <div class="max-w-md bg-slate-50 rounded-lg mb-8 py-4 px-0 shadow-lg">
      <div class="text-left py-4"> 
                
                <div class="my-3">
                    <label class="">Contact Person</label>
                    <br>
                    <input type="Contact Person" class="rounded-full w-80 h-10 pl-3 border border-gray-200"> 
                </div>  
    <div class="text-left py-4">
        <label for="referredby">Referred by</label>
        <br>
        <select name="" id="" class="rounded-full w-80 h-10 pl-3 border border-gray-200">
        <option value=""></option>
        <option value="facebook">FaceBook</option>
        <option value="advertisement">Advertisement</option>
        <option value="distributor">Distributor</option>
        <option value="friend">Friend</option>
        <option value="fieldsales">Field Sales</option>
        <option value="roadshowevents">Road Show Events</option>
        <option value="others">Others</option>
        </select>
    </div>  
    </div>   
 </div>
<div class="text-left pl-20 text-black-50 text-l py-4">
<input type="checkbox" id="" name="" value="">
<label for="termsandcondition"> I Accept Terms and Conditions</label><br>
</div>
<div class="text-left pl-20 ml-11 text-black-50 text-l px-4">
<Button>Register</Button>
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