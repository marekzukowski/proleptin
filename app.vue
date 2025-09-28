<script setup>
import { useUser } from '~/store/user';
import { useLocalStorage } from '@vueuse/core'
const user = useUser();
const { $url, $sessionId } = useNuxtApp();
user.url = $url;
user.sessionId = $sessionId;
useLocalStorage('langRedirect', true);
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
