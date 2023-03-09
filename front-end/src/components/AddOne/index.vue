<template>
  <div class="ipt flex-column-center">
    <div class="ipt-input flex-center">
      <label for="en">En: </label>
      <input type="text" name="en" />
      <label for="cn">Cn: </label>
      <input type="text" name="cn" />
    </div>
    <div class="ipt-btn">
      <button class="ipt-btn-submit">新增</button>
    </div>
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
@import "@/assets/globalColor.scss";
.home-icon {
  position: absolute;
  bottom: 1rem;
  left: 1.5rem;
}
.ipt {
  &-input {
    input{
    width: 10rem;
    height: 2rem;
    margin: 0 1rem;
    border-radius: 10px;
    background-color: transparent;
      border: 1px solid $color-primary;
      color: $color-primary;
    }
  }
  &-btn {
    &-submit {
      margin-top: 1.5rem;
      border-radius: 10px;
      color: $color-primary;
      background: $color-primary-gray; /* fallback for old browsers */
      width: 80px;
      height: 30px;
      cursor: pointer;
    }
    &-submit:hover{
       background-color: $color-deep-gray;
       transition: all .8s;
    }
  }
}
</style>
