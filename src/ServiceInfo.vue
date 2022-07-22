<template>
  <div class="card">
    <div class="flex-conteiner to-strings">
      <div class="flex-conteiner nav">
        <div class="flex-element">имя услуги</div>
        <div class="flex-element">сумма</div>
        <div class="flex-element">период</div>
        <div class="flex-element">оплечено</div>
        <div class="flex-element">арендатор</div>
        <div class="flex-element">адрес</div>
      </div>
      <div
        v-for="OneService in filterMass"
        :key="OneService.service_id"
        class="flex-conteiner string"
      >
        <div class="flex-element">{{ OneService.services_name }}</div>
        <div class="flex-element">{{ OneService.paymant_amount }}</div>
        <div class="flex-element">{{ OneService.date_services }}</div>
        <div class="flex-element">
          {{ OneService.paid === true ? "Да" : "Нет" }}
        </div>
        <div class="flex-element">{{ OneService.name_lodgers }}</div>
        <div class="flex-element">{{ OneService.adress }}</div>
      </div>
    </div>

    <button @click="filter = !filter" class="btn">
      {{ filter ? "\\/ Показать всё" : "/\\ Скрыть уже оплаченное" }}
    </button>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["User"]),
    sortMass() {
      let arr = this.User.Service;
      return arr.sort(
        (prev, sled) =>
          Number(
            sled.date_services.split(".")[2] +
              sled.date_services.split(".")[1] +
              sled.date_services.split(".")[0]
          ) -
          Number(
            prev.date_services.split(".")[2] +
              prev.date_services.split(".")[1] +
              prev.date_services.split(".")[0]
          )
      );
    },
    filterMass() {
      let arr = this.sortMass;
      if (this.filter) {
        return arr.filter((value) => !value.paid);
      } else {
        return arr;
      }
    },
  },
  methods: {},
  data() {
    return {
      filter: true,
    };
  },
};
</script>
