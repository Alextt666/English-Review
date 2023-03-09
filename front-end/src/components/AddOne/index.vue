<template>
  <div class="ipt flex-column-center">
    <div class="ipt-input flex-center">
      <label for="en">En: </label>
      <input type="text" name="en" placeholder="English word" />
      <label for="cn">Cn: </label>
      <input type="text" name="cn" placeholder="Chinese word" />
    </div>
    <div style="max-height: 150px;overflow: scroll;">
      <template v-for="(item, index) in exampleLenth" :key="index">
        <div class="ipt-sentence">
          <label for="sentence">Example:</label>
          <input
            type="text"
            name="sentence"
            placeholder="English sentence / Chinese sentence"
          />
        </div>
      </template>
    </div>
    <div style="margin-top: 10px">
      <svg-icon icon-class="plus" class-name="icon" @click="handlePlusOne" />
    </div>
    <div class="ipt-btn">
      <button class="ipt-btn-submit" @click="handleSubmit">新 增</button>
    </div>
  </div>
  <div class="home-icon">
    <svg-icon icon-class="home" @click="BackBord" />
  </div>
</template>

<script>
import { ElMessage } from "element-plus";

export default {
  name: "Add-one",
  components: {},
  data() {
    return {
      exampleLenth: 1,
    };
  },
  methods: {
    BackBord() {
      this.$router.push("/");
    },
    handleSubmit() {
      ElMessage({
        type: "success",
        message: "新增成功",
      });
      console.log("新增");
    },
    handlePlusOne() {
      this.exampleLenth++;
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
input {
  width: 10rem;
  height: 2rem;
  margin: 0 1rem;
  border-radius: 10px;
  background-color: transparent;
  text-indent: 15px;
  font-size: 1rem;
  border: 2px solid $color-primary;
  color: $color-primary;
}
input::placeholder {
  color: $color-class;
}
label {
  font-size: 1rem;
}
.ipt {
  background-color: $color-deep-gray;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40vw;
  min-height: 300px;
  border: 1px solid $color-primary;
  border-radius: 10px;
  box-shadow: 0 0 10px $color-primary;
  box-sizing: border-box;
  justify-content: start;
  padding-top: 30px;
  &-input {
    margin-bottom: 1rem;
  }
  &-sentence {
    text-align: left;
    input {
      margin: 0.5rem 1rem;
      width: 26.5rem;
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
    &-submit:hover {
      background-color: $color-deep-gray;
      box-shadow: 0px 0px 10px $color-primary;
      transition: all 0.8s;
    }
  }
}
</style>
