<template>
  <ul class="drop-down-menu">
    <router-link to="/saved">
      <li class="drop-down-menu-item">
        <v-icon>mdi-magnify</v-icon
        ><span style="margin: 0px 5px">Generated PassWords</span>
      </li>
    </router-link>
    <router-link to="/faves">
      <li class="drop-down-menu-item">
        <v-icon>mdi-heart</v-icon
        ><span style="margin: 0px 5px">Favourite PassWords</span>
      </li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "drop-down-menu",
};
</script>

<style scoped>
.drop-down-menu {
  animation: dropdown 0.3s steps(50);
  background-color: #0b23ac;
  padding: 15px;
  list-style: none;
  height: 120px;
}
a {
  text-decoration: none;
  color: #fff;
}
li {
  margin: 10px 10px;
}
.drop-down-menu-item {
  padding: 5px;
  width: max-content;
}
.drop-down-menu-item:hover {
  background-color: #3f51b5;
}
@keyframes dropdown {
  0% {
    height: 0px;
  }
  30% {
    height: 40px;
  }
  60% {
    height: 60px;
  }
  80% {
    height: 80px;
  }
  to {
    height: 120px;
  }
}
</style>
