<script setup>
import { useI18n } from "#i18n";
import { useMediaQuery } from "@vueuse/core";
const { t } = useI18n();
const isLargeScreen = useMediaQuery("(min-width: 1024px)");
const bg = "background-image: url('/prolepitn/img/section-bg.jpg')";
</script>

<template>
  <div>
    <section :id="$t('header.nav.dnf.path')">
      <img
        class="block mx-auto max-w-full h-auto md:hidden"
        src="/img/dnf-img-mobile.png"
        alt="Proleptin Forte"
      />
      <div
        class="bg-primary-700 py-10 lg:py-16 lg:bg-cover lg:bg-no-repeat lg:bg-center"
        :style="isLargeScreen ? bg : ''"
      >
        <div class="px-3 lg:container mx-auto">
          <div class="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div class="hidden lg:block">
              <img
                class="block mx-auto max-w-full h-auto"
                src="/img/dnf-img-desktop.png"
                alt="Proleptin Forte"
              />
            </div>
            <div>
              <span
                class="inline-block text-sm font-bold text-secondary-300 mb-2 lg:text-base lg:mb-6"
                >{{ t("home.dnf.section-1.subtitle") }}</span
              >
              <h2
                class="text-white uppercase font-black text-2xl mb-4 lg:text-[2rem]"
              >
                {{ t("home.dnf.section-1.title") }}
              </h2>
              <i18n-t
                keypath="home.dnf.section-1.paragraph-1"
                tag="p"
                scope="global"
                class="text-white font-light text-lg mb-8 lg:text-xl lg:mb-10"
              >
                <strong class="font-bold">{{
                  t("home.dnf.section-1.paragraph-1-0")
                }}</strong>
              </i18n-t>
              <p class="text-white text-lg font-bold mb-8 lg:text-xl lg:mb-10">
                {{ t("home.dnf.section-1.paragraph-2") }}
              </p>
              <a
                href="https://fytexia.com/dnf-10-satiety/"
                target="_blank"
                class="inline-flex justify-center items-center border-2 border-primary-50 bg-transparent px-8 py-4 rounded-full group transition-colors lg:border-none lg:p-0 lg:rounded-none hover:border-secondary-500"
              >
                <nuxt-icon
                  name="download"
                  class="mr-2 text-xl text-primary-50 transition-colors lg:border-2 lg:border-primary-50 lg:rounded-full lg:p-4 lg:mr-6 group-hover:text-secondary-500 lg:group-hover:border-secondary-500"
                />
                <span
                  class="font-bold text-primary-50 lg:underline lg:underline-offset-8 decoration-2 transition-colors group-hover:text-secondary-500"
                  >{{ t("home.dnf.section-1.button") }}</span
                >
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="py-10 lg:py-24">
        <div class="px-3 lg:container mx-auto">
          <div
            class="flex flex-col items-start mb-8 lg:flex-row lg:items-center lg:justify-between"
          >
            <img
              class="inline-block max-w-full h-auto max-h-8 mb-4 lg:order-2 lg:max-h-12 lg:flex-shrink-0 lg:mb-0 lg:w-auto lg:h-9"
              src="/img/dnf-logos.svg"
              alt="Proleptin Forte"
            />
            <i18n-t
              keypath="home.dnf.section-2.title"
              tag="h2"
              scope="global"
              class="uppercase font-black text-2xl lg:text-[2rem] lg:order-1 lg:max-w-xl"
            >
              <span class="text-secondary-500">{{
                t("home.dnf.section-2.title-0")
              }}</span>
            </i18n-t>
          </div>
          <div class="grid grid-cols-1 gap-1 auto-rows-fr lg:grid-cols-3">
            <div
              class="flex items-start bg-primary-100 px-2 py-4 lg:px-4 lg:py-10 lg:flex-col"
            >
              <img
                class="block mr-3 max-w-full h-auto flex-shrink-0 lg:mr-0 lg:mb-4"
                src="/img/dnf-icon-1.png"
                alt="Proleptin Forte"
              />
              <div>
                <p class="text-sm mb-2 lg:text-lg lg:font-light">
                  {{ t("home.dnf.section-2.icon-1.title") }}
                  <span class="font-bold">{{
                    t("home.dnf.section-2.icon-1.ing")
                  }}</span>
                </p>
                <ul>
                  <li class="flex items-start justify-start mb-2">
                    <nuxt-icon
                      name="check"
                      class="text-primary-500 text-sm inline-block mr-1 mt-0.5 flex-shrink-0 lg:mt-1 lg:mr-2"
                    />
                    <span class="text-sm font-light lg:text-lg">
                      {{ t("home.dnf.section-2.icon-1.check-1") }}
                    </span>
                  </li>
                  <li class="flex items-start justify-start">
                    <nuxt-icon
                      name="check"
                      class="text-primary-500 text-sm inline-block mr-1 mt-0.5 flex-shrink-0 lg:mt-1 lg:mr-2"
                    />
                    <span class="text-sm font-light lg:text-lg">
                      {{ t("home.dnf.section-2.icon-1.check-2") }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="flex items-start bg-primary-100 px-2 py-4 lg:px-4 lg:py-10 lg:flex-col"
            >
              <img
                class="block mr-3 max-w-full h-auto flex-shrink-0 lg:mr-0 lg:mb-4"
                src="/img/dnf-icon-2.png"
                alt="Proleptin Forte"
              />
              <div>
                <p class="text-sm mb-2 lg:text-lg lg:font-light">
                  {{ t("home.dnf.section-2.icon-2.title") }}
                  <span class="font-bold">{{
                    t("home.dnf.section-2.icon-2.ing")
                  }}</span>
                </p>
                <ul>
                  <li class="flex items-start justify-start mb-2">
                    <nuxt-icon
                      name="check"
                      class="text-primary-500 text-sm inline-block mr-1 mt-0.5 flex-shrink-0 lg:mt-1 lg:mr-2"
                    />
                    <span class="text-sm font-light lg:text-lg">
                      {{ t("home.dnf.section-2.icon-2.check-1") }}
                    </span>
                  </li>
                  <li class="flex items-start justify-start">
                    <nuxt-icon
                      name="check"
                      class="text-primary-500 text-sm inline-block mr-1 mt-0.5 flex-shrink-0 lg:mt-1 lg:mr-2"
                    />
                    <span class="text-sm font-light lg:text-lg">
                      {{ t("home.dnf.section-2.icon-2.check-2") }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="flex items-start bg-primary-100 px-2 py-4 lg:px-4 lg:py-10 lg:flex-col"
            >
              <img
                class="block mr-3 max-w-full h-auto flex-shrink-0 lg:mr-0 lg:mb-4"
                src="/img/dnf-icon-3.png"
                alt="Proleptin Forte"
              />
              <div>
                <i18n-t
                  keypath="home.dnf.section-2.icon-3.title"
                  tag="p"
                  scope="global"
                  class="text-sm mb-2 lg:text-lg lg:font-light"
                >
                  <strong class="font-bold">{{
                    t("home.dnf.section-2.icon-3.title-0")
                  }}</strong>
                </i18n-t>
                <ul>
                  <li class="flex items-start justify-start mb-2">
                    <nuxt-icon
                      name="check"
                      class="text-primary-500 text-sm inline-block mr-1 mt-0.5 flex-shrink-0 lg:mt-1 lg:mr-2"
                    />
                    <span class="text-sm font-light lg:text-lg">
                      {{ t("home.dnf.section-2.icon-3.check-1") }}
                    </span>
                  </li>
                  <li class="flex items-start justify-start">
                    <nuxt-icon
                      name="check"
                      class="text-primary-500 text-sm inline-block mr-1 mt-0.5 flex-shrink-0 lg:mt-1 lg:mr-2"
                    />
                    <span class="text-sm font-light lg:text-lg">
                      {{ t("home.dnf.section-2.icon-3.check-2") }}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
