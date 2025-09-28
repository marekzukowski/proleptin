<script setup>
import { useI18n, useLocalePath } from "#i18n";
import { useNavigation } from '~/store/navigation'
const { t, locale, locales } = useI18n();
const localePath = useLocalePath()
const navigation = useNavigation();
</script>
<template>
  <footer :id="$t('header.nav.contact.path')" class="site-footer bg-tertiary-900 py-4">
    <div class="px-3 lg:container mx-auto">
      <div class="grid grid-cols-12 grid-rows-1 gap-16 mt-16 ">
        <div class="col-span-3">
          <div class="mb-12">
            <h4 class="text-sm font-bold text-tertiary-100 mb-2 uppercase">
              {{ t('contact.phone.title') }}
            </h4>
            <a :href="'tel:' + t('contact.phone.link')" class="text-tertiary-100 text-[1.375rem] font-bold mb-1 inline-block hover:text-primary-500"><span class="text-xs">{{ t('contact.phone.plus') }}</span> {{ t('contact.phone.number') }}</a>
            <BaseFooterCopyPhone class="mb-4" />
            <p class="text-sm text-tertiary-100 font-light mb-2">
              {{ t('contact.phone.hours') }}
            </p>
            <p class="text-sm text-tertiary-100 font-light">
              {{ t('contact.phone.price') }}
            </p>
          </div>
          <div class="mb-12">
            <h4 class="text-sm font-bold text-tertiary-100 mb-2 uppercase">
              {{ t('contact.email.title') }}
            </h4>
            <a :href="'mailto:' + t('contact.email.address') + '@proleptinforte.com'" class="text-tertiary-100 text-[1.375rem] font-bold mb-1 inline-block hover:text-primary-500">{{ t('contact.email.address') }}@proleptinforte.com</a>
            <BaseFooterCopyEmail />
          </div>
          <div class="mb-12">
            <h4 class="text-sm font-bold text-tertiary-100 mb-3 uppercase">
              {{ t('footer.social') }}
            </h4>
            <div class="flex">
              <a href="https://m.me/proleptinforte/" class="mr-4">
                <nuxt-icon name="messager" class="text-[2rem] text-tertiary-100 transition-colors hover:text-primary-500 " />
              </a>
              <a href="https://www.facebook.com/Proleptin-Forte-112217931487442">
                <nuxt-icon name="facebook" class="text-[2rem] text-tertiary-100 transition-colors hover:text-primary-500 " />
              </a>
            </div>
          </div>
          <img class="inline-block mt-4 max-w-full h-auto" src="/img/payments-lg.png" alt="Proleptin Forte" />
        </div>
        <div class="col-span-4">
          <h4 class="text-sm font-bold text-tertiary-100 mb-3 uppercase">
            {{ t('footer.form.title') }}
          </h4>
          <BaseFooterForm />
          <div class="flex items-center mt-24">
            <div class="mr-4">
              <span class="inline-block text-primary-500 text-[1.875rem] mr-2">
                <nuxt-icon name="guarantee" />
              </span>
              <span class="block text-tertiary-100 text-xs uppercase">
                {{ t('footer.icons.gurantee') }}
              </span>
            </div>
            <div class="mr-4">
              <span class="inline-block text-primary-500 text-[1.875rem] mr-2">
                <nuxt-icon name="package" />
              </span>
              <span class="block text-tertiary-100 text-xs uppercase">
                {{ t('footer.icons.delivery') }}
              </span>
            </div>
            <div class="mr-4">
              <span class="inline-block text-primary-500 text-[1.875rem] mr-2">
                <nuxt-icon name="truck" />
              </span>
              <span class="block text-tertiary-100 text-xs uppercase">
                {{ t('footer.icons.package') }}
              </span>
            </div>
          </div>
        </div>
        <div class="col-auto">
          <div class="w-px h-full bg-tertiary-100 opacity-10 mx-auto"></div>
        </div>
        <div class="col-span-4">
          <h4 class="text-sm font-bold text-tertiary-100 mb-3 uppercase">
            {{ t('footer.info.title') }}
          </h4>
          <h5 class="text-xs font-bold text-tertiary-100 mb-2 uppercase">
            {{ t('footer.info.sub-1') }}
          </h5>
          <p class="text-sm font-light text-tertiary-100 mb-6">
            {{ t('footer.info.text-1') }}
          </p>
          <h5 class="text-xs font-bold text-tertiary-100 mb-2 uppercase">
            {{ t('footer.info.sub-2') }}
          </h5>
          <p class="text-sm font-light text-tertiary-100 mb-6">
            {{ t('footer.info.text-2') }}
          </p>
          <h5 class="text-xs font-bold text-tertiary-100 mb-2 uppercase">
            {{ t('footer.info.sub-3') }}
          </h5>
          <p class="text-sm font-light text-tertiary-100 mb-6">
            {{ t('footer.info.text-3') }}
          </p>
          <h5 class="text-xs font-bold text-tertiary-100 mb-2 uppercase">
            {{ t('footer.info.sub-4') }}
          </h5>
          <p class="text-sm font-light text-tertiary-100 mb-2">
            {{ t('footer.info.text-4') }}
          </p>
          <p class="text-sm font-light text-tertiary-100 mb-2">
            {{ t('footer.info.text-5') }}
          </p>
          <p class="text-sm font-light text-tertiary-100 mb-6">
            {{ t('footer.info.text-6') }}
          </p>
        </div>
      </div>
      <div class="flex items-center mt-16">
        <img class="h-[1.375rem] w-auto inline-block" src="/img/proleptin-forte-logo-white.svg" alt="Proleptin Forte" />
        <span class="w-px bg-tertiary-700 rounded-full inline-block align-middle lg:h-5 lg:mx-8"></span>
        <img class="h-8 w-auto inline-block mr-auto" src="/img/footer-logos.svg" alt="Proleptin Forte" />
        <div class="group flex flex-row cursor-pointer items-center" @click="navigation.setLangPanel(true)">
          <nuxt-icon name="globe" class="text-xs mr-2 text-tertiary-100" />
          <span class="text-xs text-tertiary-100 uppercase mr-2">{{ t("language.text") }}</span>
          <span class="text-xs font-bold underline uppercase text-tertiary-100 transition-colors group-hover:text-primary-500">{{ locales.find(({ code }) => code === locale).native }}</span>
        </div>
      </div>
      <div class="flex justify-start mt-16">
        <ul class="list-none flex">
          <li v-for="item in navigation.legal" :key="item.id" class="mr-8 leading-4">
            <NuxtLink :to="localePath(item.id)">
              <div class=" text-xs text-tertiary-100 transition-colors hover:text-primary-500">
                {{ t(item.name) }}
              </div>
            </NuxtLink>
          </li>
        </ul>
        <p class=" text-tertiary-100 text-xs mr-auto ">
          {{ t("footer.dnf") }}
        </p>
        <p class=" text-tertiary-100 text-xs text-right">
          {{ t("footer.copy") }}
        </p>
      </div>
    </div>
  </footer>
</template>
