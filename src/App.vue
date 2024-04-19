<template>
  <!-- <Practice /> -->
  <!-- <ReactionTimer /> -->
  <!-- <SignupForm /> -->
  <!-- <div id="nav">
    <router-link to="/">Home </router-link>
    <router-link :to="{ name: 'About' }">About </router-link>
    <router-link :to="{ name: 'Jobs' }">Jobs </router-link>
    <router-link :to="{ name: 'Friends' }">Friends </router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <NewFriend @add-contact="addContact"></NewFriend>

  <Friends
    v-for="friend in friends"
    :key="friend.id"
    :id="friend.id"
    :name="friend.name"
    :phone-number="friend.phone"
    :email-address="friend.email"
    :is-favorite="friend.isFavorite"
    @toggle-favorite="toggleFavoriteStatus"
    @delete="deleteContact"
  /> -->

  <!-- :style="{ borderColor: btnASelected ? 'red' : 'yellow' }" -->
  <!-- :class="btnASelected ? 'demo active' : 'demo'" -->
  <!-- <div class="demo" :class="boxAClasses" @click="btnSelected('A')">
    <p v-for="goal in goals" :key="goal">{{ goals }}</p>
  </div>
  <div
    :class="['demo', { active: btnBSelected }]"
    @click="btnSelected('B')"
    :style="{ display: 'flex', gap: '10px' }"
  >
    <p v-for="num in 10" :key="num">{{ num }}</p>
  </div>

  <div class="demo" :class="{ active: btnCSelected }" @click="btnSelected('C')">
    <p v-for="(value, key, index) in { name: 'Max', age: 20 }" :key="value">
      {{ value }} : {{ key }} {{ index }}
    </p>
  </div> -->

  <!-- <router-view /> -->
  <!-- same as of outlet in react -->
  <h1></h1>
</template>

<script>
import Practice from "./components/Practice.vue";
import Block from "./components/Block.vue";
import ReactionTimer from "./components/ReactionTimer.vue";
import SignupForm from "./components/SignupForm.vue";
import Friends from "./views/Friends.vue";
import NewFriend from "./components/NewFriend.vue";

export default {
  name: "App",
  components: {
    Practice,
    Block,
    ReactionTimer,
    SignupForm,
    Friends,
    NewFriend,
  },
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
    btnSelected(btn) {
      if (btn === "A") {
        this.btnASelected = !this.btnASelected;
        console.log("a selected");
      } else if (btn === "B") {
        this.btnBSelected = !this.btnBSelected;
      } else if (btn === "C") {
        this.btnCSelected = !this.btnCSelected;
      }
    },
    btn() {
      console.log("selectedd");
    },
    toggleFavoriteStatus(friendId) {
      const indentifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      indentifiedFriend.isFavorite = !indentifiedFriend.isFavorite;
    },
    addContact(name, phone, email) {
      const newFriendContact = {
        id: new Date().toISOString(),
        //  property defined here: argument passed
        name: name,
        phone: phone,
        email: email,
        isFavorite: false,
      };
      this.friends.push(newFriendContact);
    },
    deleteContact(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    },
  },

  computed: {
    boxAClasses() {
      return { active: this.btnASelected };
    },
  },

  data() {
    return {
      // btnASelected: false,
      // btnBSelected: false,
      // btnCSelected: false,
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: true,
        },
        {
          id: "julie",
          name: "julie Lorenz",
          phone: "0123 45678 90",
          email: "julie@localhost.com",
          isFavorite: false,
        },
      ],
    };
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
.demo {
  width: calc(100% - 32px);
  height: 100px;
  margin: 16px;
  border: 2px dashed #ccc;
}
.active {
  border-color: greenyellow;
  background: plum;
}
</style>
