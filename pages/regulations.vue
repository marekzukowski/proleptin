<script setup>
import { useI18n } from "#i18n";
import RegulationsPT from "../components/RegulationsPT.vue";
import RegulationsRO from "../components/RegulationsRO.vue";
const { t, locale } = useI18n();
definePageMeta({
  layout: "default",
});
useHead({
  title: "Proleptin Forte",
})
</script>

<template>
  <div>
    <main class="site-main">
      <section class="py-10 lg:py-24">
        <div class="px-3 lg:mx-auto lg:max-w-3xl">
          <h2 class="uppercase font-black text-2xl text-primary-500 text-center mb-2 lg:text-[2.0rem] lg:leading-tight">
            {{ t("legal.regulations.name") }}
          </h2>
          <RegulationsAT v-if="locale == 'at'" />
          <RegulationsCZ v-if="locale == 'cz'" />
          <RegulationsDE v-if="locale == 'de'" />
          <RegulationsES v-if="locale == 'es'" />
          <RegulationsHR v-if="locale == 'hr'" />
          <RegulationsHU v-if="locale == 'hu'" />
          <RegulationsIT v-if="locale == 'it'" />
          <RegulationsPL v-if="locale == 'pl'" />
          <RegulationsPT v-if="locale == 'pt'" />
          <RegulationsRO v-if="locale == 'ro'" />
          <RegulationsSI v-if="locale == 'si'" />
          <RegulationsSK v-if="locale == 'sk'" />
        </div>
      </section>
    </main>
  </div>
</template>

<style>
h3 {
  @apply mb-2 mt-4 text-lg font-bold text-primary-500
}

ol,
ul {
  @apply list-inside
}

ol {
  @apply list-decimal
}

ul {
  @apply list-disc
}

li {
  @apply mb-2
}

li>ol,
li>ul {
  @apply ml-4
}
</style>
