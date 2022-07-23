<template>
  <div class="container navbar">
    <div style="color: #77a9f9" @click="ChangeActivePage('ServiceInfo')">
      Личный кабинет
    </div>
    <img
      src="./low.png"
      style="height: 50px; background: rgb(0, 0, 0, 0.5)"
      @click="ChangeActivePage('DrawUserInfo')"
    />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["active"]),
  },

  methods: {
    ...mapActions(["UpdateUserInfo"]),
    ...mapMutations(["ChangeActivePage"]),
  },
  data() {
    return {};
  },
  components: {},
};
</script>

<style scoped></style>
