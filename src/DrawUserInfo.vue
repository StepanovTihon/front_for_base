<template>
  <div class="card">
    <div class="list-item">Имя: {{ User.UserName }}</div>
    <div class="list-item">Логин: {{ User.UserLogin }}</div>
    <div class="list-item">Пароль: {{ User.UserPassword }}</div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["User"]),
  },
  data() {
    return {};
  },
};
</script>
