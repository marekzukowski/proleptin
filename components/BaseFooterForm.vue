<script setup>
import { useI18n } from "#i18n";
import { ref, reactive } from 'vue';
const { t, locale } = useI18n();
const params = reactive({
  name: "",
  surname: "",
  email: "",
  message: "",
});
const honey = ref('');
let respone = ref(0);
function contactForm() {
  respone.value = contactApi(params, honey.value, locale.value);
}
</script>
<template>
  <form @submit.prevent="contactForm">
    <div class="hidden bg-tertiary-800 border border-tertiary-700 rounded-md px-3 py-2 mb-3 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500">
      <label for="honey" class="block text-xs font-light text-tertiary-200">{{ t('footer.form.name') }}</label>
      <input type="text" name="honey" v-model="honey" id="honey" class="block w-full border-0 p-0 text-tertiary-100 placeholder-gray-500 bg-tertiary-800 focus:ring-0 sm:text-sm" />
    </div>
    <div class="bg-tertiary-800 border border-tertiary-700 rounded-md px-3 py-2 mb-3 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500">
      <label for="name" class="block text-xs font-light text-tertiary-200">{{ t('footer.form.name') }}</label>
      <input type="text" name="name" v-model="params.name" id="name" class="block w-full border-0 p-0 text-tertiary-100 placeholder-gray-500 bg-tertiary-800 focus:ring-0 sm:text-sm" required />
    </div>
    <div class="bg-tertiary-800 border border-tertiary-700 rounded-md px-3 py-2 mb-3 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500">
      <label for="surname" class="block text-xs font-light text-tertiary-200">{{ t('footer.form.surname') }}</label>
      <input type="text" name="surname" id="surname" v-model="params.surname" class="block w-full border-0 p-0 text-tertiary-100 placeholder-gray-500 bg-tertiary-800 focus:ring-0 sm:text-sm" required />
    </div>
    <div class="bg-tertiary-800 border border-tertiary-700 rounded-md px-3 py-2 mb-3 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500">
      <label for="email" class="block text-xs font-light text-tertiary-200">{{ t('footer.form.email') }}</label>
      <input type="email" name="email" id="email" v-model="params.email" class="block w-full border-0 p-0 text-tertiary-100 placeholder-gray-500 bg-tertiary-800 focus:ring-0 sm:text-sm" required />
    </div>
    <div class="bg-tertiary-800 border border-tertiary-700 rounded-md px-3 py-2 mb-4 focus-within:border-primary-500 focus-within:ring-2 focus-within:ring-primary-500">
      <label for="message" class="block text-xs font-light text-tertiary-200">{{ t('footer.form.message') }}</label>
      <textarea row="3" name="message" id="message" v-model="params.message" class="block w-full border-0 p-0 text-tertiary-100 placeholder-gray-500 bg-tertiary-800 focus:ring-0 sm:text-sm" required />
    </div>
    <button type="submit" class="block w-full border-2 border-teriary-100 px-3 py-3 text-tertiary-100 font-bold text-center uppercase transition-colors hover:border-primary-500 hover:bg-primary-500 disabled:border-tertiary-700  disabled:text-tertiary-700 disabled:bg-tertiary-900 lg:w-auto lg:px-16" :disabled="respone == 201 ? true : false">{{ t('footer.form.submit') }}</button>
    <p v-if="respone !== 0" class="text-sm font-light mt-2" :class="respone == 201 ? 'text-primary-500' : 'text-red-500'">
      {{ respone == 201 ? t('footer.form.success') : t('footer.form.error') }}
    </p>
  </form>
</template>
