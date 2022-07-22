<template>
  <div class="navbar">
    <app-button
      :color="active === 'ServiceInfo' ? 'primary' : ''"
      @action="ChangeActivePage('ServiceInfo')"
      >Информация о услугах
    </app-button>

    <app-button
      class=""
      :color="active === 'DrawUserInfo' ? 'primary' : ''"
      @action="ChangeActivePage('DrawUserInfo')"
      >Информация о пользователе
    </app-button>
  </div>
</template>

<script>
import AppButton from "./AppButton.vue";
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
  components: { AppButton },
};
</script>

<style scoped></style>
