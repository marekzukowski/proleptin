<script setup>
import { useOrder } from '~/store/order';
import { useI18n } from "#i18n";
const order = useOrder();
const { t, locale } = useI18n()
order.form.country = locale.value.toUpperCase();
</script>
<template>
  <select name="country" v-if="locale === 'pl'" v-model="order.form.country" class="form-select">
    <option value="AT">Austria</option>
    <option value="BE">Belgia</option>
    <option value="BG">Bułgaria</option>
    <option value="HR">Chorwacja</option>
    <option value="CY">Cypr</option>
    <option value="CZ">Czechy</option>
    <option value="DK">Dania</option>
    <option value="EE">Estonia</option>
    <option value="FI">Finlandia</option>
    <option value="FR">Francja</option>
    <option value="GR">Grecja</option>
    <option value="ES">Hiszpania</option>
    <option value="NL">Holandia</option>
    <option value="IE">Irlandia</option>
    <option value="IS">Islandia</option>
    <option value="LT">Litwa</option>
    <option value="LU">Luksemburg</option>
    <option value="MT">Malta</option>
    <option value="DE">Niemcy</option>
    <option value="NO">Norwegia</option>
    <option selected="selected" value="PL">Polska</option>
    <option value="PT">Portugalia</option>
    <option value="RO">Rumunia</option>
    <option value="CH">Szwajcaria</option>
    <option value="SE">Szwecja</option>
    <option value="SK">Słowacja</option>
    <option value="SI">Słowenia</option>
    <option value="HU">Węgry</option>
    <option value="GB">Wielka Brytania</option>
    <option value="IT">Włochy</option>
    <option value="LV">Łotwa</option>
  </select>
  <select name="country" v-else v-model="order.form.country" class="form-select" disabled>
    <option selected="selected" :value="locale.toUpperCase()">{{ t("global.country") }}</option>
  </select>
</template>
