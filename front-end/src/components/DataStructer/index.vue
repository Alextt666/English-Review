<template>
  <div class="home-icon">
    <svg-icon icon-class="home" @click="BackBord" />
  </div>
</template>

<script>
import { getWords } from "@/api/request";

export default {
  name: "DataAnalyze",
  components: {},
  methods: {
    BackBord() {
      this.$router.push("/");
    },
  },
  created() {
    getWords().then((res) => {
      console.log(res, "res");
    });
  },
};
</script>

<style scoped lang="scss">
.home-icon {
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
}
</style>
