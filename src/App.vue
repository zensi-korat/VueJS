<template>
  <!-- <Practice /> -->
  <!-- <ReactionTimer /> -->
  <SignupForm />
</template>

<script>
import Practice from "./components/Practice.vue";
import Block from "./components/Block.vue";
import ReactionTimer from "./components/ReactionTimer.vue";
import SignupForm from "./components/SignupForm.vue";

export default {
  name: "App",
  components: { Practice, Block, ReactionTimer, SignupForm },
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
</style>
