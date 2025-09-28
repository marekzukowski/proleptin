<script setup>
import { useI18n } from "#i18n";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
const { t } = useI18n();
</script>

<template>
  <div>
    <section :id="$t('header.nav.effects.path')" class="lg:bg-tertiary-50  lg:py-20">
      <div class="lg:px-3 lg:container lg:mx-auto">
        <div class="lg:grid lg:grid-cols-3 lg:gap-24 lg:items-start lg:mb-20">
          <div class="bg-tertiary-50 px-3 py-10 lg:bg-transparent lg:p-0">
            <h2 class="uppercase font-black text-2xl mb-4 lg:text-[2rem] lg:mb-8">
              {{ t("home.charts.section-1.title") }}
            </h2>
            <p class="font-light lg:text-xl">
              {{ t("home.charts.section-1.paragraph-1") }}
            </p>
            <div class="bg-tertiary-900 h-px my-4" />
            <p class="font-bold my-8 lg:text-xl lg:mx-8">
              {{ t("home.charts.section-1.paragraph-2") }}
            </p>
            <div class="bg-tertiary-900 h-px my-4" />
            <p class="font-light mb-4 lg:text-xl">
              {{ t("home.charts.section-1.paragraph-3") }}
            </p>
            <p class="font-light mb-4 lg:text-xl">
              {{ t("home.charts.section-1.paragraph-4") }}
            </p>
            <div class="flex items-start">
              <nuxt-icon name="info" class="text-tertiary-600 mr-2" />
              <p class="text-sm">
                <i18n-t keypath="home.charts.section-1.info" tag="span" scope="global" class="text-tertiary-600 font-light">
                  <a href="https://fytexia.com/dnf-10-satiety/" target="_blank" class="text-primary-500 underline transition-colors hover:text-primary-700">
                    {{ t("home.charts.section-1.info-0") }}
                  </a>
                </i18n-t>
                <a href="https://fytexia.com/dnf-10-satiety/" target="_blank" class="inline-block ml-1 text-primary-500 transition-colors hover:text-primary-700">
                  <nuxt-icon name="link" />
                </a>
              </p>
            </div>
          </div>
          <div class="px-3 py-10 lg:p-0 lg:col-span-2">
            <TabGroup>
              <TabList class="mb-8">
                <Tab v-slot="{ selected }" as="template">
                  <button class="uppercase font-light text-sm mx-2 underline-offset-4 transition-colors lg:px-9 lg:py-3 lg:border lg:rounded-full lg:border-tertiary-900 lg:ml-0 lg:mr-4 hover:lg:bg-primary-500 hover:lg:text-white" :class="selected ? 'underline focus:outline-none lg:no-underline lg:bg-tertiary-900 lg:text-white' : ''">
                    {{ t("home.charts.chart-1.title") }}
                  </button>
                </Tab>
                <Tab v-slot="{ selected }" as="template">
                  <button class="uppercase font-light text-sm mx-2 underline-offset-4 transition-colors lg:px-9 lg:py-3 lg:border lg:rounded-full lg:border-tertiary-900 lg:ml-0 lg:mr-4 hover:lg:bg-primary-500 hover:lg:text-white" :class="selected ? 'underline focus:outline-none lg:no-underline lg:bg-tertiary-900 lg:text-white' : ''">
                    {{ t("home.charts.chart-2.title") }}
                  </button>
                </Tab>
                <Tab v-slot="{ selected }" as="template">
                  <button class="uppercase font-light text-sm mx-2 underline-offset-4 transition-colors lg:px-9 lg:py-3 lg:border lg:rounded-full lg:border-tertiary-900 lg:ml-0 lg:mr-4 hover:lg:bg-primary-500 hover:lg:text-white" :class="selected ? 'underline focus:outline-none lg:no-underline lg:bg-tertiary-900 lg:text-white' : ''">
                    {{ t("home.charts.chart-3.title") }}
                  </button>
                </Tab>
              </TabList>
              <div class="lg:bg-white lg:border-b lg:border-tertiary-900 lg:px-8 lg:py-8">
                <TabPanels>
                  <TabPanel>
                    <p class="text-sm">
                      {{ t("home.charts.chart-1.text") }}
                    </p>
                    <p class="text-sm text-primary-500 font-bold mb-4">
                      {{ t("home.charts.chart-1.score") }}
                    </p>
                    <img class="block mx-auto max-w-full h-auto mb-4 min-h[300px]" src="/img/chart-1.jpg" alt="Proleptin Forte" rel="preload" />
                  </TabPanel>
                  <TabPanel>
                    <p class="text-sm">
                      {{ t("home.charts.chart-2.text") }}
                    </p>
                    <p class="text-sm text-primary-500 font-bold mb-4">
                      {{ t("home.charts.chart-2.score") }}
                    </p>
                    <img class="block mx-auto max-w-full h-auto mb-4 min-h[300px]" src="/img/chart-2.jpg" alt="Proleptin Forte" rel="preload" />
                  </TabPanel>
                  <TabPanel>
                    <p class="text-sm">
                      {{ t("home.charts.chart-3.text") }}
                    </p>
                    <p class="text-sm text-primary-500 font-bold mb-4">
                      {{ t("home.charts.chart-3.score") }}
                    </p>
                    <img class="block mx-auto max-w-full h-auto mb-4 min-h[300px]" src="/img/chart-3.jpg" alt="Proleptin Forte" rel="preload" />
                  </TabPanel>
                </TabPanels>
                <div class="bg-tertiary-900 h-px my-4 lg:hidden" />
                <div class="flex items-center">
                  <span class="w-4 h-4 bg-tertiary-600 mr-2" />
                  <span class="text-sm mr-4">{{ t("home.charts.legend.placebo") }}</span>
                  <span class="w-4 h-4 bg-primary-500 mr-2" />
                  <span class="text-sm mr-4">{{ t("home.charts.legend.dnf") }}</span>
                  <span class="text-sm mr-auto">{{ t("home.charts.legend.time") }}</span>
                  <div>
                    <span class="text-sm mr-auto">
                      {{ t("home.charts.legend.source") }}:
                      <a href="https://fytexia.com/dnf-10-satiety/" target="_blank" class="inline-block underline text-primary-500 transition-colors hover:text-primary-700">
                        fytexia.com
                        <nuxt-icon name="link" class="inline-block text-xs" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </TabGroup>
          </div>
        </div>
        <div class="lg:grid lg:grid-cols-3 lg:gap-24 lg:items-start">
          <div class="bg-tertiary-50 px-3 py-10 lg:bg-transparent lg:p-0">
            <h2 class="uppercase font-black text-2xl mb-4 lg:text-[2rem] lg:mb-8">
              {{ t("home.charts.section-2.title") }}
            </h2>
            <p class="font-light lg:text-xl">
              {{ t("home.charts.section-2.paragraph-1") }}
            </p>
            <div class="bg-tertiary-900 h-px my-4" />
            <p class="font-bold my-8 lg:text-xl lg:mx-8">
              {{ t("home.charts.section-2.paragraph-2") }}
            </p>
            <div class="bg-tertiary-900 h-px my-4" />
            <div class="flex items-start">
              <nuxt-icon name="info" class="text-tertiary-600 mr-2" />
              <p class="text-sm">
                <i18n-t keypath="home.charts.section-1.info" tag="span" scope="global" class="text-tertiary-600 font-light">
                  <a href="https://fytexia.com/dnf-10-satiety/" target="_blank" class="text-primary-500 underline transition-colors hover:text-primary-700">
                    {{ t("home.charts.section-1.info-0") }}
                  </a>
                </i18n-t>
                <a href="https://fytexia.com/dnf-10-satiety/" target="_blank" class="inline-block ml-1 text-primary-500 transition-colors hover:text-primary-700">
                  <nuxt-icon name="link" />
                </a>
              </p>
            </div>
          </div>
          <div class="px-3 py-10 lg:p-0 lg:col-span-2">
            <TabGroup>
              <TabList class="mb-8">
                <Tab v-slot="{ selected }" as="template">
                  <button class="uppercase font-light text-sm mx-2 underline-offset-4 transition-colors lg:px-9 lg:py-3 lg:border lg:rounded-full lg:border-tertiary-900 lg:ml-0 lg:mr-4 hover:lg:bg-primary-500 hover:lg:text-white" :class="selected ? 'underline focus:outline-none lg:no-underline lg:bg-tertiary-900 lg:text-white' : ''">
                    {{ t("home.charts.chart-4.title") }}
                  </button>
                </Tab>
                <Tab v-slot="{ selected }" as="template">
                  <button class="uppercase font-light text-sm mx-2 underline-offset-4 transition-colors lg:px-9 lg:py-3 lg:border lg:rounded-full lg:border-tertiary-900 lg:ml-0 lg:mr-4 hover:lg:bg-primary-500 hover:lg:text-white" :class="selected ? 'underline focus:outline-none lg:no-underline lg:bg-tertiary-900 lg:text-white' : ''">
                    {{ t("home.charts.chart-5.title") }}
                  </button>
                </Tab>
              </TabList>
              <div class="lg:bg-white lg:border-b lg:border-tertiary-900 lg:px-8 lg:py-8">
                <TabPanels>
                  <TabPanel>
                    <p class="text-sm">
                      {{ t("home.charts.chart-4.text") }}
                    </p>
                    <p class="text-sm text-primary-500 font-bold mb-4">
                      {{ t("home.charts.chart-4.score") }}
                    </p>
                    <img class="block mx-auto max-w-full h-auto mb-4 min-h[300px]" src="/img/chart-4.jpg" alt="Proleptin Forte" rel="preload" />
                  </TabPanel>
                  <TabPanel>
                    <p class="text-sm">
                      {{ t("home.charts.chart-5.text") }}
                    </p>
                    <p class="text-sm text-primary-500 font-bold mb-4">
                      {{ t("home.charts.chart-5.score") }}
                    </p>
                    <img class="block mx-auto max-w-full h-auto mb-4 min-h[300px]" src="/img/chart-5.jpg" alt="Proleptin Forte" rel="preload" />
                  </TabPanel>
                </TabPanels>
                <div class="bg-tertiary-900 h-px my-4 lg:hidden" />
                <div class="flex items-center">
                  <span class="w-4 h-4 bg-tertiary-600 mr-2" />
                  <span class="text-sm mr-4">{{ t("home.charts.legend.placebo") }}</span>
                  <span class="w-4 h-4 bg-primary-500 mr-2" />
                  <span class="text-sm mr-auto">{{ t("home.charts.legend.dnf") }}</span>
                  <div>
                    <span class="text-sm mr-auto">
                      {{ t("home.charts.legend.source") }}:
                      <a href="https://fytexia.com/dnf-10-satiety/" target="_blank" class="inline-block underline text-primary-500 transition-colors hover:text-primary-700">
                        fytexia.com
                        <nuxt-icon name="link" class="inline-block text-xs" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </TabGroup>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
