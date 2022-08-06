import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      active: "ServiceInfo",
      User: {
        login: false,
        UserLogin: "",
        UserId: 0,
        UserPassword: "",
        UserToken: "",
        UserName: "",
        Error: "",
        Service: [],
      },
    };
  },
  getters: {},
  mutations: {
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
      state.User.Error = "Eror:" + String(value.response.status);

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
  },
  modules: {},
});
