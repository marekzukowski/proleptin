<script setup>
import { useI18n, useLocalePath } from "#i18n";
import { useNavigation } from '~/store/navigation'
const { t, locale, locales } = useI18n();
const localePath = useLocalePath()
const navigation = useNavigation();
</script>
<template>
  <footer :id="$t('header.nav.contact.path')" class="site-footer bg-tertiary-900 py-10">
    <div class="px-3 lg:container mx-auto">
      <div class="mb-8">
        <h4 class="text-sm font-bold text-tertiary-100 mb-2 uppercase">
          {{ t('contact.phone.title') }}
        </h4>
        <a :href="'tel:' + t('contact.phone.link')" class="text-tertiary-100 text-[1.375rem] font-bold mb-1 inline-block hover:text-primary-500"><span class="text-xs">{{ t('contact.phone.plus') }}</span> {{ t('contact.phone.number') }}</a>
        <BaseFooterCopyPhone class="mb-4" />
        <p class="text-xs text-tertiary-100 font-light mb-2">
          {{ t('contact.phone.hours') }}
        </p>
        <p class="text-xs text-tertiary-100 font-light">
          {{ t('contact.phone.price') }}
        </p>
      </div>
      <div class="mb-8">
        <h4 class="text-sm font-bold text-tertiary-100 mb-2 uppercase">
          {{ t('contact.email.title') }}
        </h4>
        <a :href="'mailto:' + t('contact.email.address') + '@proleptinforte.com'" class="text-tertiary-100 text-[1.375rem] font-bold mb-1 inline-block hover:text-primary-500">{{ t('contact.email.address') }}@proleptinforte.com</a>
        <BaseFooterCopyEmail />
      </div>
      <div>
        <h4 class="text-sm font-bold text-tertiary-100 mb-3 uppercase">
          {{ t('footer.social') }}
        </h4>
        <div class="flex mb-8">
          <a href="https://m.me/proleptinforte/" class="mr-4">
            <nuxt-icon name="messager" class="text-[2rem] text-tertiary-100 transition-colors hover:text-primary-500 " />
          </a>
          <a href="https://www.facebook.com/Proleptin-Forte-112217931487442">
            <nuxt-icon name="facebook" class="text-[2rem] text-tertiary-100 transition-colors hover:text-primary-500 " />
          </a>
        </div>
      </div>
      <div>
        <h4 class="text-sm font-bold text-tertiary-100 mb-3 uppercase">
          {{ t('footer.form.title') }}
        </h4>
        <BaseFooterForm />
      </div>
      <div class="border-b border-solid border-white opacity-25 0 my-8" />
      <div>
        <img class="inline-block mb-8 max-w-full h-auto max-h-8" src="/img/payments.png" alt="Proleptin Forte" />
        <div class="flex items-center mb-2">
          <span class="text-primary-500 text-[1.875rem] mr-2">
            <nuxt-icon name="guarantee" />
          </span>
          <span class="text-tertiary-100 text-xxs uppercase">
            {{ t('footer.icons.gurantee') }}
          </span>
        </div>
        <div class="flex items-center mb-2">
          <span class="text-primary-500 text-[1.875rem] mr-2">
            <nuxt-icon name="package" />
          </span>
          <span class="text-tertiary-100 text-xxs uppercase">
            {{ t('footer.icons.delivery') }}
          </span>
        </div>
        <div class="flex items-center mb-2">
          <span class="text-primary-500 text-[1.875rem] mr-2">
            <nuxt-icon name="truck" />
          </span>
          <span class="text-tertiary-100 text-xxs uppercase">
            {{ t('footer.icons.package') }}
          </span>
        </div>
      </div>
      <div class="border-b border-solid border-white opacity-25 0 my-8" />
      <h4 class="text-sm font-bold text-tertiary-100 mb-3 uppercase">
        {{ t('footer.info.title') }}
      </h4>
      <h5 class="text-xxs font-bold text-tertiary-100 mb-1 uppercase">
        {{ t('footer.info.sub-1') }}
      </h5>
      <p class="text-xxs font-light text-tertiary-100 mb-2">
        {{ t('footer.info.text-1') }}
      </p>
      <h5 class="text-xxs font-bold text-tertiary-100 mb-1 uppercase">
        {{ t('footer.info.sub-2') }}
      </h5>
      <p class="text-xxs font-light text-tertiary-100 mb-2">
        {{ t('footer.info.text-2') }}
      </p>
      <h5 class="text-xxs font-bold text-tertiary-100 mb-1 uppercase">
        {{ t('footer.info.sub-3') }}
      </h5>
      <p class="text-xxs font-light text-tertiary-100 mb-2">
        {{ t('footer.info.text-3') }}
      </p>
      <h5 class="text-xxs font-bold text-tertiary-100 mb-1 uppercase">
        {{ t('footer.info.sub-4') }}
      </h5>
      <p class="text-xxs font-light text-tertiary-100 mb-2">
        {{ t('footer.info.text-4') }}
      </p>
      <p class="text-xxs font-light text-tertiary-100 mb-2">
        {{ t('footer.info.text-5') }}
      </p>
      <p class="text-xxs font-light text-tertiary-100">
        {{ t('footer.info.text-6') }}
      </p>
      <div class="border-b border-solid border-white opacity-25 0 my-8" />
      <div class="flex flex-col items-start">
        <img class="h-[1.375rem] w-auto inline-block mb-4" src="/img/proleptin-forte-logo-white.svg" alt="Proleptin Forte" />
        <img class="h-8 w-auto inline-block" src="/img/footer-logos.svg" alt="Proleptin Forte" />
      </div>
      <div class="border-b border-solid border-white opacity-25 0 my-8" />
      <div class="flex justify-between items-start">
        <ul class="list-none flex flex-col items-start">
          <li v-for="item in navigation.legal" :key="item.id" class="mb-2 leading-4">
            <NuxtLink :to="localePath(item.id)">
              <div class=" text-xs text-tertiary-100 transition-colors hover:text-primary-500">
                {{ t(item.name) }}
              </div>
            </NuxtLink>
          </li>
        </ul>
        <div class="group flex flex-col items-end cursor-pointer" @click="navigation.setLangPanel(true)">
          <span class="text-xs text-tertiary-100 mb-2">{{ t("language.text") }}</span>
          <span class="text-xs font-bold underline uppercase text-tertiary-100 transition-colors group-hover:text-primary-500">{{ locales.find(({ code }) => code === locale).native }}</span>
        </div>
      </div>
      <div class="border-b border-solid border-white opacity-25 0 my-8" />
      <p class=" text-tertiary-100 text-xs text-center mb-6 ">
        {{ t("footer.dnf") }}
      </p>
      <p class=" text-tertiary-100 text-xs text-center ">
        {{ t("footer.copy") }}
      </p>
    </div>
  </footer>
</template>
