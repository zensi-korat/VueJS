<template>
  <ul>
    <li v-for="friend in friends" :key="friend">
      <h2>{{ friend.name }}</h2>
      <button>Show Detials</button>
      <ul>
        <li><strong>Phone</strong>{{ friend.phone }}</li>
        <li><strong>Email:</strong>{{ friend.email }}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 90",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Lorenz",
          phone: "01234 5678 90",
          email: "julie@localhost.com",
        },
      ],
    };
  },
};
</script>

<style></style>
