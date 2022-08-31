<template>
  <div class="card center">
    <h3 class="center">Регистрация нового пользователя</h3>
    <div class="center-justify">
      <label style="display: inline">Имя</label>
      <input
        id="Name"
        class="form-control input"
        type="name"
        v-model.trim="Name"
        @blur="errEmail = true"
      />
    </div>
    <div class="center-justify">
      <label style="display: inline">Логин</label>
      <input
        id="Email"
        class="form-control input"
        type="email"
        v-model.trim="Email"
        @blur="errEmail = true"
      />
    </div>

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

    <button
      class="btn center"
      @click="
        Update({ name_lodgers: Name, login: Email, password: Password });
        CreateLodgers();
      "
    >
      Зарегистрировать
    </button>
  </div>
  <div class="card center">
    <h3 class="center">Регистрация новой квартиры</h3>
    <div class="center-justify">
      <label style="display: inline">Адрес</label>
      <input
        id="Address"
        class="form-control input"
        type="name"
        v-model.trim="Address"
        @blur="errEmail = true"
      />
    </div>

    <button
      class="btn center"
      @click="
        NewAddress({ address: Address });
        CreateApartments();
      "
    >
      Зарегистрировать
    </button>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  methods: {
    ...mapMutations(["MutateLogin", "Update", "NewAddress"]),
    ...mapActions(["CreateLodgers", "CreateApartments"]),
  },
  data() {
    return {
      Address: "",
      Name: "",
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
