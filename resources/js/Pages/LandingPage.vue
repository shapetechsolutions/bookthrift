<template>
<div class="bg-blue-100">
    <div class="container p-8 bg-gray-50 ">
        <div class="max-w-sm bg-lime-400  mt-10 py-4 px-6 rounded-lg  shadow-lg">
            <div class="text-center text-700 font-bold text-2xl py-4 border-b"><h2>AGENT LOGIN</h2></div>

            <div class="text-right py-4"> 
                <div class="my-3">
                    <input type="text" class="rounded-full w-full pl-3 border border-gray-200" placeholder="Email"> 
                </div>
                <div class="my-3">
                    <input type="password" class="rounded-full w-full pl-3 border border-gray-200" placeholder="Password"> 
                </div>
                
            </div>

            <div class="py-4 border-t flex justify-between">
               <Link class="text-600 text-red-500 underline text-sm" :href="route('password.request')">Forgot password?</Link>
                <Button>LOGIN</Button>
                
            </div>

             <div class="py-4 border-t text-center">
               <Link class="text-blue-500 underline  text-md" :href="route('register')">New User?</Link>
           
            </div>
        </div>
    </div>
</div>


<div class="bg-blue-100">
    <div class="container bg-white p-8">
        <div class="max-w-sm bg-lime-400 py-4 px-6 rounded-lg  shadow-lg">
            <div class="text-center text-700 font-bold text-2xl py-4 border-b"><h2>Welcome to Book Thrift</h2></div>
            <div class="text-center py-4"> 
                 <p class="text-gray-600">A company description is an overview or summary of a business. It's an important part of a business plan that often briefly describes an organization's history, location, mission statement, management personnel and, when appropriate, legal structure. Whether you're writing the company description for the biography of your organization's website and social media pages or seeking support from investors, an interesting business description is helpful for promoting your business.</p>
                <p class="text-gray-600 "><br><br>A business description is most relevant when starting a company but is often effective when maintained regularly as a business grows. Depending on the complexity of your business plan, it may be a brief paragraph or several pages long. When writing a business description, it's important to consider your target audience. Here are some intended audiences you might want to attract when creating an engaging description of your organization: Investors, Employees, and Customers.</p>
            </div>
        </div>
    </div>
</div>

<div class="text-center text-black-50 font-bold text-2xl py-4 border-b"><h2>Book Thrift Product</h2></div>
<div class="bg-blue-100">
    <div class="container bg-white p-8">
        <div class="max-w-sm bg-lime-400   py-4 px-6 rounded-lg  shadow-lg">
            <div class="text-center py-4"> 
                 <p class="text-black-600 mb-5">*Flights</p>
                <p class="text-gray-600 indent-5 text-justify">A ticket entitled to a holder to access a travel and a seat on a flight on an aircraft. It is an electronic record, issued by an airline which signifies confirmation. An airline ticket is necessary to be able to proceed a boarding pass during check-in at the airport.</p>
            </div>
        </div>
    </div>
</div>
<div class="bg-blue-100">
    <div class="container bg-white p-8">
        <div class="max-w-sm bg-lime-400   py-4 px-6 rounded-lg  shadow-lg">
            <div class="text-center py-4"> 
                 <p class="text-black-600 mb-5">*Hotels</p>
                <p class="text-gray-600 indent-5 text-justify">An arrangement to book for accommodations such as a hotel rooms. It works by processing secure online reservations made through a hotel's website.</p>
            </div>
        </div>
    </div>
</div>

<div class="bg-blue-100">
    <div class="container bg-white p-8">
        <div class="max-w-sm bg-lime-400   py-4 px-6 rounded-lg  shadow-lg">
            <div class="text-center py-4"> 
                 <p class="text-black-600 mb-5">*Holidays</p>
                <p class="text-gray-600 indent-5 text-justify">A holiday arrangement package at a fixed price in which the travel company arranges your travel, hotels, and meals. A tour arranged by a travel agent; transportation and food and lodging are all provided at an inclusive price.</p>
            </div>
        </div>
    </div>
</div>

<div class="bg-blue-100">
    <div class="container bg-white p-8">
        <div class="max-w-sm bg-lime-400   py-4 px-6 rounded-lg  shadow-lg">
            <div class="text-center py-4"> 
                 <p class="text-black-600 mb-5">*Bus</p>
                <p class="text-gray-600 indent-5 text-justify">An official piece of paper which signifies that you have paid as your charged fair for a journey on a bus.</p>
            </div>
        </div>
    </div>
</div>

<div class="bg-blue-100">
    <div class="container bg-white p-8">
        <div class="max-w-sm bg-lime-400   py-4 px-6 rounded-lg  shadow-lg">
            <div class="text-center py-4"> 
                 <p class="text-black-600 mb-5">*Ferry</p>
                <p class="text-gray-600 indent-5 text-justify">A form of ticket issuance for ferry, often operates regular return services. You're booking for ferry or train travel forms a contract with us, as well as a contract with the ferry and made available to you before any booking is completed, and which you also accept when a booking is made.</p>
            </div>
        </div>
    </div>
</div>

<div class="bg-blue-100">
    <div class="container bg-white p-8">
        <div class="max-w-sm bg-lime-400   py-4 px-6 rounded-lg  shadow-lg">
            <div class="text-center py-4"> 
                 <p class="text-black-600 mb-5">*Train</p>
                <p class="text-gray-600 indent-5 text-justify">Train Service means a service for the carriage of passengers by rail. Train Service means the running of a Train between specified origins and destinations.</p>
            </div>
        </div>
    </div>
</div>

<div class="bg-blue-100">
    <div class="container bg-white p-8">
        <div class="max-w-sm bg-lime-400   py-4 px-6 rounded-lg  shadow-lg">
            <div class="text-center py-4"> 
                 <p class="text-black-600 mb-5">*Insurance</p>
                <p class="text-gray-600 indent-5 text-justify">Covers the costs and losses associated with traveling. It is a useful protection for those traveling domestically or abroad. Includes 24/7 emergency services, such as replacing lost passports, cash wire assistance, and re-booking canceled flights.</p>
            </div>
        </div>
    </div>
</div>

<div class="bg-blue-100">
    <div class="container bg-white p-8">
        <div class="max-w-sm bg-lime-400   py-4 px-6 rounded-lg  shadow-lg">
            <div class="text-center py-4"> 
                 <p class="text-black-600 mb-5">*Payment</p>
                <p class="text-gray-600 indent-5 text-justify">Travel agents can accept bill payments through the VIA portal powered by Bayad Partner. Travel agents can assist payments to 224 billers nationwide including major electric and water billers such as Meralco, Maynilad, and Manila Water.</p>
            </div>
        </div>
    </div>
</div>

<div class="text-center text-black-50 font-bold text-2xl py-4 border-b"><h2>Client Feedback</h2></div>
<div class="bg-blue-100">
    <div class="container bg-white p-8">
        <div class="max-w-sm bg-lime-400   py-4 px-6 rounded-lg  shadow-lg">
            <div class="text-center py-4">
                <p class="text-gray-600 text-justify">Punctuality is one of the strongest virtues an employee can possess. They must arrive on time, take the designated time breaks to ensure efficiency and productivity.</p>
                <p class="text-gray-600 text-center mt-2">- John Aldrin Argete</p>
            </div>
        </div>
    </div>
</div>

<div class="bg-blue-100">
    <div class="container bg-white p-8">
        <div class="max-w-sm bg-lime-400   py-4 px-6 rounded-lg  shadow-lg">
            <div class="text-center py-4">
                <p class="text-gray-600 text-justify">Creativity and the free exchange of ideas can only flow when employees have a healthy work environment. But interpersonal conflicts and strict hierarchical work culture can hinder an employee from expressing freely.</p>
                <p class="text-gray-600 text-center mt-2">- Mark Brian Binay</p>
            </div>
        </div>
    </div>
</div>

<div class="bg-blue-100">
    <div class="container bg-white p-8">
        <div class="max-w-sm bg-lime-400   py-4 px-6 rounded-lg  shadow-lg">
            <div class="text-center py-4">
                <p class="text-gray-600 text-justify">Employees in managerial positions are people who are always looking after others, i.e., their team members. They are constantly guiding others to progress and advance. However, they need guidance to reach their goals too.</p>
                <p class="text-gray-600 text-center mt-2">- Mark Angelou Bañas</p>
            </div>
        </div>
    </div>
</div>

<div class="text-center text-black-50 font-bold text-2xl py-4 border-b"><h2>Work with Book Thrift</h2></div>
<div class="bg-blue-100">
    <div class="container bg-white p-8">
        <div class="max-w-sm bg-lime-400   py-4 px-6 rounded-lg  shadow-lg">
            <div class="text-center py-4">
                 <p class="text-gray-600 text-center mb-5">Join Us?</p>
                <p class="text-gray-600 text-justify">Employing roughly 7.200 people who all share a passion for fashion and team spirit, the group enjoys success worldwide with its attractive brands. All of our employees worldwide see themselves as part of a huge team, united by our corporate goals and the conviction that successful cooperation and the passion for our fashion alone can enable us to offer attractive products to our customers.</p>
            </div>
        </div>
    </div>
</div>

<div class="bg-blue-100">
    <div class="container bg-white p-8">
        <div class="max-w-sm bg-lime-400  py-4 px-6 rounded-lg shadow-lg">
            <div class="text-center py-4">
                 <p class="text-gray-600 text-center mb-5">Mission and Values</p>
                <p class="text-gray-600 text-justify">The mission statement communicates the purpose of the organization. The vision statement provides insight into what the company hopes to achieve or become in the future. The values statement reflects the organization's core principles and ethics.</p>
            </div>
        </div>
    </div>
</div>

<div class="text-center text-black-50 font-bold text-2xl py-4 border-b mb-20"><h2>Our company partners worldwide</h2></div>
<div class="text-center text-black-50 font-bold text-2xl py-4 border-b mb-20"><h2>Via is a member of</h2></div>
<div class="text-center text-black-50 font-bold text-2xl py-4 border-b mb-20"><h2>Our Banking Partners</h2></div>

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