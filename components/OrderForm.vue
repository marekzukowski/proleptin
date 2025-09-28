<script setup>
import { onMounted } from 'vue'
import { TabPanels, TabPanel } from '@headlessui/vue';
import { useOrder } from '~/store/order';
import { useI18n, useLocalePath } from "#i18n";
const localePath = useLocalePath()
const order = useOrder();
const { t, locale } = useI18n();
watch(order.form, () => {
  order.checkStep();
  order.checkForm();
  draftApi(localePath('thank-you'), locale.value);
});
onMounted(() => {
  const watchStep = order.$subscribe((mutation, state) => {
    if (state.isStepDone == true) {
      fbq('track', 'AddToCart');
      watchStep();
    }
  })
  const watchForm = order.$subscribe((mutation, state) => {
    if (state.isFormDone == true) {
      fbq('track', 'Lead');
      watchForm();
    }
  })
})
</script>

<template>
  <div class="bg-tertiary-50 py-6 lg:bg-transparent lg:py-20">
    <div class="px-3 mx-auto lg:max-w-2xl">
      <form @submit.prevent="orderApi(localePath('thank-you'), locale)">
        <TabPanels>
          <TabPanel>
            <div class="flex items-start justify-between mb-4">
              <div>
                <h2 class="uppercase font-bold">
                  {{ t('order.steps.contact') }}
                </h2>
                <p class="font-light text-xs">
                  <nuxt-icon name="lock" class="text-primary-500 mr-1 inline-block" />
                  <span class="text-primary-500 font-bold">SSL</span>
                  {{ t('order.steps.ssl') }}
                </p>
              </div>
              <span class="text-xxs font-light">
                {{ t('order.steps.legend') }}
              </span>
            </div>
            <div>
              <input type="text" name="firstname" v-model="order.form.firstname" :placeholder="t('order.form.firstname') + ' *'" class="form-input" :class="order.errors.firstname ? 'mb-1 border-red-500 text-red-500' : 'mb-3'" required>
              <span v-if="order.errors.firstname" class="text-red-500 text-xs font-light mb-2 flex items-center">
                <nuxt-icon name="error" class="mr-1 inline-block" />
                <span>{{ order.errors.firstname == 101 ? t('order.form.errors.required') : t('order.form.errors.invalid') }}</span>
              </span>
              <input type="text" name="lastname" v-model="order.form.lastname" :placeholder="t('order.form.lastname') + ' *'" class="form-input" :class="order.errors.lastname ? 'mb-1 border-red-500 text-red-500' : 'mb-3'" required>
              <span v-if="order.errors.lastname" class="text-red-500 text-xs font-light mb-2 flex items-center">
                <nuxt-icon name="error" class="mr-1 inline-block" />
                <span>{{ order.errors.lastname == 101 ? t('order.form.errors.required') : t('order.form.errors.invalid') }}</span>
              </span>
              <input type="email" name="email" v-model="order.form.email" :placeholder="t('order.form.email') + ' *'" class="form-input" :class="order.errors.email ? 'mb-1 border-red-500 text-red-500' : 'mb-3'" required>
              <span v-if="order.errors.email" class="text-red-500 text-xs font-light mb-2 flex items-center">
                <nuxt-icon name="error" class="mr-1 inline-block" />
                <span>{{ order.errors.email == 101 ? t('order.form.errors.required') : t('order.form.errors.invalid') }}</span>
              </span>
              <input type="text" name="phone" v-model="order.form.phone" :placeholder="t('order.form.phone') + ' *'" class="form-input" :class="order.errors.phone ? 'mb-1 border-red-500 text-red-500' : 'mb-3'" required>
              <span v-if="order.errors.phone" class="text-red-500 text-xs font-light mb-2 flex items-center">
                <nuxt-icon name="error" class="mr-1 inline-block" />
                <span>{{ order.errors.phone == 101 ? t('order.form.errors.required') : t('order.form.errors.invalid') }}</span>
              </span>
              <p class="text-sm font-light">
                {{ t('order.form.info') }}
              </p>
            </div>
            <div class="h-px bg-tertiary-300 w-full my-8" />
            <p class="text-sm font-light text-center mb-3">
              {{ t('order.form.next') }}
            </p>
            <button class="block w-full bg-tertiary-900 px-3 py-4 text-tertiary-100 font-bold text-center uppercase transition-colors hover:border-primary-500 hover:bg-primary-500 disabled:bg-tertiary-200 disabled:cursor-not-allowed" :disabled="order.isStepDone == false" @click="order.changeStep(1)">
              {{ t('order.steps.contact') }}
              <nuxt-icon name="angle" class="text-tertiary-100 inline-block ml-1 align-[-.125em]" />
            </button>
          </TabPanel>
          <TabPanel>
            <div class="flex items-start justify-between mb-4">
              <div>
                <h2 class="uppercase font-bold">
                  {{ t('order.steps.address') }}
                </h2>
                <p class="font-light text-xs">
                  <nuxt-icon name="lock" class="text-primary-500 mr-1 inline-block" />
                  <span class="text-primary-500 font-bold">SSL</span>
                  {{ t('order.steps.ssl') }}
                </p>
              </div>
              <span class="text-xxs font-light">
                {{ t('order.steps.legend') }}
              </span>
            </div>
            <div class="mb-8">
              <input type="text" name="address" v-model="order.form.address" :placeholder="t('order.form.address') + ' *'" class="form-input" :class="order.errors.address ? 'mb-1 border-red-500 text-red-500' : 'mb-3'">
              <span v-if="order.errors.address" class="text-red-500 text-xs font-light mb-2 flex items-center">
                <nuxt-icon name="error" class="mr-1 inline-block" />
                <span>{{ order.errors.address == 101 ? t('order.form.errors.required') : t('order.form.errors.invalid') }}</span>
              </span>
              <div v-if="locale === 'it' || locale === 'ro'">
                <OrderFormSelectProvince :class="order.errors.province_code ? 'mb-1 border-red-500 text-red-500' : 'mb-3'" data="hej" required />
                <span v-if="order.errors.province_code" class="text-red-500 text-xs font-light mb-2 flex items-center">
                  <nuxt-icon name="error" class="mr-1 inline-block" />
                  <span>{{ order.errors.province_code == 101 ? t('order.form.errors.required') : t('order.form.errors.invalid') }}</span>
                </span>
              </div>
              <input type="text" name="zip" v-model="order.form.zip" :placeholder="t('order.form.zip') + ' *'" class="form-input" :class="order.errors.zip ? 'mb-1 border-red-500 text-red-500' : 'mb-3'" required>
              <span v-if="order.errors.zip" class="text-red-500 text-xs font-light mb-2 flex items-center">
                <nuxt-icon name="error" class="mr-1 inline-block" />
                <span>{{ order.errors.zip == 101 ? t('order.form.errors.required') : t('order.form.errors.invalid') }}</span>
              </span>
              <input type="text" name="city" v-model="order.form.city" :placeholder="t('order.form.city') + ' *'" class="form-input" :class="order.errors.city ? 'mb-1 border-red-500 text-red-500' : 'mb-3'" required>
              <span v-if="order.errors.city" class="text-red-500 text-xs font-light mb-2 flex items-center">
                <nuxt-icon name="error" class="mr-1 inline-block" />
                <span>{{ order.errors.city == 101 ? t('order.form.errors.required') : t('order.form.errors.invalid') }}</span>
              </span>
              <OrderFormSelect :class="order.errors.country ? 'mb-1 border-red-500 text-red-500' : 'mb-6'" required />
              <span v-if="order.errors.country" class="text-red-500 text-xs font-light block mb-6">
                <nuxt-icon name="error" class="mr-1 inline-block" />
                <span>{{ order.errors.country == 101 ? t('order.form.errors.required') : t('order.form.errors.invalid') }}</span>
              </span>
              <div class="mb-3 flex items-center">
                <input type="radio" name="payment_type" v-model="order.form.payment_type" value="cod" checked="checked" id="payment-type-cod" class="form-radio peer checked:bg-primary-500 checked:hover:bg-primary-500">
                <label for="payment-type-cod" class="text-xs peer-checked:font-bold">
                  {{ $t('order.form.cod') }}
                </label>
              </div>
              <div class="mb-6 flex items-center">
                <input type="radio" name="payment_type" v-model="order.form.payment_type" value="online" id="payment-type-online" class="form-radio peer checked:bg-primary-500 checked:hover:bg-primary-500">
                <label for="payment-type-online" class="text-xs peer-checked:font-bold">
                  {{ $t('order.form.online') }}
                </label>
              </div>
              <div class="mb-6 flex items-start">
                <input type="checkbox" name="accept" v-model="order.form.accept" id="form-accept" class="form-checkbox checked:bg-primary-500 checked:hover:bg-primary-500" required>
                <div>
                  <i18n-t keypath="order.form.legal.text" tag="label" scope="global" for="form-accept" class="text-sm">
                    <NuxtLink :to="localePath('regulations')">
                      <span class="underline">
                        {{ $t('order.form.legal.terms') }}
                      </span>
                    </NuxtLink>
                    <NuxtLink :to="localePath('privacy-policy')">
                      <span class="underline">
                        {{ $t('order.form.legal.privacy') }}
                      </span>
                    </NuxtLink>
                  </i18n-t>
                  <span class="block text-xxs mt-1">
                    <i18n-t keypath="order.form.rodo.text" tag="label" scope="global" for="form-accept">
                      <NuxtLink :to="localePath('privacy-policy')">
                        <span class="underline">
                          {{ $t('order.form.rodo.privacy') }}
                        </span>
                      </NuxtLink>
                    </i18n-t>
                  </span>
                </div>
              </div>
              <button type="submit" class="block w-full bg-tertiary-900 px-3 py-4 text-tertiary-100 font-bold text-center uppercase transition-colors hover:border-primary-500 hover:bg-primary-500 disabled:bg-tertiary-200 disabled:cursor-not-allowed">
                {{ t('order.form.order') }}
                <nuxt-icon name="angle" class="text-tertiary-100 inline-block ml-1 align-[-.125em]" />
              </button>
            </div>
            <div class="flex items-center mb-2">
              <nuxt-icon name="delivery-small" class="text-primary-500 text-sm mr-2" />
              <span class="text-xs">
                {{ t('footer.icons.delivery') }}
              </span>
            </div>
            <div class="flex items-center mb-2">
              <nuxt-icon name="truck-small" class="text-primary-500 text-sm mr-2" />
              <span class="text-xs">
                {{ t('footer.icons.package') }}
              </span>
            </div>
            <div class="flex items-center mb-2">
              <nuxt-icon name="gurantee-small" class="text-primary-500 text-sm mr-2" />
              <span class="text-xs">
                {{ t('footer.icons.gurantee') }}
              </span>
            </div>
          </TabPanel>
        </TabPanels>
      </form>
    </div>
  </div>

</template>
