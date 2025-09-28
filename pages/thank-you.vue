<template>
  <div>
    <main class="site-main">
      <section class="py-10 lg:py-24">
        <div class="px-3 lg:container lg:mx-auto">
          <h2 class="uppercase font-black text-2xl text-primary-500 text-center mb-2 lg:text-[2.0rem] lg:leading-tight lg:mt-8">
            {{ t("typ.title") }} </h2>
          <p class=" font-light text-center lg:text-xl lg:mb-12">
            {{ t("typ.subtitle") }}
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from "#i18n";
const { t } = useI18n();
definePageMeta({
  layout: "default",
});
useHead({
  title: "Proleptin Forte",
})
onMounted(() => {
  fbq('track', 'Purchase', { value: 0.00, currency: 'PLN' });
})
</script>
