<script setup>
import { useOrder } from '~/store/order';
import { useI18n } from "#i18n";
const order = useOrder();
const { t } = useI18n();
let price = t("global.price");
</script>

<template>
  <div class="py-4 bg-gradient-to-b from-primary-700 to-primary-500">
    <div class="px-3 mx-auto lg:container">
      <div class="flex items-center mb-4   ">
        <span class="text-xs font-bold text-white shrink-0">
          {{ t('order.cart.title') }}
        </span>
        <div class="h-px w-full ml-4 bg-tertiary-100 opacity-20" />
      </div>
      <div class="flex items-center mb-4">
        <img class="h-24 w-24 mr-4" src="/img/order-proleptin-forte.png" alt="Proleptin Forte" />
        <div class="w-full">
          <p class="font-bold text-xl text-white">
            {{ t('global.product') }}
          </p>
          <div class="flex items-baseline">
            <span class="text-sm text-white mr-auto">{{ t('order.cart.package') }}:</span>
            <span class="text-lg text-white">{{ t("global.price") }}&nbsp;{{ t('global.currency') }}</span>
          </div>
          <div class="flex items-baseline">
            <span class="text-sm text-white mr-auto">{{ t('order.cart.delivery') }}:</span>
            <span class="text-lg text-white">0&nbsp;{{ t('global.currency') }}</span>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <div class="mr-auto">
          <span class="relative z-0 inline-flex rounded-md">
            <button type="button" class="relative inline-flex items-center justify-center h-10 w-10 rounded-l-md border border-white font-bold text-white leading-none" @click="order.decreaseQuantity()">
              <nuxt-icon name="minus" />
            </button>
            <div class="relative inline-flex items-center justify-center h-10 w-16 border-y border-white text-xl text-white leading-none">
              {{ order.quantity }}
            </div>
            <button type="button" class="relative inline-flex items-center justify-center h-10 w-10 rounded-r-md border border-white font-bold text-white leading-none" @click="order.increaseQuantity()">
              <nuxt-icon name="plus" />
            </button>
          </span>
        </div>
        <span class="text-2xl font-bold text-white">
          {{ price * order.quantity }}&nbsp;{{ t('global.currency') }}
        </span>
      </div>
    </div>
  </div>
</template>
