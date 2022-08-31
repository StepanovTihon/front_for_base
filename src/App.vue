<template>
  <div :class="mobile === true ? 'container' : ''">
    <MainLayout v-if="User.login === true && !admin"></MainLayout>
    <AdminLayout v-if="User.login === true && admin"></AdminLayout>
    <LoginLayout v-if="User.login === false"></LoginLayout>
  </div>
</template>

<script>
import MainLayout from "./layout/MainLayout.vue";
import AdminLayout from "./layout/AdminLayout.vue";
import LoginLayout from "./layout/LoginLayout.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["User", "admin"]),
    mobile() {
      return window.innerWidth > window.innerHeight;
    },
  },
  methods: {},
  data() {
    return {};
  },
  name: "App",
  components: { MainLayout, LoginLayout, AdminLayout },
};
/*
function isMobile() { 

return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}

if(isMobile()){
    header("Location: Ваш сайт моб. версия");
}
else { Десктоп }
*/
</script>

<style></style>
