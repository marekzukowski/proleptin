<script setup>
import { useI18n } from "#i18n";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
const { t } = useI18n();
const more = ref(false);
</script>

<template>
  <div>
    <section class="bg-primary-700 pt-10 pb-16 lg:py-16">
      <div class="px-3 lg:max-w-4xl lg:mx-auto">
        <h2 class="text-white uppercase font-black text-2xl mb-4 lg:text-center">
          {{ t("home.faq.title") }}
        </h2>
        <dl class="mt-6 divide-y divide-[#014440]">
          <Disclosure as="div" v-slot="{ open }">
            <div class="p-3 transition-colors duration-400 lg:px-8 lg:pb-4 lg:pt-5 " :class="open ? 'bg-white' : 'bg-none hover:bg-[#086B62]'">
              <dt>
                <DisclosureButton class="text-left w-full flex justify-between items-start">
                  <span class="font-bold" :class="open ? 'text-tertiary-900' : 'text-primary-50'">
                    {{ t("home.faq.question-1.q") }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <nuxt-icon name="chevron-down" class="transform transition-transform text-sm" :class="open ? '-rotate-180 text-tertiary-900' : 'rotate-0 text-primary-50'" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base text-tertiary-900 font-light">
                  {{ t("home.faq.question-1.a") }}
                </p>
              </DisclosurePanel>
            </div>
          </Disclosure>
          <Disclosure as="div" v-slot="{ open }">
            <div class="p-3 transition-colors duration-400 lg:px-8 lg:pb-4 lg:pt-5 " :class="open ? 'bg-white' : 'bg-none hover:bg-[#086B62]'">
              <dt>
                <DisclosureButton class="text-left w-full flex justify-between items-start">
                  <span class="font-bold" :class="open ? 'text-tertiary-900' : 'text-primary-50'">
                    {{ t("home.faq.question-2.q") }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <nuxt-icon name="chevron-down" class="transform transition-transform text-sm" :class="open ? '-rotate-180 text-tertiary-900' : 'rotate-0 text-primary-50'" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base text-tertiary-900 font-light mb-2">
                  {{ t("home.faq.question-2.a-1") }}
                </p>
                <ol class="list-decimal list-inside text-base text-tertiary-900 font-light mb-2">
                  <li>{{ t("home.faq.question-2.a-2") }}</li>
                  <li>{{ t("home.faq.question-2.a-3") }}</li>
                  <li>{{ t("home.faq.question-2.a-4") }}</li>
                </ol>
                <i18n-t keypath="home.faq.question-2.a-5" tag="p" scope="global" class="text-base text-tertiary-900 font-light">
                  <strong class="font-bold"> {{ t("home.faq.question-2.a-5-0") }}</strong>
                </i18n-t>
              </DisclosurePanel>
            </div>
          </Disclosure>
          <Disclosure as="div" v-slot="{ open }">
            <div class="p-3 transition-colors duration-400 lg:px-8 lg:pb-4 lg:pt-5 " :class="open ? 'bg-white' : 'bg-none hover:bg-[#086B62]'">
              <dt>
                <DisclosureButton class="text-left w-full flex justify-between items-start">
                  <span class="font-bold" :class="open ? 'text-tertiary-900' : 'text-primary-50'">
                    {{ t("home.faq.question-3.q") }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <nuxt-icon name="chevron-down" class="transform transition-transform text-sm" :class="open ? '-rotate-180 text-tertiary-900' : 'rotate-0 text-primary-50'" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base text-tertiary-900 font-light">
                  {{ t("home.faq.question-3.a") }}
                </p>
              </DisclosurePanel>
            </div>
          </Disclosure>
          <Disclosure as="div" v-slot="{ open }" v-if="more">
            <div class="p-3 transition-colors duration-400 lg:px-8 lg:pb-4 lg:pt-5 " :class="open ? 'bg-white' : 'bg-none hover:bg-[#086B62]'">
              <dt>
                <DisclosureButton class="text-left w-full flex justify-between items-start">
                  <span class="font-bold" :class="open ? 'text-tertiary-900' : 'text-primary-50'">
                    {{ t("home.faq.question-4.q") }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <nuxt-icon name="chevron-down" class="transform transition-transform text-sm" :class="open ? '-rotate-180 text-tertiary-900' : 'rotate-0 text-primary-50'" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base text-tertiary-900 font-light">
                  {{ t("home.faq.question-4.a") }}
                </p>
              </DisclosurePanel>
            </div>
          </Disclosure>
          <Disclosure as="div" v-slot="{ open }" v-if="more">
            <div class="p-3 transition-colors duration-400 lg:px-8 lg:pb-4 lg:pt-5 " :class="open ? 'bg-white' : 'bg-none hover:bg-[#086B62]'">
              <dt>
                <DisclosureButton class="text-left w-full flex justify-between items-start">
                  <span class="font-bold" :class="open ? 'text-tertiary-900' : 'text-primary-50'">
                    {{ t("home.faq.question-5.q") }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <nuxt-icon name="chevron-down" class="transform transition-transform text-sm" :class="open ? '-rotate-180 text-tertiary-900' : 'rotate-0 text-primary-50'" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base text-tertiary-900 font-light">
                  {{ t("home.faq.question-5.a") }}
                </p>
              </DisclosurePanel>
            </div>
          </Disclosure>
          <Disclosure as="div" v-slot="{ open }" v-if="more">
            <div class="p-3 transition-colors duration-400 lg:px-8 lg:pb-4 lg:pt-5 " :class="open ? 'bg-white' : 'bg-none hover:bg-[#086B62]'">
              <dt>
                <DisclosureButton class="text-left w-full flex justify-between items-start">
                  <span class="font-bold" :class="open ? 'text-tertiary-900' : 'text-primary-50'">
                    {{ t("home.faq.question-6.q") }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <nuxt-icon name="chevron-down" class="transform transition-transform text-sm" :class="open ? '-rotate-180 text-tertiary-900' : 'rotate-0 text-primary-50'" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base text-tertiary-900 font-light">
                  {{ t("home.faq.question-6.a") }}
                </p>
              </DisclosurePanel>
            </div>
          </Disclosure>
          <Disclosure as="div" v-slot="{ open }" v-if="more">
            <div class="p-3 transition-colors duration-400 lg:px-8 lg:pb-4 lg:pt-5 " :class="open ? 'bg-white' : 'bg-none hover:bg-[#086B62]'">
              <dt>
                <DisclosureButton class="text-left w-full flex justify-between items-start">
                  <span class="font-bold" :class="open ? 'text-tertiary-900' : 'text-primary-50'">
                    {{ t("home.faq.question-7.q") }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <nuxt-icon name="chevron-down" class="transform transition-transform text-sm" :class="open ? '-rotate-180 text-tertiary-900' : 'rotate-0 text-primary-50'" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base text-tertiary-900 font-light">
                  {{ t("home.faq.question-7.a") }}
                </p>
              </DisclosurePanel>
            </div>
          </Disclosure>
          <Disclosure as="div" v-slot="{ open }" v-if="more">
            <div class="p-3 transition-colors duration-400 lg:px-8 lg:pb-4 lg:pt-5 " :class="open ? 'bg-white' : 'bg-none hover:bg-[#086B62]'">
              <dt>
                <DisclosureButton class="text-left w-full flex justify-between items-start">
                  <span class="font-bold" :class="open ? 'text-tertiary-900' : 'text-primary-50'">
                    {{ t("home.faq.question-8.q") }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <nuxt-icon name="chevron-down" class="transform transition-transform text-sm" :class="open ? '-rotate-180 text-tertiary-900' : 'rotate-0 text-primary-50'" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base text-tertiary-900 font-light">
                  {{ t("home.faq.question-8.a") }}
                </p>
              </DisclosurePanel>
            </div>
          </Disclosure>
          <Disclosure as="div" v-slot="{ open }" v-if="more">
            <div class="p-3 transition-colors duration-400 lg:px-8 lg:pb-4 lg:pt-5 " :class="open ? 'bg-white' : 'bg-none hover:bg-[#086B62]'">
              <dt>
                <DisclosureButton class="text-left w-full flex justify-between items-start">
                  <span class="font-bold" :class="open ? 'text-tertiary-900' : 'text-primary-50'">
                    {{ t("home.faq.question-9.q") }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <nuxt-icon name="chevron-down" class="transform transition-transform text-sm" :class="open ? '-rotate-180 text-tertiary-900' : 'rotate-0 text-primary-50'" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base text-tertiary-900 font-light">
                  {{ t("home.faq.question-9.a") }}
                </p>
              </DisclosurePanel>
            </div>
          </Disclosure>
          <Disclosure as="div" v-slot="{ open }" v-if="more">
            <div class="p-3 transition-colors duration-400 lg:px-8 lg:pb-4 lg:pt-5 " :class="open ? 'bg-white' : 'bg-none hover:bg-[#086B62]'">
              <dt>
                <DisclosureButton class="text-left w-full flex justify-between items-start">
                  <span class="font-bold" :class="open ? 'text-tertiary-900' : 'text-primary-50'">
                    {{ t("home.faq.question-10.q") }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <nuxt-icon name="chevron-down" class="transform transition-transform text-sm" :class="open ? '-rotate-180 text-tertiary-900' : 'rotate-0 text-primary-50'" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base text-tertiary-900 font-light">
                  {{ t("home.faq.question-10.a") }}
                </p>
              </DisclosurePanel>
            </div>
          </Disclosure>
          <Disclosure as="div" v-slot="{ open }" v-if="more">
            <div class="p-3 transition-colors duration-400 lg:px-8 lg:pb-4 lg:pt-5 " :class="open ? 'bg-white' : 'bg-none hover:bg-[#086B62]'">
              <dt>
                <DisclosureButton class="text-left w-full flex justify-between items-start">
                  <span class="font-bold" :class="open ? 'text-tertiary-900' : 'text-primary-50'">
                    {{ t("home.faq.question-11.q") }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <nuxt-icon name="chevron-down" class="transform transition-transform text-sm" :class="open ? '-rotate-180 text-tertiary-900' : 'rotate-0 text-primary-50'" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base text-tertiary-900 font-light">
                  {{ t("home.faq.question-11.a") }}
                </p>
              </DisclosurePanel>
            </div>
          </Disclosure>
          <Disclosure as="div" v-slot="{ open }" v-if="more">
            <div class="p-3 transition-colors duration-400 lg:px-8 lg:pb-4 lg:pt-5 " :class="open ? 'bg-white' : 'bg-none hover:bg-[#086B62]'">
              <dt>
                <DisclosureButton class="text-left w-full flex justify-between items-start">
                  <span class="font-bold" :class="open ? 'text-tertiary-900' : 'text-primary-50'">
                    {{ t("home.faq.question-12.q") }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <nuxt-icon name="chevron-down" class="transform transition-transform text-sm" :class="open ? '-rotate-180 text-tertiary-900' : 'rotate-0 text-primary-50'" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base text-tertiary-900 font-light">
                  {{ t("home.faq.question-12.a") }}
                </p>
              </DisclosurePanel>
            </div>
          </Disclosure>
          <Disclosure as="div" v-slot="{ open }" v-if="more">
            <div class="p-3 transition-colors duration-400 lg:px-8 lg:pb-4 lg:pt-5 " :class="open ? 'bg-white' : 'bg-none hover:bg-[#086B62]'">
              <dt>
                <DisclosureButton class="text-left w-full flex justify-between items-start">
                  <span class="font-bold" :class="open ? 'text-tertiary-900' : 'text-primary-50'">
                    {{ t("home.faq.question-13.q") }}
                  </span>
                  <span class="ml-6 h-7 flex items-center">
                    <nuxt-icon name="chevron-down" class="transform transition-transform text-sm" :class="open ? '-rotate-180 text-tertiary-900' : 'rotate-0 text-primary-50'" />
                  </span>
                </DisclosureButton>
              </dt>
              <DisclosurePanel as="dd" class="mt-2 pr-12">
                <p class="text-base text-tertiary-900 font-light">
                  {{ t("home.faq.question-13.a") }}
                </p>
              </DisclosurePanel>
            </div>
          </Disclosure>
        </dl>
        <button class="block uppercase text-primary-50 text-sm text-center font-bold border-primary-50 border-2 px-16 py-4 mt-6 w-full transition-colors lg:w-auto lg:mx-auto lg:mt-10 hover:bg-tertiary-900 hover:text-white hover:border-tertiary-900" @click="more = !more">
          {{ more ? t("home.faq.less") : t("home.faq.more") }}
        </button>
      </div>
    </section>
  </div>
</template>
