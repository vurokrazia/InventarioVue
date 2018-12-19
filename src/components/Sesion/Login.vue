<template>
  <auth @sendForm="sign_in" :title="'Login'" :description="'Inicia sesión para consultar reportes'" :action="'login'"/>
</template>

<script>
import auth from "./Form"
export default {
  name:"Login",
  components:{
    auth
  },
  data: {
    return () {

    }
  },
  methods: {
    sign_in (user) {
      console.log(user);
      this.$localStorage.set('login', true);
      console.log(this.$localStorage.get('login'));
      this.$router.push("/")
    }
  }
  }
</script>