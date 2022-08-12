<template>
  <div class="with-nav">
    <NavigationBar></NavigationBar>

    <keep-alive>
      <component :is="active"></component>
    </keep-alive>
  </div>
</template>
<script>
import NavigationBar from "../NavigationBar.vue";
import DrawUserInfo from "../DrawUserInfo.vue";
import ServiceInfo from "../ServiceInfo.vue";
DrawIndications;
import DrawIndications from "../DrawIndications.vue";
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
  components: { NavigationBar, DrawUserInfo, ServiceInfo, DrawIndications },
};
</script>

<style></style>
