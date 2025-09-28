import { defineStore } from "pinia";
export const useOrder = defineStore("order", {
  state: () => ({
    form: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      address: "",
      province_code: "",
      zip: "",
      city: "",
      country: "",
      payment_type: "cod",
      accept: false
    },
    quantity: 1,
    selectedStep: 0,
    isStepDone: false,
    isFormDone: false,
    errors: {}
  }),
  getters: {

  },
  actions: {
    checkStep() {
      this.isStepDone = Object.values(this.form).slice(0, 4).every(value => (value !== null && value !== ""));
    },
    checkForm() {
      this.isFormDone = Object.values(this.form).every(value => (value !== null && value !== ""));
    },
    changeStep(index: Number) {
      this.selectedStep = index;
    },
    errorFirstStep() {
      if (this.errors.firstname || this.errors.lastname || this.errors.email || this.errors.phone) {
        this.selectedStep = 0
      }
    },
    increaseQuantity() {
      this.quantity = this.quantity === 5 ? 5 : this.quantity + 1;
    },
    decreaseQuantity() {
      this.quantity = this.quantity === 1 ? 1 : this.quantity - 1;
    },
    resetErrors() {
      this.errors = {}
    }
  }
});
