<template>
  <input
    id="date1"
    class="flex-element small form-control input"
    type="email"
    v-model="DateIndications"
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
    style="
      align-items: flex-start;
      background: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
    "
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
  data() {
    return {
      DateIndications: new Date().toISOString().split("T")[0],
    };
  },
};
</script>

<style scoped></style>
