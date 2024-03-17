const app = Vue.createApp({
  //data, functions
  //template: "<h2>I am the template inside js file</h2>",

  //1 CREATING A DATA FUNCTION -- inside this i can return data object
  // the properties we make inside objects are accessible to the template
  // we can't access this varialbes outside of the the vueapp which we created at #app
  data() {
    return {
      url: "https://www.google.com/",
      showBooks: true,
      //   title: "The Final Empire", // we can access this value of title with the 'title' variable in template
      //   author: "Brandon Sunderson",
      //   age: 40,
      x: 0,
      y: 0,
      books: [
        {
          title: "name of the wind",
          author: "patrick rothfuss",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzqRX5cJKSoOB0io-TUyrpsoZQnrB5xNBK8Q&usqp=CAU",
          isFav: true,
        },
        {
          title: "the way of kings",
          author: "brandon sanderson",
          img: "https://i.pinimg.com/736x/89/f8/21/89f8212c85586e2623b858a36b55b441.jpg",
          isFav: false,
        },
        {
          title: "the final empire",
          author: "patrick rothfuss",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ4coUFWHGW4N4L5tWe4wghFEaKwVxaZ0TdgF8550CxLtfvLmYqFkLss_UNvDJe8bQl9I&usqp=CAU",
          isFav: true,
        },
      ],
    };
  },

  methods: {
    changeTitle(title) {
      //   this.title = "World of Randiance";
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      data && console.log(data);
    },
    handleMouseMove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },

  //   COMPUTED PROPERTY IS A WAY TO DEFINE A DATA PROPERTY INSIDE OUR COMPONENTS
  // LIKE METHODS WE ALSO HAVE COMPUTED
  // computed property depends on the data, when the data changes then this will be updated as it is depended on it

  computed: {
    filteredValue() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
