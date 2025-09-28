<script setup>
import { useI18n } from "#i18n";
import { useClipboard } from '@vueuse/core'
const { t } = useI18n();
const { copied, copy } = useClipboard()
</script>

<template>
  <button class="flex items-center text-start cursor-pointer group" @click="copy(t('contact.email.address') + '@proleptinforte.com')">
    <nuxt-icon name="clone" class="text-primary-500 mr-2 text-sm transition-colors group-hover:text-secondary-500" />
    <span v-if='!copied' class="text-primary-500 text-sm underline font-light transition-colors group-hover:text-secondary-500">
      {{ t('contact.email.copy') }}
    </span>
    <span v-else class="text-primary-500 text-sm underline font-light transition-colors group-hover:text-secondary-500">
      {{ t('contact.copied') }}
    </span>
  </button>
</template>
