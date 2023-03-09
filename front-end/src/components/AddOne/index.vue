<template>
  <div class="ipt flex-column-center">
    <div class="ipt-input flex-center">
      <label for="en">En: </label>
      <input type="text" name="en" />
      <label for="cn">Cn: </label>
      <input type="text" name="cn" />
    </div>
    <div class="ipt-btn"></div>
  </div>
  <div class="home-icon">
    <svg-icon icon-class="home" @click="BackBord" />
  </div>
</template>

<script>
export default {
  name: "Add-one",
  components: {},
  methods: {
    BackBord() {
      this.$router.push("/");
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
.home-icon {
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
}
.ipt {
  &-input {
  }
}
</style>
