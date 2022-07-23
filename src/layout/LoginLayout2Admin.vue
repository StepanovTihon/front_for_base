<template>
  <div class="card center">
    <h3 v-if="registration === false" class="center">Вход</h3>
    <h3 v-if="registration === true" class="center">Регистрация</h3>
    <div class="center-justify">
      <label style="display: inline">Email</label>
      <input
        id="Email"
        class="form-control input"
        type="email"
        v-model.trim="Email"
        @blur="errEmail = true"
      />
    </div>
    <h2 class="warning center" center v-if="errEmail && Email.length === 0">
      Введите логин!
    </h2>
    <div class="center-justify">
      <label style="display: inline">Пароль</label>
      <input
        id="Password"
        class="form-control input"
        type="password"
        @blur="errPassword = true"
        v-model.trim="Password"
      />
    </div>
    <h2 class="warning center" v-if="errPassword && Password.length < 8">
      Введите пароль не короче 8 символов!
    </h2>
    <button
      v-if="registration === false"
      class="btn center"
      @click="MutateLogin"
    >
      Войти
    </button>

    <button
      v-if="registration === true"
      class="btn center"
      @click="MutateLogin"
    >
      Зарегистрироваться
    </button>
    <div
      style="margin: 0.2rem; color: #77a9f9; font-size: 13px"
      @click="registration = !registration"
    >
      {{ registration === false ? "Регистрироваться" : "Уже есть акаунт" }}
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["MutateLogin"]),
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
