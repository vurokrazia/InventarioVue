<template>
  <auth @sendForm="sign_in" :title="'Login'" :description="'Inicia sesión para consultar reportes'" :action="'login'"/>
</template>

<script>
import auth from "./Form"
export default {
  components:{
    auth
  },
  data: () => ({
    
  }),
  methods: {
    sign_in (user) {
      console.log(user);
    },
    clear () {
   
    }
  }
  }
</script>