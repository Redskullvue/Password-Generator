<template>
  <v-app>
    <main-header />
    <router-view></router-view>
  </v-app>
</template>

<script>
import mainHeader from "./components/header.vue";
export default {
  name: "App",
  components: {
    mainHeader,
  },

  data: () => ({
    //
  }),
};
</script>
