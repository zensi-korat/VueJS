<template>
  <p>Reaction time: {{ scoreBind }} ms</p>
  <p class="rank">{{ rank }}</p>
</template>

<script>
export default {
  props: ["scoreBind"],
  data() {
    return {
      rank: null,
    };
  },
  mounted() {
    if (this.scoreBind < 250) {
      this.rank = "Furious Fingers";
    } else if (this.scoreBind < 400) {
      this.rank = "Rapid Reflexes";
    } else {
      this.rank = "Snaily slow.....";
    }
  },
};
</script>

<style>
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}
</style>
