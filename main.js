new Vue({
  el: "#app",
  data: {
    todos: [
      { title: "Learn JavaScript", done: false },
      { title: "Learn HTML & CSS", done: false },
      { title: "Get an idea of Package Manager like npm, yarn etc.", done: false },
      { title: "Learn Vue", done: false },
      { title: "Build something awesome", done: false }
    ]
  },
  methods: {
    toggle: function (todo) {
      todo.done = !todo.done
    }
  }
})
