import { useUser } from "~/store/user";
import { useOrder } from "~/store/order";

export function draftApi(typ, locale) {
  const { $pinia } = useNuxtApp();
  const user = useUser($pinia);
  const order = useOrder($pinia);
  const pattern = /\d{9}/;
  const { province_code, ...form } = order.form;
  const params = {
    order: {
      ...form,
      source_url: user.url,
      offer_code: "PT2" + order.quantity + locale.toUpperCase(),
      session_uuid: user.sessionId,
      payment_return_url: user.getBaseUrl() + typ,
    },
  };
  if (locale === "it" || locale === "ro") {
    params.order.form.province_code = province_code;
  }

  async function submit() {
    const r = await $fetch("https://api.proleptinforte.com/api/v3/drafts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: params,
    });
  }

  if (order.form.phone.match(pattern)) {
    submit();
  }
}
