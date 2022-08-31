<template>
  <div :class="mobile === true ? 'container navbar ' : 'navbar'">
    <div
      style="color: #77a9f9"
      class="navtext"
      @click="
        ChangeActivePage('PeopleAndApartments');
        UpdateServiceInfo();
      "
    >
      Справочники
    </div>
    <div
      style="color: #77a9f9"
      class="navtext"
      @click="
        ChangeActivePage('ServiceInfoAdmin');
        GetAllLodgers();
      "
    >
      Выставить счёт
    </div>
    <div
      style="color: #77a9f9"
      class="navtext"
      @click="
        ChangeActivePage('DrawIndicationsAdmin');
        GetAllLodgers();
        UpdateIndicationsInfo();
      "
    >
      Показания
    </div>
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
      "GetAllLodgers",
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
