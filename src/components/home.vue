<template>
  <button @click="btnClick">{{text}}!</button>
</template>
<script >
export default {
  props: ["text"],
  data() {
    return {};
  },
  methods: {
    btnClick() {
      this.$emit("ComponentClick");
    }
  }
};
</script>
