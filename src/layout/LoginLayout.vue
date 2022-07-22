<template>
  <div class="card center">
    <h3 class="center">Вход</h3>
    <div class="center">
      <label>Email</label>
      <input
        id="Email"
        class="form-control input"
        type="email"
        v-model.trim="Email"
        @blur="errEmail = true"
      />
      <h2 class="warning" v-if="errEmail && Email.length === 0">
        Введите логин!
      </h2>
    </div>

    <div class="center">
      <label>Пароль</label>
      <input
        id="Password"
        class="form-control input"
        type="password"
        @blur="errPassword = true"
        v-model.trim="Password"
      />
      <h2 class="warning" v-if="errPassword && Password.length < 8">
        Введите пароль не короче 8 символов!
      </h2>
    </div>
    <button class="btn center" @click="MutateLogin">Войти</button>

    <button class="btn center" @click="MutateLogin">Зарегистрироваться</button>
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
    };
  },
};
</script>

<style scoped></style>
