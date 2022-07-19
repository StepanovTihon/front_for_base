<template>
  <div class="card center">
      <h3>Вход</h3>
      <div >
        <label class="list-item center">Email</label>
        <input class="form-control input center" type="email" @blur="eBlur">
      </div>
      
      <div >
        <label  class="list-item center">Пароль</label>
        <input class="form-control input center" type="password" @blur="pBlur">
      </div>
      <button class="btn primary" @click="MutateLogin">Войти</button>
      <hr class=""/>
      <button class="btn primary" @click="MutateLogin">Зарегистрироваться</button>
      
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {

  methods: {
    ...mapMutations(['MutateLogin'])

  }
}
</script>

<style scoped>

</style>