<template>
  <div>
    <div>
      <router-link to="/">Posts</router-link>
    </div>
    <b-form-input
      v-model="post.title"
      placeholder="Enter Title"
      style="width: 600px;"
    ></b-form-input>
    <div>Value: {{ post.title }}</div>
    <b-form-input
      v-model="post.content"
      placeholder="Enter Content"
      style="width: 600px;"
    ></b-form-input>
    <div>Value: {{ post.content }}</div>
    <b-button @click="savePost()">save</b-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: {
        title: "",
        content: ""
      },
      allPosts: []
    };
  },
  created() {
    axios.get("http://localhost3000/posts").then(res => {
      console.log(res.data);
    });
  },
  methods: {
    savePost() {
      let post = this.post;
      console.log(post);
      axios
        .post("http://localhost:3000/posts", {
          title: this.post.title,
          content: this.post.content
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>
