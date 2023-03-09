<template>
  <transition name="lot" mode="">
    <Lottie animateType="cat" propsId="lottie1" v-show="animateShow" />
  </transition>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script>
import Lottie from "@comp/Lottie";
export default {
  name: "App",
  data() {
    return {
      animateShow: true,
    };
  },
  methods: {
    handlePageReady() {
      const isShow = window.sessionStorage.getItem("animateShow");
      if (isShow === 'false') {
        this.animateShow = false;
      } else {
        setTimeout(() => {
          this.animateShow = false;
          window.sessionStorage.setItem("animateShow", false);
        }, 1000);
      }
    },
  },
  mounted() {
    this.handlePageReady();
  },
  components: {
    Lottie,
  },
};
</script>


<style lang="scss" src="./assets/common.scss" />

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  width: 100%;
  height: 100vh;
  background: linear-gradient(#81b29a, #f2cc8f);
  padding-top: 60px;
}
/* 下面我们会解释这些 class 是做什么的 */
.lot-enter-active,
.lot-leave-active {
  transition: opacity 0.8s ease;
}

.lot-enter-from,
.lot-leave-to {
  opacity: 0;
}

.bord-enter-active {
  transition: opacity 1.2s ease;
}

.bord-enter-from {
  opacity: 0;
}
</style>
