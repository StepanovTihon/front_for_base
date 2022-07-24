<template>
  <div class="card">
    <div>
      <button @click="filter = !filter" class="btn">
        {{ filter ? "\\/ Показать всё" : "/\\ Скрыть уже оплаченное" }}
      </button>
      <h5 v-if="filter === true" style="color: rgb(255, 255, 255)">
        Итого:{{
          filterMass.reduce((acc, value) => (acc += value.paymant_amount), 0)
        }}
      </h5>
    </div>
    <div class="flex-conteiner to-strings" v-if="mobile">
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
    <div class="flex-conteiner to-strings" v-if="!mobile">
      <div
        v-for="OneService in filterMass"
        :key="OneService.service_id"
        class="card"
      >
        <div
          style="
            display: flex;
            justify-content: space-between;
            flex-direction: column;
          "
        >
          <div
            style="
              display: flex;
              justify-content: space-between;
              font-size: 25px;
              text-transform: capitalize;
            "
          >
            {{ OneService.services_name }}
          </div>

          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: baseline;
            "
          >
            <div class="small" style="font-size: 13px">
              {{ OneService.date_services }}
            </div>
            <div
              class="small"
              style="font-size: 25px"
              :style="
                OneService.paid === true
                  ? 'color:rgb(0, 128, 0)'
                  : 'color:rgb(249, 102, 102)'
              "
            >
              {{ OneService.paymant_amount }}
            </div>
          </div>
        </div>
      </div>
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
      let month = [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ];

      if (this.filter) {
        return arr.filter((value) => !value.paid);
      } else {
        let newarr = [
          {
            services_name:
              month[Number(arr[0].date_services.split(".")[1]) - 1] +
              arr[0].date_services.split(".")[2],
          },
          arr[0],
        ];
        console.log(arr.length);
        for (let i = 1; i < arr.length; i++) {
          if (
            arr[i].date_services.split(".")[1] !=
              arr[i - 1].date_services.split(".")[1] ||
            arr[i].date_services.split(".")[2] !=
              arr[i - 1].date_services.split(".")[2]
          ) {
            newarr.push({
              services_name:
                month[Number(arr[i].date_services.split(".")[1]) - 1] +
                arr[i].date_services.split(".")[2],
            });
          }
          newarr.push(arr[i]);
        }
        return newarr;
      }
    },
    mobile() {
      return window.innerWidth > window.innerHeight;
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
