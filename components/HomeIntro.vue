<script setup>
import { useI18n } from "#i18n";
const { t } = useI18n();
</script>

<template>
  <div>
    <section class="bg-white py-10 lg:py-24">
      <div class="px-3 lg:container mx-auto">
        <h2 class="uppercase font-black text-2xl text-center mb-4 lg:text-[2rem]">
          {{ t("home.intro.title") }}
        </h2>
        <p class="font-light text-base text-center mb-8 lg:text-lg lg:mb-12 lg:max-w-[800px] lg:mx-auto">
          <i18n-t keypath="home.intro.paragraph" tag="span" scope="global">
            <strong class="font-bold"> {{ t("home.intro.paragraph-0") }}</strong>
            <a href="https://fytexia.com/dnf-10-satiety/" target="_blank" class="text-primary-500 underline font-bold transition-colors hover:text-primary-700">
              {{ t("home.intro.paragraph-1") }}
            </a>
          </i18n-t>
          <a href="https://fytexia.com/dnf-10-satiety/" target="_blank" class="inline-block ml-1 text-sm text-primary-500 transition-colors hover:text-primary-700">
            <nuxt-icon name="link" />
          </a>
        </p>

        <div class="grid grid-cols-2 gap-1 auto-rows-fr lg:grid-cols-4">
          <div class="bg-primary-100 px-2 py-4 lg:px-4 lg:py-10">
            <img class="block mb-3 mx-auto max-w-full h-auto lg:mb-4" src="/img/intro-icon-1.png" alt="Proleptin Forte" />
            <i18n-t keypath="home.intro.icon-1" tag="p" scope="global" class="font-light text-sm text-center lg:text-lg">
              <strong class="font-bold"> {{ t("home.intro.icon-1-0") }}</strong>
            </i18n-t>
          </div>
          <div class="bg-primary-100 px-2 py-4 lg:px-4 lg:py-10">
            <img class="block mb-3 mx-auto max-w-full h-auto lg:mb-4" src="/img/intro-icon-2.png" alt="Proleptin Forte" />
            <p class="font-light text-sm text-center lg:text-lg"> {{ t("home.intro.icon-2") }}</p>
          </div>
          <div class="bg-primary-100 px-2 py-4 lg:px-4 lg:py-10">
            <img class="block mb-3 mx-auto max-w-full h-auto lg:mb-4" src="/img/intro-icon-3.png" alt="Proleptin Forte" />
            <p class="font-light text-sm text-center lg:text-lg"> {{ t("home.intro.icon-3") }}</p>
          </div>
          <div class="bg-primary-100 px-2 py-4 lg:px-4 lg:py-10">
            <img class="block mb-3 mx-auto max-w-full h-auto lg:mb-4" src="/img/intro-icon-4.png" alt="Proleptin Forte" />
            <i18n-t keypath="home.intro.icon-4" tag="p" scope="global" class="font-light text-sm text-center mb-2 lg:text-lg">
              <strong class="font-bold"> {{ t("home.intro.icon-4-0") }}</strong>
            </i18n-t>
            <a href="https://fytexia.com/dnf-10-satiety/" target="_blank" class="text-sm font-bold text-primary-500 text-center underline block transition-colors hover:text-primary-700 lg:text-base">
              {{ t("home.intro.studies") }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
