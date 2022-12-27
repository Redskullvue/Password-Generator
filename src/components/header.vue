<template>
  <v-card class="rounded-0">
    <v-toolbar color="indigo">
      <v-app-bar-nav-icon
        @click="dropDownToggle"
        class="d-flex d-sm-none"
      ></v-app-bar-nav-icon>

      <v-toolbar-title>{{ this.$route.name }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/faves">
        <v-btn icon class="d-none d-sm-flex">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </router-link>
      <router-link to="/saved">
        <v-btn icon class="d-none d-sm-flex">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </router-link>
    </v-toolbar>
    <drop-down-menu v-if="toggle" />
  </v-card>
</template>

<script>
import dropDownMenu from "./drop-down.vue";
export default {
  name: "mainHeader",
  components: {
    dropDownMenu,
  },
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    dropDownToggle() {
      this.toggle = !this.toggle;
    },
  },
};
</script>

<style scoped>
.drop-down {
  display: none;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>
