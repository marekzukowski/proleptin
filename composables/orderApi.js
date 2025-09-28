import { useUser } from "~/store/user";
import { useOrder } from "~/store/order";

export function orderApi(typ, locale) {
  const { $pinia } = useNuxtApp();
  const user = useUser($pinia);
  const order = useOrder($pinia);
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
  order.resetErrors();

  async function submit() {
    const r = await $fetch("https://api.proleptinforte.com/api/v3/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: params,
    });
    onRespone(r);
  }
  submit().catch((error) => onError(error));

  function onRespone(respone) {
    if (respone.payment_link) {
      window.location.href = respone.payment_link;
    } else {
      navigateTo(typ);
    }
  }

  function onError(error) {
    Object.entries(error.data.errors).forEach(([key, value]) => {
      const v = value[0];
      error.data.errors[key] = parseInt(v, 10);
    });
    order.errors = error.data.errors;
    order.errorFirstStep();
  }
}
