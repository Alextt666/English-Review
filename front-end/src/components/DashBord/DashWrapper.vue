<template>
  <div class="dashbord-wrapper flex-ar">
    <div class="dashbord-item flex-center">
      <router-link to="analyze">Start</router-link>
    </div>
    <div class="dashbord-item flex-center">
      <router-link to="addone">Add-New</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dash-wrapper",
  methods: {
   
  },
};
</script>
<style lang="scss" scoped>
@import '@/assets/globalColor.scss';
.dashbord-wrapper {
  width: 30vw;
  position: absolute;
  bottom: 12rem;
  left: 10rem;
  .dashbord-item {
    width: 8rem;
    height: 6rem;
    border-radius: 15px;
    background: $color-primary-gray;
    box-shadow: -20px 20px 29px #94a4a4, 20px -20px 29px #c8dede;
    transition: all 0.7s;
    cursor: pointer;
  }
  .dashbord-item:hover {
    translate: -10px -5px;
    transition: all 0.7s;
    box-shadow: -20px 20px 29px #c8dede, 20px -20px 29px #94a4a4;
  }
}
@media screen and (min-width: 1445px) {
  .dashbord-wrapper {
    width: 26vw;
    position: absolute;
    bottom: 16rem;
    left: 20rem;
    .dashbord-item {
    width: 9.6rem;
    height: 7.2rem;
   
  }
  }

}
</style>
