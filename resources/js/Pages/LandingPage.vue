<template>
<div class="bg-blue-100">
    <div class="container p-8 bg-gray-50 ">
        <div class="max-w-sm bg-lime-400  mt-10 py-4 px-6 rounded-lg  shadow-lg">
            <div class="text-center text-gray-50 font-bold text-2xl py-4 border-b"><h2>AGENT LOGIN</h2></div>

            <div class="text-right py-4"> 
                <div class="my-3">
                    <input type="text" class="rounded-full w-full pl-3 border border-gray-200" placeholder="Email"> 
                </div>
                <div class="my-3">
                    <input type="password" class="rounded-full w-full pl-3 border border-gray-200" placeholder="Password"> 
                </div>
                
            </div>

            <div class="py-4 border-t flex justify-between">
               <Link class="text-red-500 underline text-sm" :href="route('password.request')">Forgot password?</Link>
                <Button>LOGIN</Button>
                
            </div>

             <div class="py-4 border-t text-center">
               <Link class="text-gray-500 underline  text-sm" :href="route('register')">New User?</Link>
           
            </div>
        </div>
    </div>
</div>


<div class="bg-blue-100">
    <div class="container bg-white p-8">
        <div class="max-w-sm bg-lime-400   py-4 px-6 rounded-lg  shadow-lg">
            <div class="text-center text-gray-50 font-bold text-2xl py-4 border-b"><h2>Welcome to Book Thrift</h2></div>

            <div class="text-center py-4"> 
                 <p class="text-sm text-white">A company description is an overview or summary of a business. It's an important part of a business plan that often briefly describes an organization's history, location, mission statement, management personnel and, when appropriate, legal structure. Whether you're writing the company description for the biography of your organization's website and social media pages or seeking support from investors, an interesting business description is helpful for promoting your business.</p>
                <p class="text-sm text-white"><br><br>A business description is most relevant when starting a company but is often effective when maintained regularly as a business grows. Depending on the complexity of your business plan, it may be a brief paragraph or several pages long. When writing a business description, it's important to consider your target audience. Here are some intended audiences you might want to attract when creating an engaging description of your organization: Investors, Employees, and Customers.</p>
            </div>
 
            
        </div>
    </div>
</div>
</template>





<script>
import { Link } from '@inertiajs/inertia-vue3'
import PolicyModal from '@/Components/PolicyModal'
import Button from '@/Components/Button'


export default {
    components: {
        Link,
        PolicyModal,
        Button,
      
    }
}

</script>