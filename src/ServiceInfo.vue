<template>
  <div class="card">
    <table class="table center">
      <thead>
      <tr>
        <th>имя услуги</th>
        <th>сумма</th>
        <th>период</th>
        <th>оплечено</th>
        <th>арендатор</th>
        <th>адрес</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="OneService in User.Service" :key="OneService.service_id">
        <td>{{ OneService.services_name }}</td>
        <td>{{ OneService.paymant_amount }}</td>
        <td>{{ OneService.date_services }}</td>
        <td>{{ OneService.paid === true ? "Да" : "Нет" }}</td>
        <td>{{ OneService.name_lodgers }}</td>
        <td>{{ OneService.adress }}</td>
      </tr>
      </tbody>
    </table> 
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