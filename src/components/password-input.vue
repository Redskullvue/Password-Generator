<template>
  <div>
    <h3 class="password-input-title">Generate Strong Passwords</h3>
    <form class="generate-form" @submit.prevent="randomPassGen">
      <input
        class="input-title"
        type="text"
        v-model="userTitle"
        placeholder="Write a title for password"
        required
      />
      <div>
        <h3 style="color: rgb(45, 44, 44)">
          Generated Password :
          <span
            ><input
              class="generated-password"
              type="text"
              :value="fullPass"
              readonly
            />
          </span>
        </h3>
      </div>
      <input class="password-input-submit" type="submit" value="Generate" />
    </form>
    <div class="rest-btns">
      <button id="copy" class="password-input-submit" @click="copyPass">
        Copy
      </button>
      <button id="save" class="password-input-submit" @click="savePass">
        Save
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    passWordId: "",
    userTitle: "",
    passwordLength: 10,
    alphaBet:
      "abcdefghijklmnopqrstuvwxyz123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*!",
    fullPass: "",
    savedPasswords: [],
  }),

  mounted() {
    if (localStorage.userSavedPasses) {
      this.savedPasswords = JSON.parse(localStorage.getItem("userSavedPasses"));
    }
  },
  methods: {
    randomPassGen() {
      this.fullPass = "";
      for (let i = 0; i <= this.passwordLength; i++) {
        this.fullPass +=
          this.alphaBet[Math.floor(Math.random() * this.alphaBet.length)];
      }
      this.passWordId = this.fullPass;
    },

    copyPass() {
      if (this.fullPass != "") {
        navigator.clipboard.writeText(this.fullPass);
        document.getElementById("copy").innerHTML = "Copeid!";
        document.getElementById("copy").style = "background-color : green";
      }
      setTimeout(() => {
        document.getElementById("copy").style = "background-color : #3f51b5";
        document.getElementById("copy").innerHTML = "Copy";
      }, 1000);
    },

    savePass() {
      if (this.fullPass != "" && this.userTitle != "") {
        document.getElementById("save").innerHTML = "Saved!";
        document.getElementById("save").style = "background-color : green";

        this.savedPasswords.push({
          id: this.passWordId,
          title: this.userTitle,
          passWord: this.fullPass,
        });

        localStorage.setItem(
          "userSavedPasses",
          JSON.stringify(this.savedPasswords)
        );
      }
      setTimeout(() => {
        document.getElementById("save").style = "background-color : #3f51b5";
        document.getElementById("save").innerHTML = "Save";
      }, 1000);
    },
  },
};
</script>
<style>
.generate-form {
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
}
.password-input-title {
  padding: 10px;
  text-align: center;
  background-color: #3f51b5;
  color: #fff;
}
.input-title {
  text-align: center;
  border-bottom: 1px solid black;
  width: 90%;
  outline: none;
}
.password-input-submit {
  background-color: #3f51b5;
  padding: 10px;
  color: #f5f5f5 !important;
  width: 100px;
  border-radius: 10px;
  transition: 0.3s all;
}
.password-input-submit:hover {
  background-color: #132380;
}
.generated-password {
  outline: none;
  background-color: #fff;
  height: 40px;
  border-radius: 10px;
}
.rest-btns {
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  padding: 30px;
}
</style>
