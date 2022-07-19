import { createStore } from 'vuex'

export default createStore({
  state() {
    return{
      active: 'DrawUserInfo',
      User:{
        login: false,
        UserLogin:'mail2tihon',
        UserId:'1',
        UserPassword:'123',
        UserToken:'748564',
        UserName:'Tihon',
        Service:[
          {
            service_id:1,
            services_name:"Вода",
            paymant_amount:1500,
            date_services:"12.02.2022",
            paid:false,
            name_lodgers:"Tihon",
            lodgers_id:1,
            adress:"Кирова30257",
            apartments_id:1
          },
          {
            service_id:3,
            services_name:"Газ",
            paymant_amount:3000,
            date_services:"10.02.2022",
            paid:true,
            name_lodgers:"Tihon",
            lodgers_id:1,
            adress:"Кирова30257",
            apartments_id:1
          },
          {
            service_id:2,
            services_name:"Электричество",
            paymant_amount:3000,
            date_services:"11.02.2022",
            paid:true,
            name_lodgers:"Tihon",
            lodgers_id:1,
            adress:"Кирова30257",
            apartments_id:1
          }
        ]
      }

    }
  },
  getters: {
  },
  mutations: {
    MutateLogin(state){
      
      state.User.login = !state.User.login
    },
    Update(state,info){

      state.User.UserName=info.name_lodgers
      state.User.UserLogin=info.login
      state.User.UserId=info.lodgers_id
      state.User.UserPassword=info.password
      state.User.UserToken=info.token
    },
    ChangeActivePage(state,info){
      state.active = info
    }
    
  },
  actions: {
    async UpdateUserInfo(){
      console.log("UpdateUserInfo")
      const response = await fetch(`http://localhost:8080/info/${this.User.UserId}/${this.User.UserToken}`,{methods:'GET'})
      const data = await response.json()
      this.Update(data)
    }
  },
  modules: {
  }
})
