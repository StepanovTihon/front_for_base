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
};
</script>

<style scoped></style>
