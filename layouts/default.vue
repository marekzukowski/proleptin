<script setup>
// import { onMounted, ref } from 'vue'
// import { useScriptTag } from '@vueuse/core'
// const fbContainer = ref(null);
// const { load } = useScriptTag(
//   'js/fbMessanger.js',
//   () => { },
//   {
//     manual: true
//   }
// );
// async function renderMessanger() {
//   await load();
// }
// onMounted(() => {
//   renderMessanger()
// })
</script>
<template>
  <div>
    <Html class="scroll-smooth" />
    <BaseHeader />
    <slot />
    <BaseFooter />
    <ClientOnly>
      <BaseHeaderLang />
    </ClientOnly>
    <BaseHeaderPanel />
    <!-- <div>
      <div id="fb-root"></div>
      <div ref="fb-container" id="fb-customer-chat" class="fb-customerchat"></div>
    </div> -->
  </div>
</template>
