<template>
  <div class="backdrop" @click.self="closeModal">
    <!--  class'{CLASS: KEY}' -->
    <div class="modal" :class="{ dark: theme === 'dark' }">
      <!-- <h1>{{ header }}</h1>
      -->
      <slot>Default Content</slot>
      <div class="actions" v-if="$slots.links">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["header", "text", "theme"],
  props: ["theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal {
  width: 400px;
  padding: 20px;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.modal h1 {
  color: #03cfb4;
  padding: 0;
}

.modal p {
  font-style: normal;
}

.modal.dark {
  background: crimson;
  color: white;
}
.modal.dark h1 {
  color: white;
}
</style>
