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
      border: 0px;
    "
    :value="OneService[0]"
  />
  <input
    id="value1"
    class="flex-element small form-control input"
    type="email"
    style="
      align-items: flex-start;
      background: rgb(0, 0, 0);
      color: rgb(255, 255, 255);
      border: 0px;
    "
    :value="OneService[1]"
  />
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
        ServicesName: OneService[0],
        DateIndications: DateIndications,
        ValueIndications: ValueIndications,
      });
      CreateIndications();
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
