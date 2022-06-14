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
        <div class="title">
          <span class="uppercase">{{ pageName }}</span>
        </div>
        <div class="content">
          <div>
            <Card>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
              fugit sit sunt magnam sed iure perspiciatis, consequuntur maiores
              assumenda architecto in voluptate consequatur. Dolore, tenetur
              sapiente? Dolor ipsam, dignissimos sequi praesentium enim
              blanditiis. Molestiae sint quos, debitis optio autem itaque. Quod
              natus nemo eos adipisci eius obcaecati repellendus. Facilis,
              adipisci?
            </Card>
          </div>
          <div>
            <Card>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
              obcaecati expedita harum saepe, minima consectetur, magnam quam
              quos quisquam officia enim explicabo, corporis modi! Vero ut
              deserunt amet odio est exercitationem eos consequuntur doloremque
              molestias non, optio doloribus veritatis impedit, eius debitis
              nisi maiores, blanditiis fuga dolor libero? Veritatis, pariatur?
            </Card>
          </div>
          <div>
            <Card>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit quae iusto debitis possimus quo placeat blanditiis
              ea dignissimos impedit dolorem exercitationem, assumenda laborum
              nostrum eligendi iste voluptatem ad, cumque minima ipsa labore
              sint! Sit eos a nam quasi voluptate dolores rerum! Sed esse quo
              quaerat soluta quia at nesciunt autem.
            </Card>
          </div>
        </div>
        <!-- put your page inside here -->
      </div>
    </div>
  </Dashboard>
</template>
<script setup>
import Dashboard from "@/Layouts/Authenticated.vue";
import { Head } from "@inertiajs/inertia-vue3";
import Card from "@/Components/Card";
import { ref } from "vue";

const pageName = ref("Marketing");
</script>

<style lang="scss" scoped>
.title {
  @apply py-6 text-2xl font-bold text-center;
}
.content {
  @apply grid grid-cols-1 gap-5 md:grid-cols-3;
}
</style>
