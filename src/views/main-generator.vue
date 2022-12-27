<template>
  <v-col spacearound>
    <password-input class="password-input" />
  </v-col>
</template>

<script>
import { defineComponent } from "vue";
// Components
import passwordInput from "../components/password-input.vue";

export default defineComponent({
  name: "mainGenerator",

  components: {
    passwordInput,
  },
});
</script>
<style scoped>
.password-input {
  margin: 20px 40px;
  box-shadow: 1px 1px 10px 1px gray;
}
</style>
