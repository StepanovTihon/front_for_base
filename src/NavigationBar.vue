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
      Личный кабинет
    </div>
    <div style="color: #77a9f9" class="navtext">Подать показания</div>
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
    ...mapActions(["UpdateUserInfo", "UpdateServiceInfo"]),
    ...mapMutations(["ChangeActivePage"]),
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped></style>
