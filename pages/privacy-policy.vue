<script setup>
import { useI18n } from "#i18n";
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
            {{ t("legal.privacy.name") }}
          </h2>
          <PrivacyAT v-if="locale == 'at'" />
          <PrivacyCZ v-if="locale == 'cz'" />
          <PrivacyDE v-if="locale == 'de'" />
          <PrivacyES v-if="locale == 'es'" />
          <PrivacyHR v-if="locale == 'hr'" />
          <PrivacyHU v-if="locale == 'hu'" />
          <PrivacyIT v-if="locale == 'it'" />
          <PrivacyPL v-if="locale == 'pl'" />
          <PrivacyPT v-if="locale == 'pt'" />
          <PrivacyRO v-if="locale == 'ro'" />
          <PrivacySI v-if="locale == 'si'" />
          <PrivacySK v-if="locale == 'sk'" />
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
