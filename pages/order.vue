<script setup>
import { TabGroup } from '@headlessui/vue';
import { useOrder } from '~/store/order';
import { useMediaQuery } from '@vueuse/core'
const order = useOrder();
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
definePageMeta({
  layout: "blank",
});
useHead({
  title: "Proleptin Forte",
});
</script>

<template>
  <div class="lg:flex lg:flex-col lg:h-screen lg:bg-tertiary-50">
    <ClientOnly>
      <TabGroup :selected-index="order.selectedStep">
        <OrderHeader />
        <main class="lg:relative lg:h-full">
          <OrderCart v-if="!isLargeScreen" />
          <OrderForm />
          <OrderSidebar v-if="isLargeScreen" />
        </main>
      </TabGroup>
    </ClientOnly>
  </div>
</template>
