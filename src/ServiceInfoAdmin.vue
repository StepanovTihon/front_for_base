<template>
  <div class="card">
    <select class="btn" @change="onChange($event)">
      <option
        v-for="a in User.Lodgers"
        v-bind:key="a.lodgers_id"
        class="btn"
        :value="[a.lodgers_id, a.token]"
      >
        {{ a.name_lodgers }}
      </option>
    </select>
    <div class="flex-conteiner nav">
      <div class="flex-element">Период</div>
      <div class="flex-element">Категория</div>
      <div class="flex-element">Сумма</div>
      <div style="position: relative; font-size: 140%"></div>
    </div>
    <div>
      <div
        class="flex-conteiner string"
        style="background: rgb(0, 0, 0); width: 100%"
        v-for="OneService in whyNameService"
        v-bind:key="OneService"
      >
        <NewServicesAdmin :OneService="OneService" />
      </div>
      <div
        class="flex-conteiner string"
        style="background: rgb(0, 0, 0); width: 100%"
      >
        <NewServicesAndNameAdmin :OneService="OneService" />
      </div>
    </div>
    <div
      style="
        display: flex;
        justify-content: space-between;
        align-items: baseline;
      "
    >
      <div>
        <button @click="filter = !filter" class="btn">
          {{ filter ? "\\/ Показать всё" : "/\\ Скрыть уже оплаченное" }}
        </button>
      </div>
      <div>
        <h5
          v-if="filter === true"
          style="color: rgb(255, 255, 255); margin: 0px; color: #77a9f9"
        >
          Итого:{{
            filterMass.reduce((acc, value) => (acc += value.payment_amount), 0)
          }}
        </h5>
      </div>
    </div>

    <div v-if="mobile" class="flex-conteiner to-strings">
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
        :style="
          OneService.paid === undefined
            ? 'background: rgb(38, 38, 38); width:100%; background: linear-gradient(90deg, #77a9f9 0%, rgba(0,0,0) 100%);'
            : ''
        "
      >
        <div class="flex-element small">
          {{
            OneService.paid !== undefined
              ? OneService.date_services
              : mobile
              ? OneService.services_name
              : OneService.date_services
          }}
        </div>
        <div class="flex-element small left" style="align-items: flex-start">
          {{
            OneService.paid !== undefined
              ? OneService.services_name
              : mobile
              ? ""
              : OneService.services_name
          }}
        </div>
        <div class="flex-element small">{{ OneService.payment_amount }}</div>
        <div class="flex-element small" v-if="OneService.paid == true">
          {{
            OneService.paid === undefined
              ? ""
              : OneService.paid === true
              ? "Да"
              : "Нет"
          }}
        </div>
        <div class="flex-element small" v-if="OneService.paid === false">
          <button
            class="btn"
            @click="
              UpdateServiceValue({
                ServicesName: OneService.services_name,
                DateServices: OneService.date_services,
                PaymentAmount: PaymentAmount,
              });
              PayService();
              UpdateServiceInfo();
            "
          >
            Оплатить
          </button>
        </div>
      </div>
    </div>
    <div class="flex-conteiner to-strings" v-if="!mobile">
      <div
        v-for="OneService in filterMass"
        :key="OneService.service_id"
        class="card"
        :style="
          OneService.paid === undefined
            ? 'background: rgb(38, 38, 38);background: linear-gradient(90deg, #77a9f9 0%, rgba(0,0,0) 100%);'
            : ''
        "
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
              {{ OneService.payment_amount }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
import NewServicesAdmin from "./NewServicesAdmin.vue";
import NewServicesAndNameAdmin from "./NewServicesAndNameAdmin.vue";
export default {
  computed: {
    ...mapState(["User"]),
    sortMass() {
      let arr = this.User.Service;
      return arr.sort(
        (prev, sled) =>
          Number(
            sled.date_services.split("-")[0] +
              sled.date_services.split("-")[1] +
              sled.date_services.split("-")[2]
          ) -
          Number(
            prev.date_services.split("-")[0] +
              prev.date_services.split("-")[1] +
              prev.date_services.split("-")[2]
          )
      );
    },
    whyNameService() {
      let arr = this.User.Service;

      var names = [];

      for (var i = 0; i < arr.length; i++) {
        var er = false;
        for (var y = 0; y < names.length; y++) {
          if (arr[i].services_name == names[y]) {
            er = true;
          }
        }

        if (er === false) {
          names.push([arr[i].services_name]);
        }
      }

      return names;
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
              month[Number(arr[0].date_services.split("-")[1]) - 1] +
              " " +
              arr[0].date_services.split("-")[0],
          },
          arr[0],
        ];
        console.log(arr.length);
        for (let i = 1; i < arr.length; i++) {
          if (
            arr[i].date_services.split("-")[1] !=
              arr[i - 1].date_services.split("-")[1] ||
            arr[i].date_services.split("-")[0] !=
              arr[i - 1].date_services.split("-")[0]
          ) {
            newarr.push({
              services_name:
                month[Number(arr[i].date_services.split("-")[1]) - 1] +
                " " +
                arr[i].date_services.split("-")[0],
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
  methods: {
    ...mapMutations(["SelectUser", "UpdateServiceValue"]),
    ...mapActions(["UpdateServiceInfo", "PayService", "UpdateServiceInfo"]),

    onChange(event) {
      console.log(event.target.value);
      this.SelectUser(event.target.value);
      this.UpdateServiceInfo();
    },
  },
  data() {
    return {
      filter: true,
      allpaid: false,
    };
  },
  components: { NewServicesAdmin, NewServicesAndNameAdmin },
};
</script>
