<template>
  <input
    id="date1"
    class="flex-element small form-control input"
    type="email"
    v-model="DateIndications"
    placeholder="ГГГГ-ММ-ДД"
  />
  <input
    id="name1"
    class="flex-element small left form-control input"
    style="
      align-items: flex-start;
      background: rgb(255, 255, 255);
      color: rgb(0, 0, 0);
    "
    v-model="ServicesName"
  />
  <div
    id="value1"
    class="flex-element small form-control input"
    type="email"
    style="background: rgb(0, 0, 0); border: 0px"
  ></div>
  <input
    id="value1"
    class="flex-element small form-control input"
    type="email"
    v-model="ValueIndications"
  />
  <div
    @click="
      UpdateIndicationsValue({
        ServicesName: ServicesName,
        DateIndications: DateIndications,
        ValueIndications: ValueIndications,
      });
      CreateIndications();
      ServicesName = '';
    "
    style="position: absolute; left: 76%; font-size: 140%"
  >
    &#9989;
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  props: ["OneService"],
  methods: {
    ...mapMutations(["UpdateIndicationsValue"]),
    ...mapActions(["CreateIndications"]),
  },
};
</script>

<style scoped></style>
