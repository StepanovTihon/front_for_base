<template>
  <div :class="mobile === true ? 'container navbar ' : 'navbar'">
    <div
      style="color: #77a9f9"
      class="navtext"
      @click="
        ChangeActivePage('ServiceInfo');
        UpdateServiceInfo();
      "
    >
      {{ mobile ? "Личный кабинет" : "Кабинет" }}
    </div>
    <div
      style="color: #77a9f9"
      class="navtext"
      @click="
        ChangeActivePage('DrawIndications');
        UpdateIndicationsInfo();
      "
    >
      {{ "Показания" }}
    </div>
    <img
      src="./low.png"
      style="height: 50px; background: rgb(0, 0, 0, 0.5)"
      @click="
        ChangeActivePage('DrawUserInfo');
        UpdateUserInfo();
      "
    />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["active"]),
    mobile() {
      return window.innerWidth > window.innerHeight;
    },
  },

  methods: {
    ...mapActions([
      "UpdateUserInfo",
      "UpdateServiceInfo",
      "UpdateIndicationsInfo",
    ]),
    ...mapMutations(["ChangeActivePage"]),
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped></style>
