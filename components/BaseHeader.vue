<script setup>
import { useI18n, useLocalePath } from "#i18n";
import { useNavigation } from '~/store/navigation';
const navigation = useNavigation();
const { t, locale } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <header class="site-header bg-white">
    <div class="px-3 lg:max-w-8xl lg:mx-auto">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <NuxtLink :to="localePath('/')">
          <div class="leading-none inline-block">
            <img class="h-4 w-auto inline-block lg:h-5" src="/img/proleptin-forte-logo.svg" alt="Proleptin Forte" />
            <span class="h-4 w-px mx-2 bg-tertiary-200 rounded-full inline-block align-middle lg:h-5 lg:mx-4"></span>
            <img class="h-4 w-auto inline-block mb-1 lg:h-5" src="/img/dfn10-logo.svg" alt="Proleptin Forte" />
          </div>
        </NuxtLink>
        <BaseHeaderToggle @click="navigation.toggleNavPanel(true)" class="lg:hidden" />
        <ul class="list-none hidden lg:flex lg:items-center">
          <li v-for="(item, index) in navigation.nav" :key="item.name" class="inline-block mx-6">
            <a :href="'#' + t(item.path)" class="font-light text-base" :class="[index == navigation.nav.length - 1 ? 'inline-flex items-center justify-center px-7 h-9 border border-solid border-tertiary-900 uppercase text-[13px] leading-4 hover:bg-tertiary-900 hover:text-white' : 'hover:text-primary-500']">
              {{ t(item.name) }}
            </a>
          </li>
          <li class="mr-6 hidden xl:inline-block">
            <NuxtLink :to="localePath('order')">
              <span class="inline-flex items-center justify-center px-7 h-9 border border-solid border-tertiary-900 bg-tertiary-900 uppercase text-[13px] text-white leading-4 transition-colors hover:bg-primary-500 hover:text-white hover:border-primary-500">
                {{ t("header.order.name") }}
              </span>
            </NuxtLink>
          </li>
          <li class="inline-block">
            <div class="inline-flex items-center justify-center cursor-pointer px-4 h-9 border border-solid border-tertiary-900 uppercase text-[13px] leading-4 transition-colors group hover:bg-tertiary-900  hover:text-white" @click="navigation.setLangPanel(true)">
              <nuxt-icon name="globe" class="text-xs mr-2 group-hover:text-white" />
              <span class="font-light uppercase group-hover:text-white">{{ locale }}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>
