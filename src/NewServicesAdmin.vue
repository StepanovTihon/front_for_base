<template>
  <input
    id="date1"
    class="flex-element small form-control input"
    type="email"
    v-model="DateServices"
    placeholder="ГГГГ-ММ-ДД"
    style="
      align-items: flex-start;
      background: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
    "
  />
  <input
    id="name1"
    class="flex-element small left form-control input"
    style="
      align-items: flex-start;
      background: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
      border: 0px;
    "
    :value="OneService[0]"
  />

  <input
    id="value1"
    class="flex-element small form-control input"
    type="email"
    v-model="PaymentAmount"
    style="
      align-items: flex-start;
      background: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
    "
  />

  <div
    @click="
      UpdateServiceValue({
        ServicesName: OneService[0],
        DateServices: DateServices,
        PaymentAmount: PaymentAmount,
      });
      CreateService();
    "
    style="position: relative; font-size: 140%"
  >
    &#9989;
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  props: ["OneService"],
  methods: {
    ...mapMutations(["UpdateServiceValue"]),
    ...mapActions(["CreateService"]),
  },
  computed: {
    DateServices: function () {
      return new Date().toISOString().split("T")[0];
    },
  },
};
</script>

<style scoped></style>
