<template>
  <div>
    <NavigationBar></NavigationBar>    
    
    <keep-alive class="container with-nav">
      <component :is="active"></component>
    </keep-alive>
    
    
  </div>
 
</template> 
<script> 
import NavigationBar from '../NavigationBar.vue';
import DrawUserInfo from '../DrawUserInfo.vue';
import ServiceInfo from "../ServiceInfo.vue";
import { mapState } from "vuex";


export default {
  computed:{
    ...mapState(['active']),
    
  },
  data(){
    return {
      
    }
  }, 
  components: {NavigationBar,DrawUserInfo,ServiceInfo}
}
</script> 

<style>

</style>
