<script setup>
import {
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { useI18n, useSwitchLocalePath } from '#i18n';
import { useNavigation } from '~/store/navigation';
import { useLocalStorage } from '@vueuse/core'
const navigation = useNavigation();
const { t, locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
function changeLang() {
  navigation.setBothPanels(false);
  useLocalStorage('langRedirect').value = false;
}
</script>

<template>
  <TransitionRoot unmount appear as="template" :show="navigation.langPanelIsOpen">
    <Dialog static as="div" class="relative z-20" @close="navigation.setLangPanel(false)">
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
                    <div class="border-b border-solid border-tertiary-300 mb-4" />
                    <div class="flex items-center justify-between mb-4">
                      <span class="text-sm uppercase font-bold">
                        {{ t("language.choose") }}
                      </span>
                      <button class="text-xs text-tertiary-600 flex items-center focus:outline-none focus-visible:ring-0 focus-visible:ring-offset-0" type="button" @click="navigation.setLangPanel(false)">
                        <svg class="w-3 h-3 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                          <path d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z" />
                        </svg>
                        {{ t("language.back") }}
                      </button>
                    </div>
                    <ul class="list-none">
                      <li v-for="item in locales" :key="item.code">
                        <NuxtLink :to="switchLocalePath(item.code)" @click="changeLang()">
                          <div class="text-sm block px-2 py-3 mb-px cursor-pointer" :class="item.code == locale ? 'font-bold text-white bg-primary-500' : 'bg-tertiary-100 hover:bg-primary-300'">
                            <span class="mr-4 uppercase">
                              {{ item.code }}
                            </span>
                            <span>
                              {{ item.eng }}&nbsp;&nbsp;|&nbsp;&nbsp;{{ item.native }}
                            </span>
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
