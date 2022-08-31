<template>
  <div class="with-nav">
    <NavigationBarAdmin></NavigationBarAdmin>

    <keep-alive>
      <component :is="active"></component>
    </keep-alive>
  </div>
</template>
<script>
import NavigationBarAdmin from "../NavigationBarAdmin.vue";
import PeopleAndApartments from "../PeopleAndApartments.vue";
import ServiceInfoAdmin from "../ServiceInfoAdmin.vue";
import DrawIndicationsAdmin from "../DrawIndicationsAdmin.vue";

import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["active", "User"]),
  },
  mounted() {
    this.$nextTick(function () {
      this.$cookies.set("token", this.User.UserToken, { expires: "6M" });
      this.$cookies.set("id", this.User.UserId, { expires: "6M" });
    });
  },
  data() {
    return {};
  },

  components: {
    NavigationBarAdmin,

    DrawIndicationsAdmin,
    PeopleAndApartments,
    ServiceInfoAdmin,
  },
};
</script>

<style></style>
