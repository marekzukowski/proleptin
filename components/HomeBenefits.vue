
<script setup>
import { useI18n } from "#i18n";
const { t } = useI18n();
</script>

<template>
  <div>
    <section class="bg-white py-10 lg:py-24">
      <div class="px-3 lg:container mx-auto">
        <div class="mb-8 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
          <img class="block mx-auto max-w-full h-auto" src="/img/benefits-img.jpg" alt="Proleptin Forte" />
          <div class="lg:mt-12">
            <span class="inline-block text-sm font-bold text-secondary-500 mb-2 lg:text-base lg:mb-6">{{ t("home.benefits.subtitle") }}</span>
            <h2 class="uppercase font-black text-2xl mb-4 lg:text-[2rem] lg:mb-8">
              {{ t("home.benefits.title") }}
            </h2>
            <ul>
              <li class="flex items-start justify-start mb-2">
                <nuxt-icon name="check" class="text-primary-500 inline-block mr-1 mt-0.5 flex-shrink-0 lg:mt-1 lg:mr-2" />
                <span class="font-light lg:text-xl lg:font-normal">
                  {{ t("home.benefits.check-1") }}
                </span>
              </li>
              <li class="flex items-start justify-start mb-2">
                <nuxt-icon name="check" class="text-primary-500 inline-block mr-1 mt-0.5 flex-shrink-0 lg:mt-1 lg:mr-2" />
                <span class="font-light lg:text-xl lg:font-normal">
                  {{ t("home.benefits.check-2") }}
                </span>
              </li>
              <li class="flex items-start justify-start mb-2">
                <nuxt-icon name="check" class="text-primary-500 inline-block mr-1 mt-0.5 flex-shrink-0 lg:mt-1 lg:mr-2" />
                <span class="font-light lg:text-xl lg:font-normal">
                  {{ t("home.benefits.check-3") }}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="mb-8 grid grid-cols-1 gap-1 auto-rows-fr lg:grid-cols-5">
          <div class="bg-primary-100 px-2 py-4 lg:px-4 lg:py-10">
            <img class="block mb-3 mx-auto max-w-full h-auto lg:mb-4" src="/img/benefits-icon-1.png" alt="Proleptin Forte" />
            <p class="font-bold text-sm text-center lg:text-lg"> {{ t("home.benefits.icon-1") }}</p>
          </div>
          <div class="bg-primary-100 px-2 py-4 lg:px-4 lg:py-10">
            <img class="block mb-3 mx-auto max-w-full h-auto lg:mb-4" src="/img/benefits-icon-2.png" alt="Proleptin Forte" />
            <p class="font-light text-sm text-center lg:text-lg"> {{ t("home.benefits.icon-2") }}</p>
          </div>
          <div class="bg-primary-100 px-2 py-4 lg:px-4 lg:py-10">
            <img class="block mb-3 mx-auto max-w-full h-auto lg:mb-4" src="/img/benefits-icon-3.png" alt="Proleptin Forte" />

            <i18n-t keypath="home.benefits.icon-3" tag="p" scope="global" class="text-sm text-center font-bold lg:text-lg">
              <span class="font-light"> {{ t("home.benefits.icon-3-0") }}</span>
            </i18n-t>
          </div>
          <div class="bg-primary-100 px-2 py-4 lg:px-4 lg:py-10">
            <img class="block mb-3 mx-auto max-w-full h-auto lg:mb-4" src="/img/benefits-icon-4.png" alt="Proleptin Forte" />
            <p class="font-light text-sm text-center lg:text-lg"> {{ t("home.benefits.icon-4") }}</p>
          </div>
          <div class="bg-primary-100 px-2 py-4 lg:px-4 lg:py-10">
            <img class="block mb-3 mx-auto max-w-full h-auto lg:mb-4" src="/img/benefits-icon-5.png" alt="Proleptin Forte" />
            <i18n-t keypath="home.benefits.icon-5" tag="p" scope="global" class="font-light text-sm text-center mb-2 lg:text-lg">
              <strong class="font-bold"> {{ t("home.benefits.icon-5-0") }}</strong>
            </i18n-t>
          </div>
        </div>
        <p class="font-light text-center text-sm lg:text-base">
          <a href="https://fytexia.com/dnf-10-satiety/" target="_blank" class="underline font-bold text-primary-500 transition-colors hover:text-primary-700">
            {{ t("home.benefits.studies-link") }}
            <nuxt-icon name="link" class="inline-block text-xs" />
          </a>
          {{ t("home.benefits.studies") }}
        </p>
      </div>
    </section>
  </div>
</template>
