<template>
  <auth @sendForm="registered" :title="'Registro'" :description="'Puedes registrarte para comenzar a administrar tus productos'"   :action="'register'"/>
</template>

<script>
import auth from "./Form"
export default {
  name:"Registered",
  components:{
    auth
  },
  data: () => ({
    
  }),
  methods: {
    registered (user) {
      console.log(user);
    }
  }
  }
</script>