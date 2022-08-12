<template>
  <div class="card">
    <div class="flex-conteiner to-strings" v-if="mobile">
      <div class="flex-conteiner nav">
        <div class="flex-element">Период</div>
        <div class="flex-element">Категория</div>
        <div class="flex-element">Показания</div>
      </div>

      <div
        class="flex-conteiner string"
        style="background: rgb(0, 0, 0); width: 100%"
      >
        <input
          id="Email"
          class="flex-element small form-control input"
          type="email"
          v-model="DateIndications"
          placeholder="ГГГГ-ММ-ДД"
        />
        <select
          class="flex-element small left form-control input"
          style="align-items: flex-start"
        >
          <option>Вода</option>
          <option>Электричество</option>
        </select>
        <input
          id="Email"
          class="flex-element small form-control input"
          type="email"
          v-model="Indications"
        />
        <div style="position: absolute; left: 76%; font-size: 140%">
          &#9989;
        </div>
      </div>

      <div
        v-for="OneService in sortMass"
        :key="OneService.service_id"
        class="flex-conteiner string"
        style="background: rgb(0, 0, 0); width: 100%"
      >
        <div class="flex-element small">
          {{ OneService.date_indications }}
        </div>
        <div class="flex-element small left" style="align-items: flex-start">
          {{ OneService.services_name }}
        </div>
        <div class="flex-element small">{{ OneService.value_indications }}</div>
      </div>
    </div>
    <div class="flex-conteiner to-strings" v-if="!mobile">
      <details>
        <summary>Подать показания</summary>
        <input
          id="Email"
          class="flex-element small form-control input"
          type="email"
          v-model="DateIndications"
          placeholder="ГГГГ-ММ-ДД"
          style="width: 75%"
        />
        <div style="position: absolute; left: 75%; font-size: 200%">
          &#9989;
        </div>
        <select
          class="flex-element small left form-control input"
          style="align-items: flex-start; width: 75%"
        >
          <option>Вода</option>
          <option>Электричество</option>
        </select>

        <input
          id="Email"
          class="flex-element small form-control input"
          type="email"
          v-model="Indications"
          style="width: 75%"
          placeholder="Значение показания"
        />
      </details>
      <div
        v-for="OneService in sortMass"
        :key="OneService.service_id"
        class="card"
        style="background: rgb(0, 0, 0)"
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
              {{ OneService.date_indications }}
            </div>
            <div class="small" style="font-size: 25px">
              {{ OneService.value_indications }}
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
      let arr = this.User.Indications;
      return arr.sort(
        (prev, sled) =>
          Number(
            sled.date_indications.split("-")[0] +
              sled.date_indications.split("-")[1] +
              sled.date_indications.split("-")[2]
          ) -
          Number(
            prev.date_indications.split("-")[0] +
              prev.date_indications.split("-")[1] +
              prev.date_indications.split("-")[2]
          )
      );
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
