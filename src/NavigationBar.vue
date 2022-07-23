<template>
  <div class="container navbar">
    <div style="color: #77a9f9" @click="ChangeActivePage('ServiceInfo')">
      Личный кабинет
    </div>

    <div
      class="btn primary"
      style="border-radius: 99px"
      @click="ChangeActivePage('DrawUserInfo')"
    >
      *
    </div>
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
