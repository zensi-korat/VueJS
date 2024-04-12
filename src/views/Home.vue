<template>
  <h1>Home page</h1>
  <PostList :posts="posts" />
  <!-- <p ref="para">My name is {{ homeName }} and my age is {{ homeAge }}</p>
  <button @click="handleClick">Click me</button>
  <button @click="homeAge++">add 1 to age</button>
  <input type="text" v-model="homeName" />

  <h2>REFS</h2>
  <p>{{ refsName.names }} {{ refsName.ages }}</p>
  <button @click="updateRefs">update refs</button>

  <h2>REACTIVE</h2>
  <p>{{ reactiveName }} {{ reactiveName }}</p>
  <button @click="updateReactive">update reactive</button> -->
  <!-- <input type="text" v-model="search" />
  <p>search term - {{ search }}</p>
  <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  <button @click="stopFunction">stop watching</button> -->
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref, reactive, computed, watch, watchEffect } from "vue";

export default {
  name: "Home",
  components: { PostList },
  setup() {
    // console.log(this);

    // // const para = ref(null);
    // // const name = ref("mario");
    // const reactiveName = reactive({ names: "luigi", ages: 35 });
    // const refsName = ref({ names: "unagi", ages: 15 });
    // const age = ref(30);

    // // let name = "mario";
    // // let age = 30;

    // const updateReactive = () => {
    //   reactiveName.ages = 45;
    //   console.log(reactiveName, reactiveName.names);
    // };
    // const updateRefs = () => {
    //   refsName.value.ages = 5;
    // };

    // const handleClick = () => {
    //   // console.log(para, para.value);
    //   // para.value.classList.add("test");
    //   // para.value.textContent = "Hello here";
    //   name.value = "luigi";
    //   age.value = 35;
    // };
    // const search = ref("");
    // const names = ref([
    //   "mario",
    //   "yoshi",
    //   "luigi",
    //   "toad",
    //   "bowser",
    //   "koopa",
    //   "peach",
    // ]);

    // const stopWatch = watch(search, () => {
    //   console.log("watch fun runs");
    // });

    // const stopEffect = watchEffect(() => {
    //   console.log("watcheffect fun runs");
    // });
    // const stopFunction = () => {
    //   stopWatch();
    //   stopEffect();
    // };
    // const matchingNames = computed(() => {
    //   return names.value.filter((name) => name.includes(search.value));
    // });
    const posts = ref([
      { title: "Welcome to the blog", body: "lorem ipsum", id: 1 },
      { title: "top 5 css tips", body: "lorem ipsum", id: 2 },
    ]);
    return {
      // homeName: name,
      // homeAge: age,
      // handleClick,
      // updateReactive,
      // updateRefs,
      // names,
      // search,
      // matchingNames,
      // stopFunction,
      posts,
    };
  },
  created() {},
  mounted() {},
};
</script>

<style></style>
