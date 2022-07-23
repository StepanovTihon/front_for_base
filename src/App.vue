<template>
  <div class="container">
    <MainLayout v-if="User.login === true"></MainLayout>
    <LoginLayout v-if="User.login === false"></LoginLayout>

    <button class="btn danger" @click="Mutate">сменить</button>
  </div>
</template>

<script>
import MainLayout from "./layout/MainLayout.vue";
import LoginLayout from "./layout/LoginLayout.vue";
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["User"]),
  },
  methods: {
    ...mapMutations(["MutateLogin"]),
    Mutate() {
      this.MutateLogin();
    },
  },
  data() {
    return {};
  },
  name: "App",
  components: { MainLayout, LoginLayout },
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
