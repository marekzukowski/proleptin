<script setup>
import { TabList, Tab } from '@headlessui/vue'
import { useI18n } from "#i18n";
import { useOrder } from '~/store/order';
const order = useOrder();
const { t } = useI18n();
</script>

<template>
  <div>
    <TabList class="border border-tertiary-200 px-3 h-10 flex items-center justify-around lg:border-none lg:justify-center lg:h-8">
      <Tab v-slot="{ selected }" as="template">
        <button class="text-sm" :class="[selected ? 'font-bold text-tertiary-900 focus:outline-none' : 'text-tertiary-600 font-light']" @click="order.changeStep(0)">
          1. {{ t('order.steps.contact') }}
        </button>
      </Tab>
      <nuxt-icon name="angle" class="text-tertiary-300 text-sm lg:mx-4" />
      <Tab v-slot="{ selected }" as="template" :disabled="order.isStepDone == false">
        <button class="text-sm ring-0 disabled:cursor-not-allowed" :class="[selected ? 'font-bold text-tertiary-900 focus:outline-none' : 'text-tertiary-600 font-light']" @click="order.changeStep(1)">
          2. {{ t('order.steps.address') }}
        </button>
      </Tab>
    </TabList>
  </div>
</template>
