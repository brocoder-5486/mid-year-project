<template>
  <div id="posts">
    <div>
      <router-link to="/add_post">Add Post</router-link>
    </div>
    <div v-for="(post, index) in posts" :key="post.id">
      <p>{{ post.title }}</p>
      <p>{{ post.content }}</p>
    </div>
    <!-- <div>
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
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
// import Vue from "vue";
export default {
  data() {
    return {
      posts: [],
      post: {
        title: "",
        content: ""
      }
    };
  },
  created() {
    // fetch("http://localhost:3000/posts")

    axios
      .get("http://localhost:3000/posts")
      .then(res => {
        console.log(res);
        this.posts = res.data;
      })
      .catch(err => {
        console.log(err);
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
