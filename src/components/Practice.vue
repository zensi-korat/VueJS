<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name" />
  <button @click="handleClick">click me</button>
  <teleport to=".modals" v-if="showModal">
    <!-- <Modal :header="header" :text="text" theme="dark" @close="toggleModal" /> -->
    <Modal theme="dark" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">More Info</a>
      </template>
      <h1>This is inside slot text</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
    </Modal>
  </teleport>

  <teleport to=".modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>This is a challenge task</h1>
      <template #:links>
        <h1>This text is inside named slot and used with templates</h1>
      </template>
    </Modal>
  </teleport>
  <button @click="toggleModal">Open Modal</button>
  <button @click="toggleModalTwo">Open Modal Two</button>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My First Vue App :)",
      header: "Sign up for the Giveaway!",
      text: "This is the paragraph",
      showModal: false,
      showModalTwo: false,
    };
  },

  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style></style>
