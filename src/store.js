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
            services_name:"вода",
            paymant_amount:1500,
            date_services:"12.02.2022",
            paid:false,
            name_lodgers:"Tihon",
            lodgers_id:1,
            adress:"adress",
            apartments_id:1
          },
          {
            service_id:2,
            services_name:"газ",
            paymant_amount:3000,
            date_services:"10.02.2022",
            paid:true,
            name_lodgers:"Tihon",
            lodgers_id:1,
            adress:"adress",
            apartments_id:1
          },
          {
            service_id:3,
            services_name:"электричество",
            paymant_amount:3000,
            date_services:"11.02.2022",
            paid:true,
            name_lodgers:"Tihon",
            lodgers_id:1,
            adress:"adress",
            apartments_id:1
          },
          {
            service_id:4,
            services_name:"вода",
            paymant_amount:1700,
            date_services:"1.01.2022",
            paid:true,
            name_lodgers:"Tihon",
            lodgers_id:1,
            adress:"adress",
            apartments_id:1
          },
          {
            service_id:5,
            services_name:"газ",
            paymant_amount:2200,
            date_services:"30.08.2021",
            paid:true,
            name_lodgers:"Tihon",
            lodgers_id:1,
            adress:"adress",
            apartments_id:1
          },
          {
            service_id:6,
            services_name:"электричество",
            paymant_amount:4600,
            date_services:"15.03.2021",
            paid:false,
            name_lodgers:"Tihon",
            lodgers_id:1,
            adress:"adress",
            apartments_id:1
          },
          {
            service_id:7,
            services_name:"вода",
            paymant_amount:1200,
            date_services:"30.02.2021",
            paid:true,
            name_lodgers:"Tihon",
            lodgers_id:1,
            adress:"adress",
            apartments_id:1
          },
          {
            service_id:8,
            services_name:"газ",
            paymant_amount:12000,
            date_services:"1.01.2021",
            paid:false,
            name_lodgers:"Tihon",
            lodgers_id:1,
            adress:"adress",
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
    async UpdateUserInfo(context){
      console.log("UpdateUserInfo")
      const response = await fetch(`http://localhost:8080/info/${this.User.UserId}/${this.User.UserToken}`,{methods:'GET'})
      const data = await response.json()
      context.commit('Update',{ value:data})
    }
  },
  modules: {
  }
})
