<script setup>
import { useI18n } from "#i18n";
import { useOrder } from "~/store/order";
import { useRuntimeConfig } from "nuxt/app";
const { t, locale } = useI18n();
const config = useRuntimeConfig();
const order = useOrder();
let price = t("global.price");
const bg = config.app.baseURL + "img/section-bg.jpg";
</script>

<template>
  <div>
    <section
      class="bg-primary-700 bg-[length:auto_200px] bg-no-repeat bg-left-top mt-4 sm:bg-cover lg:bg-center lg:py-8 lg:max-w-8xl lg:mx-auto lg:mt-0"
      :style="'background-image: url(' + bg + ')'"
    >
      <div class="lg:px-3 lg:container lg:mx-auto">
        <div class="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div class="px-3 -mb-4 lg:p-0 lg:m-0 lg:order-2">
            <img
              class="block max-w-full h-auto mx-auto relative -top-4 lg:hidden"
              :src="
                config.app.baseURL + '/img/hero-img-mobile-' + locale + '.png'
              "
              alt="Proleptin Forte"
            />
            <img
              class="hidden max-w-full h-auto mx-auto relative -bottom-14 lg:block"
              :src="
                config.app.baseURL + '/img/hero-img-desktop-' + locale + '.png'
              "
              alt="Proleptin Forte"
            />
          </div>
          <div class="pb-10 px-3 relative lg:order-1 lg:p-0">
            <div
              class="flex items-center absolute -top-14 h-8 px-4 bg-secondary-300 text-secondary-700 uppercase text-sm font-bold lg:inline-flex lg:mr-4 lg:static lg:text-xl"
            >
              {{ t("home.hero.badge") }}
            </div>
            <i18n-t
              keypath="home.hero.intro"
              tag="span"
              scope="global"
              class="block text-secondary-300 text-sm font-light mb-2 lg:inline-block lg:mb-0 lg:text-xl"
            >
              <strong class="font-bold"> {{ t("home.hero.intro-0") }}</strong>
            </i18n-t>
            <h2
              class="uppercase font-black text-2xl text-white mb-2 lg:text-[2.5rem] lg:leading-10 lg:mt-8 lg:max-w-2xl"
            >
              {{ t("home.hero.title") }}
            </h2>
            <p
              class="text-white font-light text-lg mb-3 lg:text-2xl lg:max-w-2xl"
            >
              {{ t("home.hero.subtitle") }}
            </p>
            <div
              class="flex items-baseline justify-between mb-2 lg:justify-start"
            >
              <span class="text-secondary-300 text-[1.75rem] font-bold lg:mr-4">
                {{ price * order.quantity
                }}<span class="text-lg"
                  >,00&nbsp;{{ t("global.currency") }}</span
                >
              </span>
              <div>
                <nuxt-icon
                  name="star"
                  class="inline-block text-secondary-300 text-xs mr-px"
                />
                <nuxt-icon
                  name="star"
                  class="inline-block text-secondary-300 text-xs mr-px"
                />
                <nuxt-icon
                  name="star"
                  class="inline-block text-secondary-300 text-xs mr-px"
                />
                <nuxt-icon
                  name="star"
                  class="inline-block text-secondary-300 text-xs mr-px"
                />
                <nuxt-icon
                  name="star"
                  class="inline-block text-secondary-300 text-xs mr-1"
                />
                <span class="font-bold text-secondary-300 text-xs"
                  >4.8 / 5.0 &ndash;&nbsp;</span
                >
                <span class="text-secondary-300 text-xs text-center">
                  {{ t("home.cta.reviews") }}</span
                >
              </div>
            </div>
            <div class="flex mb-1">
              <button
                type="button"
                class="inline-flex items-center justify-center h-14 w-10 text-sm leading-none bg-white"
                @click="order.decreaseQuantity()"
              >
                <nuxt-icon name="minus" />
              </button>
              <div
                class="inline-flex items-center justify-center h-14 w-12 text-xl font-bold leading-none bg-white"
              >
                {{ order.quantity }}
              </div>
              <button
                type="button"
                class="inline-flex items-center justify-center h-14 w-10 text-sm leading-none bg-white"
                @click="order.increaseQuantity()"
              >
                <nuxt-icon name="plus" />
              </button>
              <NuxtLink
                :to="localePath('order')"
                class="inline-flex items-center justify-center h-14 font-bold uppercase leading-none bg-tertiary-900 text-white grow transition-colors lg:grow-0 lg:px-12 hover:bg-primary-500"
              >
                {{ t("home.cta.btn") }}
              </NuxtLink>
            </div>
            <div class="mb-6">
              <span class="font-bold text-sm text-white">
                {{ order.quantity }}&nbsp;x&nbsp;60&nbsp;{{
                  t("home.cta.capsules")
                }}
              </span>
              <span class="font-light text-sm text-white">
                &ndash;&nbsp;{{ t("home.cta.info") }}&nbsp;
                {{ parseFloat(order.quantity * 0.8).toFixed(1) }}&nbsp;kg
              </span>
            </div>
            <div class="flex items-center mb-2 lg:inline-flex lg:mb-0 lg:mr-3">
              <nuxt-icon
                name="delivery-small"
                class="text-primary-50 text-sm mr-2"
              />
              <span class="text-sm text-primary-50">
                {{ t("footer.icons.delivery") }}
              </span>
            </div>
            <div class="flex items-center mb-2 lg:inline-flex lg:mb-0 lg:mr-3">
              <nuxt-icon
                name="truck-small"
                class="text-primary-50 text-sm mr-2"
              />
              <span class="text-sm text-primary-50">
                {{ t("footer.icons.package") }}
              </span>
            </div>
            <div class="flex items-center mb-8 lg:inline-flex lg:mb-0 lg:mr-3">
              <nuxt-icon
                name="gurantee-small"
                class="text-primary-50 text-sm mr-2"
              />
              <span class="text-sm text-primary-50">
                {{ t("footer.icons.gurantee") }}
              </span>
            </div>
            <img
              class="block max-w-full h-auto max-h-8 mx-auto lg:mx-0 lg:max-h-[none] lg:mt-8"
              src="/img/hero-logos.svg"
              alt="Proleptin Forte"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
