<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <p>store 数据 ：{{ info }}{{count}}</p>
    <home @ComponentClick="onClick" text="myComponentClick"></home>
    <button @click="getStore">点我</button>
  </div>
</template>
<script >
import Vue from "vue";
import home from "./home.vue";

import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "parcel-vue App",
      myComponentClick: "myComponentClick"
    };
  },
  components: {
    home
  },
  mounted() {
    console.log(this.msg);
  },
  computed: {
    ...mapState("admin", ["info"])
  },
  methods: {
    ...mapActions("admin", ["updateInfo"]),
    onClick() {
      console.log("O(∩_∩)O哈哈~");
    },
    getStore() {
      this.updateInfo();

    }
  }
};
</script>
