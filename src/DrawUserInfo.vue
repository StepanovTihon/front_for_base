<template>
  <div class="card">
    <label class="list-item">Имя: {{ User.UserName }}</label>
    <label class="list-item">Логин: {{ User.UserLogin }}</label>
    <label class="list-item">Пароль: {{ User.UserPassword }}</label>
    
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed:{
    ...mapState(['User']),
    
  },
  data(){
    return{
            
    }
  }
}
</script>