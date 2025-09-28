<script setup>
import { useLocalePath } from "#i18n";
const localePath = useLocalePath();
</script>

<template>
  <header class="order-header bg-white lg:shadow">
    <div class="px-3 py-3 mx-auto lg:container lg:py-5">
      <div class="mb-2 lg:text-center">
        <NuxtLink :to="localePath('/')">
          <div class="leading-none inline-block">
            <img class="h-4 w-auto inline-block lg:h-6" src="/img/proleptin-forte-logo.svg" alt="Proleptin Forte" />
            <span class="h-4 w-px mx-2 bg-tertiary-200 rounded-full inline-block align-middle lg:hidden"></span>
            <img class="h-4 w-auto inline-block mb-1 lg:hidden" src="/img/dfn10-logo.svg" alt="Proleptin Forte" />
          </div>
        </NuxtLink>
      </div>
      <OrderSwitcher />
    </div>
  </header>
</template>
