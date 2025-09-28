<script setup>
import { useNavigation } from '~/store/navigation';
const navigation = useNavigation();
</script>

<template>
  <button class="p-2 relative z-20">
    <div class="flex items-center justify-center flex-col w-6 h-4 relative group">
      <span class="w-full h-0.5 bg-tertiary-900 transition-all ease-in-out absolute transform group-hover:bg-primary-500" :class="navigation.navPanelIsOpen ? 'translate-y-0 rotate-45' : '-translate-y-2'"></span>
      <span class="w-full h-0.5 bg-tertiary-900 transition-all ease-in-out absolute transform group-hover:bg-primary-500" :class="navigation.navPanelIsOpen ? 'opacity-0 translate-x-3' : 'opacity-100'"></span>
      <span class="w-full h-0.5 bg-tertiary-900 transition-all ease-in-out absolute transform group-hover:bg-primary-500" :class="navigation.navPanelIsOpen ? 'translate-y-0 -rotate-45' : 'translate-y-2'"></span>
    </div>
  </button>
</template>
