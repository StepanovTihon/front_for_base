<template>
  <div class="card center">
    <h3 class="center">Вход</h3>

    <div class="">
      <label style="display: inline">Email</label>
      <input
        id="Email"
        class="form-control input"
        type="email"
        v-model.trim="Email"
        @blur="errEmail = true"
        @input="errEmail = true"
      />
    </div>
    <h2 class="warning center" center v-if="errEmail && Email.length === 0">
      Введите логин!
    </h2>
    <div class="">
      <label style="display: inline">Пароль</label>
      <input
        id="Password"
        class="form-control input"
        type="password"
        @blur="errPassword = true"
        @input="errPassword = true"
        v-model.trim="Password"
      />
    </div>
    <h2 class="warning center" v-if="errPassword && Password.length < 8">
      Введите пароль не короче 8 символов!
    </h2>
    <button
      class="btn center"
      @click="
        MutateLogin({ password: Password, login: Email });
        Login();
      "
    >
      Войти
    </button>
    <h2 class="warning center" v-if="User.Error !== undefined">
      Eror: {{ User.Error }}
    </h2>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["User"]),
  },
  methods: {
    ...mapMutations(["MutateLogin", "Input"]),
    ...mapActions(["Login", "UpdateUserInfo"]),
  },
  data() {
    return {
      Email: "",
      Password: "",
      errEmail: false,
      errPassword: false,
      registration: false,
    };
  },
};
</script>

<style scoped></style>
