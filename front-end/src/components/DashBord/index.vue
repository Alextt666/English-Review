<template>
  <div class="dashbord-page">
    <transition name="chat" mode="">
      <DashChat v-if="asyncShow" />
    </transition>
    <transition name="chat" mode="">
      <DashWrapper v-if="asyncShow" />
    </transition>
    <AuthorInfo />
  </div>
</template>
<script>
import DashWrapper from "./DashWrapper.vue";
import AuthorInfo from "./AuthorInfo.vue";
import DashChat from "./DashChat.vue";

export default {
  name: "Dash-bord",
  components: {
    DashWrapper,
    AuthorInfo,
    DashChat,
  },
  data() {
    return {
      asyncShow: false,
    };
  },
  async beforeMount() {
    // 未来接口 做准备
    function getPromise() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("success");
        }, 1500);
      });
    }
    const res = await getPromise();
    if (res === "success") {
      this.asyncShow = true;
    }
    console.log('dashbord-index')
  },
  mounted() {},
};
</script>
<style lang="scss">
.chat-enter-active,
.chat-leave-active {
  transition: opacity 0.8s ease;
}

.chat-enter-from,
.chat-leave-to {
  opacity: 0;
}

.dashbord-page {
  width: 100%;
  height: 100vh;
  position: relative;
}
.dashbord-chat {
  width: 35vw;
  position: absolute;
  right: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // border: 1px solid black;
  &__title {
    margin: 0 0 25px 0;
    font-size: 2.3rem;
    text-shadow: 10px #ccc;
  }
  &__content {
    width: 24rem;
    font-size: 1.2rem;
    font-weight: normal;
    text-align: justify;
  }
}

@media screen and (min-width:1445px)  {
  .dashbord-chat {
  width: 36vw;
  position: absolute;
  right: 16rem;
  top: 5rem;
  &__title {
    margin: 0 0 25px 0;
    font-size: 2.6rem;
  }
  &__content {
    width: 28rem;
    font-size: 1.4rem;
    font-weight: normal;
    text-align: justify;
  }
}
}
</style>
