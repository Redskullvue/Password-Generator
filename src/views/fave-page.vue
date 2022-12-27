<template>
  <div class="fave-pass-container">
    <ul class="saved-password-list">
      <li
        @click="copyFavePass(password.id)"
        class="saved-password-list-item"
        v-for="password in favePasswords"
        :key="password.id"
      >
        <div>
          <p>Title : {{ password.title }}</p>
          <p>PassWord : {{ password.passWord }}</p>
        </div>
      </li>
    </ul>
    <div class="fave-copy" v-if="favePasswordCopy">
      <h4>Copied</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavePage",
  data() {
    return {
      favePasswords: [],
      favePasswordCopy: false,
    };
  },
  mounted() {
    this.favePasswords = JSON.parse(localStorage.getItem("faveItems"));
  },
  methods: {
    copyFavePass(item) {
      navigator.clipboard.writeText(item);
      this.favePasswordCopy = true;
      setTimeout(() => {
        this.favePasswordCopy = false;
      }, 500);
    },
  },
};
</script>

<style scoped>
.fave-pass-container {
  margin: 20px auto;
  background-color: #f5f5f5;
  padding: 20px;
  height: 500px;
  overflow: auto;
  border-radius: 10px;
  width: 70%;
}
.saved-password-list-item:hover {
  background-color: #081a7c;
  cursor: pointer;
}
.fave-copy {
  color: #fff;
  background-color: #3f51b5;
  width: 200px;
  height: 40px;
  text-align: center;
  padding: 8px;
  position: absolute;
  bottom: 10%;
  border-radius: 10px;
  left: 40%;
  transition: 1s all ease-in-out;
  animation: fadein 0.3s;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
}
</style>
