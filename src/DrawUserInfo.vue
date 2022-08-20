<template>
  <div class="card">
    <div class="list-item">Имя: {{ User.UserName }}</div>
    <div class="list-item">Логин: {{ User.UserLogin }}</div>

    <div class="list-item">Адрес: {{ address }}</div>
    <button
      class="btn"
      @click="
        SignOut();
        this.$cookies.set('token', '');
        this.$cookies.set('id', '');
      "
    >
      Выйти
    </button>
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["User"]),

    address() {
      return this.User.Service[0].address;
    },
  },
  methods: {
    ...mapMutations(["SignOut"]),
  },
  data() {
    return {};
  },
};
</script>
