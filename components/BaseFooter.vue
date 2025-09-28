<script setup>
import { useMediaQuery } from '@vueuse/core'
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
</script>
<template>
  <ClientOnly>
    <BaseFooterDesktop v-if="isLargeScreen" />
    <BaseFooterMobile v-else />
  </ClientOnly>
</template>
