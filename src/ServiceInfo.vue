<template>
  <div class="card">
    <div class="flex-conteiner to-strings">
      <div class="flex-conteiner nav">
        <div class="flex-element">Период</div>
        <div class="flex-element">Категория</div>
        <div class="flex-element">Сумма</div>
        <div class="flex-element">Оплачено</div>
      </div>
      <div
        v-for="OneService in filterMass"
        :key="OneService.service_id"
        class="flex-conteiner string"
      >
        <div class="flex-element small">{{ OneService.date_services }}</div>
        <div class="flex-element small left" style="align-items: flex-start">
          {{ OneService.services_name }}
        </div>
        <div class="flex-element small">{{ OneService.paymant_amount }}</div>
        <div class="flex-element small">
          {{ OneService.paid === true ? "Да" : "Нет" }}
        </div>
      </div>
    </div>
    <div>
      <button @click="filter = !filter" class="btn">
        {{ filter ? "\\/ Показать всё" : "/\\ Скрыть уже оплаченное" }}
      </button>
      <h5 v-if="filter === true">
        Итого:{{
          filterMass.reduce((acc, value) => (acc += value.paymant_amount), 0)
        }}
      </h5>
    </div>
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
