import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      active: "ServiceInfo",
      admin: false,
      User: {
        login: false,
        UserLogin: "",
        UserId: 0,
        UserPassword: "",
        UserToken: "",
        UserName: "",
        Error: "",
        Spinner: false,
        ServicesName: "",
        DateIndications: "",
        ValueIndications: null,
        PaymentAmount: 0,
        DateServices: "",
        Address: "",
        Service: [],
        Indications: [
          {
            date_indications: "2020-11-15",
            services_name: "вода",
            value_indications: 152000,
            apartments_id: 97,
          },
          {
            date_indications: "2021-12-10",
            services_name: "электричество",
            value_indications: 2000,
            apartments_id: 97,
          },
        ],
        Lodgers: [],
      },
    };
  },
  getters: {},
  mutations: {
    NewAddress(state, info) {
      state.User.Address = info.address;
    },
    SingIn(state) {
      state.admin = true;

      state.User.login = !state.User.login;
    },
    MutateLogin(state, info) {
      state.User.UserLogin = info.login;
      state.User.UserPassword = info.password;
      console.log(info.password);
    },

    Update(state, info) {
      state.User.UserName = info.name_lodgers;
      state.User.UserLogin = info.login;
      state.User.UserId = info.lodgers_id;
      state.User.UserPassword = info.password;
      state.User.UserToken = info.token;
    },
    ChangeActivePage(state, info) {
      state.active = info;
    },
    LoginUpdate(state, value) {
      state.User.UserToken = value.data.token;
      state.User.UserId = value.data.lodgers_id;
      state.User.Spinner = false;
      switch (String(value.response.status)) {
        case "400":
          state.User.Error = "Неверный логин или пароль";
          break;
      }

      if (value.data.error === undefined) {
        state.User.login = !state.User.login;
      }
    },
    SignOut(state) {
      state.User.login = !state.User.login;
      state.User.UserName = null;
      state.User.UserLogin = null;
      state.User.UserId = null;
      state.User.UserPassword = null;
      state.User.UserToken = null;
      state.User.Error = null;
      state.active = "ServiceInfo";
    },
    NewService(state, value) {
      state.User.Service = value;
    },
    Spinner(state) {
      state.User.Spinner = true;
    },
    UpdateIndicationsValue(state, value) {
      state.User.ServicesName = value.ServicesName;
      state.User.DateIndications = value.DateIndications;
      state.User.ValueIndications = value.ValueIndications;
    },
    UpdateIndications(state, value) {
      state.User.Indications = value;
    },
    UpdateAllLodgers(state, value) {
      state.User.Lodgers = value;
    },
    SelectUser(state, value) {
      state.User.UserToken = Number(value.split(",")[1]);
      state.User.UserId = Number(value.split(",")[0]);
      console.log(Number(value.split(",")[1]));
    },
    UpdateServiceValue(state, value) {
      console.log(value);
      state.User.ServicesName = value.ServicesName;
      state.User.DateServices = value.DateServices;
      state.User.PaymentAmount = value.PaymentAmount;
    },
  },
  actions: {
    async UpdateUserInfo(context) {
      const response = await fetch(
        `/info/${this.state.User.UserId}/${this.state.User.UserToken}`,
        { methods: "GET" }
      );
      const data = await response.json();
      context.commit("Update", data);
    },
    async UpdateServiceInfo(context) {
      const response = await fetch(
        `/get_service/${this.state.User.UserId}/${this.state.User.UserToken}`,
        { methods: "GET" }
      );
      const data = await response.json();
      console.log(data.arr);
      context.commit("NewService", data.arr);
    },
    async Login(context) {
      const response = await fetch(`/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login: this.state.User.UserLogin,
          password: this.state.User.UserPassword,
        }),
      });
      const data = await response.json();

      context.commit("LoginUpdate", { data: data, response: response });
      this.dispatch("UpdateServiceInfo");
    },
    async CreateIndications() {
      await fetch(`/create_indication/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          lodgers_id: this.state.User.UserId,
          token: this.state.User.UserToken,
          services_name: this.state.User.ServicesName,
          apartments_id: this.state.User.Indications[0].apartments_id,
          date_indications: this.state.User.DateIndications,
          value_indications: this.state.User.ValueIndications,
        }),
      });

      this.dispatch("UpdateIndicationsInfo");
    },
    async UpdateIndicationsInfo(context) {
      const response = await fetch(
        `/get_indication/${this.state.User.UserId}/${this.state.User.UserToken}`,
        { methods: "GET" }
      );
      const data = await response.json();
      console.log(data.arr);
      context.commit("UpdateIndications", data.arr);
    },
    async CreateLodgers() {
      await fetch(`/registration/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: this.state.User.UserName,
          login: this.state.User.UserLogin,
          password: this.state.User.UserPassword,
        }),
      });
    },
    async CreateApartments() {
      await fetch(`/create_home/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          address: this.state.User.Address,
        }),
      });
    },
    async GetAllLodgers(context) {
      const response = await fetch(`/AllLodger/`, { methods: "GET" });
      const data = await response.json();
      context.commit("UpdateAllLodgers", data.arr);
    },
    async CreateService() {
      await fetch(`/create_service/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          lodgers_id: this.state.User.UserId,
          token: this.state.User.UserToken,
          services_name: this.state.User.ServicesName,
          apartments_id: this.state.User.Service[0].apartments_id,
          date_services: this.state.User.DateServices,
          payment_amount: this.state.User.PaymentAmount,
        }),
      });

      this.dispatch("UpdateServiceInfo");
    },
    async PayService() {
      await fetch(`/pay_service/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          lodgers_id: this.state.User.UserId,
          token: this.state.User.UserToken,
          date_services: this.state.User.DateServices,
          name_services: this.state.User.ServicesName,
        }),
      });
    },
  },
  modules: {},
});
