<template>
  <div>
      <el-radio label="1" v-model="type">female</el-radio>
      <el-radio label="2" v-model="type">male</el-radio>


    <el-radio-group v-model="radio">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
    </el-radio-group>


    <el-radio-group v-model="radio1">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>

    <div style="margin-top: 20px">
        <!-- 直接在组里面使用 -->
    <el-radio-group v-model="radio2" size="medium">
      <el-radio-button label="上海" ></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>


    <el-radio-group v-model="radio3">
        <!-- border为真时候 size可以使用在子组件 -->
        <el-radio label="s" border="2px" size="small"></el-radio>
        <el-radio label="z" disabled border size="medium"></el-radio>
        <el-radio label="x"></el-radio>
    </el-radio-group>
  </div>
  </div>
</template>

<script>
export default {
    name:'radio',
    data() {
        return {
            type:"1",
            radio:"2",
            radio1:"",
            radio2:"",
            radio3:"",
        }
    },
}
</script>

<style>

</style>