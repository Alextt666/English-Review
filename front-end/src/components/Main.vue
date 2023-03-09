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
  deactivated(){
    console.log("deactived");
  },
  data() {
    return {};
  },
  methods: {
   
  },
  mounted() {
   
  },
  components: {
    DashBord,
  },
};
</script>

<style scoped lang="scss">

</style>
