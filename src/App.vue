<template>
  <!-- <Practice /> -->
  <!-- <ReactionTimer /> -->
  <!-- <SignupForm /> -->
  <div id="nav">
    <router-link to="/">Home </router-link>
    <router-link :to="{ name: 'About' }">About </router-link>
    <router-link :to="{ name: 'Jobs' }">Jobs </router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>
  <router-view />
  <!-- same as of outlet in react -->
</template>

<script>
import Practice from "./components/Practice.vue";
import Block from "./components/Block.vue";
import ReactionTimer from "./components/ReactionTimer.vue";
import SignupForm from "./components/SignupForm.vue";

export default {
  name: "App",
  components: { Practice, Block, ReactionTimer, SignupForm },
  methods: {
    redirect() {
      this.$router.push({ name: "Home" });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
}

#nav a {
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
