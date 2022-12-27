<template>
  <v-col spacearound>
    <div v-if="savedPasswords" class="saved-pass-container">
      <ul class="saved-password-list">
        <li
          v-for="savedPass in savedPasswords"
          :key="savedPass.passWord"
          class="saved-password-list-item"
        >
          <div>
            <p>Title : {{ savedPass.title }}</p>
            <p>PassWord : {{ savedPass.passWord }}</p>
          </div>
          <div>
            <v-icon
              @click="removeItem(savedPass.id)"
              id="trash"
              class="saved-password-list-icons"
              >mdi-trash-can</v-icon
            >
            <v-icon
              @click="addFavePass(savedPass.id)"
              id="star"
              class="saved-password-list-icons"
              >mdi-star</v-icon
            >
          </div>
        </li>
      </ul>
    </div>
    <div v-if="!savedPasswords" class="saved-pass-404">
      <h1>There Has Been No PassWords Yet</h1>
      <router-link to="/" class="password-input-submit">Generate</router-link>
    </div>
  </v-col>
</template>
<script>
export default {
  name: "savedPasswordsPage",
  data() {
    return {
      savedPasswords: [],
      favePasses: [],
    };
  },
  mounted() {
    this.savedPasswords = JSON.parse(localStorage.getItem("userSavedPasses"));
  },
  methods: {
    removeItem(item) {
      let removeItem = this.savedPasswords.findIndex((object) => {
        return object.id === item;
      });
      this.savedPasswords.splice(removeItem, 1);
      localStorage.userSavedPasses = JSON.stringify(this.savedPasswords);
    },
    addFavePass(item) {
      let faveItem = this.savedPasswords.findIndex((object) => {
        return object.id === item;
      });
      this.favePasses.push(this.savedPasswords[faveItem]);
      localStorage.setItem("faveItems", JSON.stringify(this.favePasses));
    },
  },
};
</script>

<style>
.saved-pass-container {
  margin: 20px auto;
  background-color: #f5f5f5;
  padding: 20px;
  height: 500px;
  overflow: auto;
  border-radius: 10px;
  width: 70%;
}
.saved-password-list {
  list-style: none;
}
.saved-pass-404 {
  margin: 20px auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #3f51b5;
  padding: 20px;
  height: 500px;
  overflow: auto;
  border-radius: 10px;
  width: 300px;
}
.saved-password-list-item {
  background-color: #3f51b5;
  color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 30px;
  margin: 10px 0px;
}
.saved-password-list-icons {
  font-size: 16px;
  transition: all 0.3s;
  cursor: pointer;
}
#trash:hover {
  color: orangered;
}
#star:hover {
  color: gold;
}
.star {
  color: gold;
}
@media screen and (max-width: 600px) {
  .saved-pass-container {
    width: 100%;
  }
}
</style>
