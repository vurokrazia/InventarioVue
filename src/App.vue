<template>
  <v-app>
    <v-navigation-drawer 
        app
        v-model="drawer"
        absolute
        temporary
      >
        <v-list class="pa-1">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense>
          <v-divider></v-divider>

          <v-list-tile  v-for="item in items"  :key="item.title"  @click="$router.push(item.to)">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-content>
        <v-container fluid>
          <v-toolbar app dark color='success'>
            <v-toolbar-side-icon @click="setDrawer"/>
            <v-toolbar-title>
                Inventario Vue
            </v-toolbar-title>
          </v-toolbar>
          <router-view/>
        </v-container>
      </v-content>
    <!--<Tabs/>-->
  </v-app>
</template>
<script>
import Tabs from './partials/Tabs'
export default {
  name:"app",
  components: {
    Tabs
  },
  data () {
    return {
      drawer: true    ,
      items: [
        { title: 'Home', icon: 'dashboard', to: "/" },
        { title: 'About', icon: 'question_answer', to: "/about" },
        { title: 'Iniciar sesión', icon: 'question_answer', to: "/login" },
        { title: 'Registro', icon: 'question_answer', to: "/registered" }
      ]
    }
  },
  methods: {
    setDrawer () {
      this.drawer = !this.drawer;
    }
  }
}
</script>
<style>
  #app {
    background-color:silver !important;
  }
</style>