import Vue from "vue";
import Router from "vue-router";
import Posts from "@/components/Posts";
import AddPost from "@/components/AddPost";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Posts",
      component: Posts
    },
    {
      path: "/add_post",
      name: "AddPost",
      component: AddPost
    }
  ]
});
