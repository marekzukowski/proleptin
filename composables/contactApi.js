import { useOrder } from "~/store/order";

export function contactApi(form, honey, locale) {
  const { $pinia } = useNuxtApp();
  const order = useOrder($pinia);
  const params = {
    feedback: {
      ...form,
      offer_code: "PT2" + order.quantity + locale.toUpperCase(),
    },
  };

  async function submit() {
    const r = await $fetch("https://api.proleptinforte.com/api/v3/feedbacks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: params,
    });
  }

  if (honey === "") {
    submit();
    return 201;
  } else {
    return 422;
  }
}
