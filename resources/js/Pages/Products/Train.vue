<script setup>
import Dashboard from '@/Layouts/Authenticated.vue';
import { Head } from '@inertiajs/inertia-vue3';
import { ref } from 'vue'

const pageName = ref('Train')

</script>

<template>

  <Head :title="pageName" />

  <Dashboard>
    <template #header>
      <h2 class="header-name">
        {{ pageName }}
      </h2>
    </template>

    <div class="py-12">
      <div class="page-wrapper">
        <!-- put your page inside here -->
        <p>This is your <span class="uppercase">{{ pageName }}</span> page</p>
        <!-- put your page inside here -->
      </div>
    </div>
  </Dashboard>
</template>
