<template>
  <transition name="" mode="">
    <DashBord />
  </transition>
</template>

<script>
import DashBord from "@comp/DashBord";
export default {
  name: "Dash-bord",
  activated() {
    console.log("actived");
  },
  data() {
    return {};
  },
  methods: {
    handleBordReady() {
      this.$emit("page-ready");
    },
  },
  mounted() {
    setTimeout(this.handleBordReady, 1000);
  },
  components: {
    DashBord,
  },
};
</script>

<style scoped lang="scss">

</style>
