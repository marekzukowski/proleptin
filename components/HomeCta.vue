<script setup>
import { useI18n } from "#i18n";
import { useOrder } from '~/store/order';
const { t, locale } = useI18n();
const order = useOrder();
let price = t("global.price");
defineProps({
  image: String,
  version: String
})
</script>

<template>
  <section class="bg-primary-700 bg-[length:auto_180px] bg-no-repeat bg-left-top mt-8 sm:bg-cover lg:mt-0 lg:bg-center lg:container lg:mx-auto" style="background-image: url('/img/section-bg.jpg');">
    <div class="lg:px-3">
      <div class="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
        <div class="px-3 -mb-8 sm:-mb-16 lg:p-0 lg:m-0">
          <div class="flex items-start justify-center">
            <div class="relative -top-8 flex-shrink-0">
              <img class="block mx-auto w-24 mb-2 sm:w-auto" src="/img/cta-badge.png" alt="Proleptin Forte" />
              <img class="block mx-auto w-20 mb-4 sm:w-auto" src="/img/cta-icons.svg" alt="Proleptin Forte" />
              <div class="flex items-center justify-center mb-px">
                <nuxt-icon name="star" class="inline-block text-secondary-300 text-[8px] mr-px lg:text-sm" />
                <nuxt-icon name="star" class="inline-block text-secondary-300 text-[8px] mr-px lg:text-sm" />
                <nuxt-icon name="star" class="inline-block text-secondary-300 text-[8px] mr-px lg:text-sm" />
                <nuxt-icon name="star" class="inline-block text-secondary-300 text-[8px] mr-px lg:text-sm" />
                <nuxt-icon name="star" class="inline-block text-secondary-300 text-[8px] mr-1 lg:text-sm" />
                <span class="font-bold text-secondary-300 text-[8px] lg:text-xs">4.8 / 5.0</span>
              </div>
              <span class="block text-secondary-300 text-xxs text-center lg:text-xs"> {{ t("home.cta.reviews") }}</span>
            </div>
            <img class="relative -top-8 block max-h-60 flex-shrink-0 sm:max-h-96 sm:-top-16 lg:top-0 lg:scale-[1.15]" :src="image" alt="Proleptin Forte" />
          </div>
        </div>
        <div class="pb-10 px-3 lg:p-0">
          <div v-if="version == 1">
            <h2 class="uppercase font-black text-2xl text-white mb-2 lg:text-[2.5rem]">
              {{ t("home.cta.title-1") }}
            </h2>
            <p class="text-white font-light text-lg mb-2 lg:text-2xl">
              - {{ t("home.cta.subtitle-1") }}
            </p>
          </div>
          <div v-if="version == 2">
            <h2 class="uppercase font-black text-2xl text-white mb-2 lg:text-[2.5rem]">
              {{ t("home.cta.title-2") }}
            </h2>
            <p class="text-white font-light text-lg mb-2 lg:text-2xl">
              - {{ t("home.cta.subtitle-2") }}
            </p>
          </div>
          <div v-if="version == 3">
            <p class="flex items-center justify-start text-white text-lg mb-2 lg:text-xl">
              <nuxt-icon name="check" class="text-secondary-300 mr-2 flex-shrink-0 lg:mr-2" />
              <span>
                {{ t("home.cta.check-1") }}:&nbsp;
              </span>
              <span class="font-bold">
                {{ t("home.cta.check-2") }}
              </span>
            </p>
            <p class="flex items-center justify-start text-white text-lg mb-2 lg:text-xl">
              <nuxt-icon name="check" class="text-secondary-300 mr-2 flex-shrink-0 lg:mr-2" />
              <span>
                {{ t("home.cta.check-3") }}:&nbsp;
              </span>
              <span class="font-bold">
                {{ t("home.cta.check-4") }}
              </span>
            </p>
            <p class="flex items-center justify-start text-white text-lg mb-2 lg:text-xl">
              <nuxt-icon name="check" class="text-secondary-300 mr-2 flex-shrink-0 lg:mr-2" />
              <span>
                {{ t("home.cta.check-5") }}:&nbsp;
              </span>
              <span class="font-bold">
                {{ t("home.cta.check-6") }}
              </span>
            </p>
          </div>

          <div class="flex items-baseline justify-between mb-2 lg:block">
            <span class="text-secondary-300 text-[1.75rem] font-bold">
              {{ price * order.quantity }}<span class="text-lg">,00&nbsp;{{ t('global.currency') }}</span>
            </span>
            <div class="hidden">
              <nuxt-icon name="star" class="inline-block text-secondary-300 text-xs mr-px" />
              <nuxt-icon name="star" class="inline-block text-secondary-300 text-xs mr-px" />
              <nuxt-icon name="star" class="inline-block text-secondary-300 text-xs mr-px" />
              <nuxt-icon name="star" class="inline-block text-secondary-300 text-xs mr-px" />
              <nuxt-icon name="star" class="inline-block text-secondary-300 text-xs mr-1" />
              <span class="font-bold text-secondary-300 text-xs">4.8 / 5.0 &ndash;&nbsp;</span>
              <span class="text-secondary-300 text-xs text-center"> {{ t("home.cta.reviews") }}</span>
            </div>
          </div>
          <div class="flex mb-1">
            <button type="button" class="inline-flex items-center justify-center h-14 w-10 text-sm leading-none bg-white" @click="order.decreaseQuantity()">
              <nuxt-icon name="minus" />
            </button>
            <div class="inline-flex items-center justify-center h-14 w-12 text-xl font-bold leading-none bg-white">
              {{ order.quantity }}
            </div>
            <button type="button" class="inline-flex items-center justify-center h-14 w-10 text-sm leading-none bg-white" @click="order.increaseQuantity()">
              <nuxt-icon name="plus" />
            </button>
            <NuxtLink :to="localePath('order')" class="inline-flex items-center justify-center h-14 font-bold uppercase leading-none transition-colors bg-tertiary-900 text-white grow lg:grow-0 lg:px-12 hover:bg-primary-500">
              {{ t("home.cta.btn") }}
            </NuxtLink>
          </div>
          <div class="mb-6">
            <span class="font-bold text-sm text-white">
              {{ order.quantity }}&nbsp;x&nbsp;60&nbsp;{{ t("home.cta.capsules") }}
            </span>
            <span v-if="locale == 'hu'" class="font-light text-sm text-white">
              &ndash;&nbsp;{{ parseFloat(order.quantity * 0.8).toFixed(1) }}&nbsp;kg{{ t("home.cta.info") }}
            </span>
            <span v-else class="font-light text-sm text-white">
              &ndash;&nbsp;{{ t("home.cta.info") }}&nbsp; {{ parseFloat(order.quantity * 0.8).toFixed(1) }}&nbsp;kg
            </span>
          </div>
          <div class="flex items-center mb-2 lg:inline-flex lg:mb-0 lg:mr-3">
            <nuxt-icon name="delivery-small" class="text-primary-50 text-sm mr-2" />
            <span class="text-sm text-primary-50">
              {{ t('footer.icons.delivery') }}
            </span>
          </div>
          <div class="flex items-center mb-2 lg:inline-flex lg:mb-0 lg:mr-3">
            <nuxt-icon name="truck-small" class="text-primary-50 text-sm mr-2" />
            <span class="text-sm text-primary-50">
              {{ t('footer.icons.package') }}
            </span>
          </div>
          <div class="flex items-center mb-2 lg:inline-flex lg:mb-0 lg:mr-3">
            <nuxt-icon name="gurantee-small" class="text-primary-50 text-sm mr-2" />
            <span class="text-sm text-primary-50">
              {{ t('footer.icons.gurantee') }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
