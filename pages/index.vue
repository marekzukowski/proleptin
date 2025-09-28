<template>
  <div>
    <main class="site-main">
      <HomeHero />
      <HomeIntro />
      <ClientOnly>
        <HomeDnf />
      </ClientOnly>
      <HomeCta
        class="lg:mb-24"
        image="/prolepitn/img/cta-img-1.png"
        version="1"
      />
      <HomeCharts />
      <div
        style="
          background: linear-gradient(to bottom, #f2f3f4 0 50%, #fff 50% 100%);
        "
      >
        <HomeCta image="/prolepitn/img/cta-img-2.png" version="2" />
      </div>
      <HomeBenefits />
      <HomeCta image="/prolepitn/img/cta-img-3.png" version="3" />
      <HomeCapsule />
      <HomeGuarantee />
      <HomeReviews />
      <HomeFaq />
      <div
        style="
          background: linear-gradient(
            to bottom,
            #064f46 0 50%,
            #1d1d1f 50% 100%
          );
        "
      >
        <HomeCta
          image="/prolepitn/img/cta-img-4.png"
          version="1"
          class="!mt-0"
        />
      </div>
      <div class="lg:bg-tertiary-900 lg:h-16" />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useNavigatorLanguage } from "@vueuse/core";
import { useI18n, useSwitchLocalePath } from "#i18n";
import { useLocalStorage } from "@vueuse/core";
const { t, locale } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const { isSupported, language } = useNavigatorLanguage();
if (
  isSupported &&
  useLocalStorage("langRedirect").value === "true" &&
  locale.value !== language.value
) {
  navigateTo(switchLocalePath(language.value));
}
definePageMeta({
  layout: "default",
});
useHead({
  title: t("global.title"),
  meta: [
    {
      property: "og:title",
      content: t("global.title"),
    },
    {
      property: "og:description",
      content: t("global.description"),
    },
  ],
});
onMounted(() => {
  fbq("track", "ViewContent");
});
</script>
