<script setup>
import { useOrder } from '~/store/order';
import { useI18n } from "#i18n";
const order = useOrder();
const { t } = useI18n();
let price = t("global.price");
</script>

<template>
  <div class="absolute inset-y-0 bg-gradient-to-b from-primary-700 to-primary-500 w-96 right-0">
    <div class="p-8">
      <div class="flex flex-col">
        <div class="bg-white mb-8">
          <img class="h-auto w-full" src="/img/proleptin-forte-packshot.png" alt="Proleptin Forte" />
        </div>
        <div>
          <p class="font-bold text-xl text-white mb-2">
            {{ t('global.product') }}
          </p>
          <div class="flex items-baseline mb-2">
            <span class="text-white mr-auto">{{ t('order.cart.package') }}:</span>
            <span class="text-white">{{ t("global.price") }}&nbsp;{{ t('global.currency') }}</span>
          </div>
          <div class="flex items-baseline mb-2">
            <span class="text-white mr-auto">{{ t('order.cart.quantity') }}:</span>
            <span class="relative z-0 inline-flex rounded-md">
              <button type="button" class="inline-flex items-center justify-center h-6 w-4 text-white text-sm leading-none" @click="order.decreaseQuantity()">
                <nuxt-icon name="minus" />
              </button>
              <div class="inline-flex items-center justify-center h-6 w-8 mx-2 border rounded-md border-white text-white leading-none">
                {{ order.quantity }}
              </div>
              <button type="button" class="inline-flex items-center justify-center h-6 w-4 text-white text-sm leading-none" @click="order.increaseQuantity()">
                <nuxt-icon name="plus" />
              </button>
            </span>
          </div>
          <div class="flex items-baseline">
            <span class="text-white mr-auto">{{ t('order.cart.delivery') }}:</span>
            <span class="text-white">0&nbsp;{{ t('global.currency') }}</span>
          </div>
          <div class="h-px w-full bg-white my-4" />
          <div class="flex items-baseline mb-8">
            <span class="text-white font-bold mr-auto">{{ t('order.cart.total') }}:</span>
            <span class="text-white font-bold"> {{ price * order.quantity }}&nbsp;{{ t('global.currency') }}</span>
          </div>
        </div>
        <div class="flex items-center mb-2">
          <nuxt-icon name="delivery-small" class="text-white text-sm mr-2" />
          <span class="text-sm text-white">
            {{ t('footer.icons.delivery') }}
          </span>
        </div>
        <div class="flex items-center mb-2">
          <nuxt-icon name="truck-small" class="text-white text-sm mr-2" />
          <span class="text-sm text-white">
            {{ t('footer.icons.package') }}
          </span>
        </div>
        <div class="flex items-center mb-2">
          <nuxt-icon name="gurantee-small" class="text-white text-sm mr-2" />
          <span class="text-sm text-white">
            {{ t('footer.icons.gurantee') }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
