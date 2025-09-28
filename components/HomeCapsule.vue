
<script setup>
import { useI18n } from "#i18n";
const { t } = useI18n();
</script>

<template>
  <div>
    <section class="bg-white py-10 lg:py-24">
      <div class="px-3 lg:container mx-auto">
        <div class="mb-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
          <img class="block mx-auto max-w-full h-auto mb-4 lg:hidden" src="/img/capsule-img-mobile.jpg" alt="Proleptin Forte" />
          <img class="mx-auto max-w-full h-auto hidden lg:block lg:order-2" src="/img/capsule-img-desktop.jpg" alt="Proleptin Forte" />
          <div class="lg:order-1">
            <h2 class="uppercase font-black text-2xl mb-4 lg:text-[2rem] lg:mb-8">
              {{ t("home.capsule.title") }}
            </h2>
            <p class="font-light mb-4 lg:text-xl lg:mb-8">
              {{ t("home.capsule.paragraph") }}
            </p>
            <ul class="lg:grid lg:grid-cols-2">
              <li class="flex items-start justify-start mb-2">
                <nuxt-icon name="check" class="text-primary-500 inline-block mr-2 mt-0.5 flex-shrink-0 lg:mt-1 lg:mr-2" />
                <span class="font-light lg:text-xl">
                  {{ t("home.capsule.check-1") }}
                </span>
              </li>
              <li class="flex items-start justify-start mb-2">
                <nuxt-icon name="check" class="text-primary-500 inline-block mr-2 mt-0.5 flex-shrink-0 lg:mt-1 lg:mr-2" />
                <span class="font-light lg:text-xl">
                  {{ t("home.capsule.check-2") }}
                </span>
              </li>
              <li class="flex items-start justify-start mb-2">
                <nuxt-icon name="check" class="text-primary-500 inline-block mr-2 mt-0.5 flex-shrink-0 lg:mt-1 lg:mr-2" />
                <span class="font-light lg:text-xl">
                  {{ t("home.capsule.check-3") }}
                </span>
              </li>
              <li class="flex items-start justify-start mb-2">
                <nuxt-icon name="check" class="text-primary-500 inline-block mr-2 mt-0.5 flex-shrink-0 lg:mt-1 lg:mr-2" />
                <span class="font-light lg:text-xl">
                  {{ t("home.capsule.check-4") }}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
