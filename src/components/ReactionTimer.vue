<template>
  <h1>Reaction Timer</h1>

  <button @click="start" :disabled="isPlaying">Play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame" />

  <Results v-if="showResults" :scoreBind="score" />
</template>

<script>
import Results from "./Results.vue";
import Block from "./Block.vue";
export default {
  components: { Results, Block },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.isPlaying = true;
      this.delay = 2000 + Math.random() * 5000;
      console.log(this.delay);
      this.showResults = false;
    },

    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    },
  },

  updated() {
    console.log("This runs when the data of component is updated");
  },
};
</script>

<style></style>
