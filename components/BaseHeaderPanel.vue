<script setup>
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { useI18n, useLocalePath } from "#i18n";
import { useNavigation } from '~/store/navigation'
const navigation = useNavigation();
const { t, locale, locales } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <TransitionRoot as="template" :show="navigation.navPanelIsOpen">
    <Dialog static as="div" class="relative z-10">
      <TransitionChild enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/30 top-16 lg:top-20" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden top-16 lg:top-20">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full top-16 lg:top-20">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div class="flex-1 px-3">
                    <div class="border-b border-solid border-tertiary-300 mb-3" />
                    <nav>
                      <ul class="list-none flex flex-col items-end">
                        <li v-for="item in navigation.nav" :key="item.name" class="py-3">
                          <a :href="'#' + item.path" class="font-light text-base hover:text-primary-500">
                            {{ t(item.name) }}
                          </a>
                        </li>
                      </ul>
                    </nav>
                    <div class="border-b border-solid border-tertiary-300 mt-3 mb-4" />
                    <div class="text-right">
                      <a :href="'mailto:' + t('contact.email.address') + '@proleptinforte.com'" class="font-bold text-lg inline-block hover:text-primary-500">{{ t('contact.email.address') }}@proleptinforte.com</a>
                      <br />
                      <a :href="'tel:' + t('contact.phone.link')" class="font-bold text-lg mt-1 inline-block hover:text-primary-500"><span class="text-xs">{{ t('contact.phone.plus') }}</span> {{ t('contact.phone.number') }}</a>
                      <p class="text-xxs font-light mt-1">
                        {{ t('contact.phone.hours') }}
                      </p>
                      <p class="text-xxs font-light mt-1">
                        {{ t('contact.phone.price') }}
                      </p>
                    </div>

                    <div class="text-right mt-4">
                      <a href="https://m.me/proleptinforte/" class="mr-4 inline-block">
                        <nuxt-icon name="messager" class="text-[2rem] text-tertiary-900 transition-colors hover:text-primary-500 " />
                      </a>
                      <a href="https://www.facebook.com/Proleptin-Forte-112217931487442" class="inline-block">
                        <nuxt-icon name="facebook" class="text-[2rem] text-tertiary-900 transition-colors hover:text-primary-500 " />
                      </a>
                    </div>
                    <div class="border-b border-solid border-tertiary-300 my-4" />
                    <div class="group flex items-center justify-end cursor-pointer" @click="navigation.setLangPanel(true)">
                      <nuxt-icon name="globe" class="text-xs mr-2 text-tertiary-900" />
                      <span class="text-xs mr-1">{{ t("language.text") }}</span>
                      <span class="text-xs font-bold underline uppercase group-hover:text-primary-500">{{ locales.find(({ code }) => code === locale).native }}</span>
                    </div>
                    <div class="border-b border-solid border-tertiary-300 mt-4 mb-4" />
                    <ul class="list-none flex flex-col items-end">
                      <li v-for="item in navigation.legal" :key="item.id" class="mb-3 leading-4">
                        <NuxtLink :to="localePath(item.id)">
                          <div class="font-light text-xs hover:text-primary-500">
                            {{ t(item.name) }}
                          </div>
                        </NuxtLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
