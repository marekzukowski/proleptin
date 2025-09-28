
<script setup>
import { useI18n } from "#i18n";
const { t, locale } = useI18n();
</script>

<template>
  <div>
    <section class="px-3 mb-16 lg:container lg:mx-auto lg:mb-32">
      <div class="bg-primary-700 bg-cover bg-no-repeat bg-center px-10 lg:py-10" style="background-image: url('/img/section-bg.jpg')">
        <div class="relative -top-14 lg:flex lg:items-center lg:max-w-4xl lg:mx-auto lg:top-0">
          <img class="block mx-auto max-w-full h-auto mb-4 lg:mb-0" :src="'/img/guarantee-' + locale + '.png'" alt="Proleptin Forte" />
          <div class="lg:ml-16">
            <h2 class="text-white uppercase font-black text-center text-2xl mb-4 lg:text-[2rem] lg:text-left">
              {{ t("home.guarantee.title") }}
            </h2>
            <p class="text-white font-light text-lg mb-8 text-center lg:text-xl lg:text-left lg:mb-0">
              {{ t("home.guarantee.paragraph") }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
