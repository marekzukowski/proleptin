<script setup>
import { useI18n } from "#i18n";
const { t } = useI18n();
const groups = {
  one: [1, 2, 3],
  two: [4, 5, 6],
  three: [7, 8, 9],
  four: [10, 11, 12],
  five: [12, 13, 14],
};
let activeIndex = ref(0);
const reviews = ref([1, 2, 3]);

function loadMore() {
  if (activeIndex.value !== 4) {
    activeIndex.value += 1;
  } else {
    activeIndex.value = 0;
  }
  reviews.value = Object.values(groups)[activeIndex.value];
}
</script>

<template>
  <div>
    <section
      :id="$t('header.nav.reviews.path')"
      class="bg-primary-700 pb-10 lg:py-16 -mb-4 lg:mb-0 lg:relative"
    >
      <img
        class="block max-w-full h-auto mx-auto relative -top-4 lg:hidden"
        src="/img/reviews-bg-mobile.png"
        alt="Proleptin Forte"
      />
      <img
        class="hidden max-w-full h-auto mx-auto absolute -top-4 lg:block lg:-top-10 lg:right-0"
        src="/img/reviews-bg-desktop.png"
        alt="Proleptin Forte"
      />
      <div class="px-3 lg:container lg:mx-auto lg:relative lg:z-10">
        <div class="mb-2">
          <nuxt-icon
            name="star"
            class="inline-block text-secondary-300 text-xs mr-px"
          />
          <nuxt-icon
            name="star"
            class="inline-block text-secondary-300 text-xs mr-px"
          />
          <nuxt-icon
            name="star"
            class="inline-block text-secondary-300 text-xs mr-px"
          />
          <nuxt-icon
            name="star"
            class="inline-block text-secondary-300 text-xs mr-px"
          />
          <nuxt-icon
            name="star"
            class="inline-block text-secondary-300 text-xs mr-1"
          />
          <span class="font-bold text-secondary-300 text-sm"
            >4.8 / 5.0 &ndash;&nbsp;</span
          >
          <span class="text-secondary-300 text-sm text-center">
            {{ t("home.cta.reviews") }}</span
          >
        </div>
        <h2
          class="uppercase font-black text-2xl text-white mb-2 lg:text-[2.0rem] lg:leading-tight lg:mt-8 lg:max-w-2xl"
        >
          {{ t("home.reviews.title") }}
        </h2>
        <p class="text-white font-light mb-8 lg:text-xl lg:mb-12">
          {{ t("home.reviews.subtitle") }}
        </p>
        <div class="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-4 lg:mb-10">
          <div v-for="review in reviews" class="bg-white px-3 py-5">
            <div class="mb-1">
              <nuxt-icon
                name="star"
                class="inline-block text-secondary-400 text-xs mr-px"
              />
              <nuxt-icon
                name="star"
                class="inline-block text-secondary-400 text-xs mr-px"
              />
              <nuxt-icon
                name="star"
                class="inline-block text-secondary-400 text-xs mr-px"
              />
              <nuxt-icon
                name="star"
                class="inline-block text-secondary-400 text-xs mr-px"
              />
              <nuxt-icon
                name="star"
                class="inline-block text-secondary-400 text-xs mr-1"
              />
              <span class="font-bold text-secondary-400 text-xs">{{
                t("home.reviews.review-" + review + ".stars")
              }}</span>
            </div>
            <p class="font-light mb-1">
              {{ t("home.reviews.review-" + review + ".text") }}
            </p>
            <span class="block uppercase text-xs font-bold">
              {{ t("home.reviews.review-" + review + ".name") }}
            </span>
          </div>
          <button
            class="hidden border-primary-50 border-2 bg-primary-700 uppercase text-primary-50 text-lg font-bold transition-colors lg:flex lg:justify-center lg:items-center hover:lg:bg-tertiary-900 hover:lg:text-white"
            @click="loadMore()"
          >
            + {{ t("home.faq.more") }}
          </button>
        </div>
        <button
          class="block uppercase text-primary-50 text-sm text-center font-bold border-primary-50 border-2 px-16 py-4 mb-8 w-full transition-colors lg:hidden hover:bg-tertiary-900 hover:text-white hover:border-tertiary-900"
          @click="loadMore()"
        >
          {{ t("home.faq.more") }}
        </button>
        <p class="text-sm">
          <i18n-t
            keypath="home.reviews.info"
            tag="span"
            scope="global"
            class="text-white font-light"
          >
            <a
              href="https://fytexia.com/dnf-10-satiety/"
              target="_blank"
              class="text-primary-50 underline"
            >
              {{ t("home.reviews.info-0") }}
            </a>
          </i18n-t>
          <a
            href="https://fytexia.com/dnf-10-satiety/"
            target="_blank"
            class="inline-block ml-1 text-primary-50"
          >
            <nuxt-icon name="link" />
          </a>
        </p>
      </div>
    </section>
  </div>
</template>
