<template>
  <div>
      <div>
          <el-input v-model="input" disabled placeholder="请输入内容"></el-input>
          <el-input v-model="input" 
           placeholder="请输入内容"
           clearable
           ></el-input>

           <el-input show-password v-model="input"></el-input>

      </div>

      <div class="demo-input-suffix">
        <!-- 属性方式： -->
        <!-- 前缀图标 -->
        <el-input
            placeholder="请选择日期"
            suffix-icon="el-icon-date"
            v-model="input1">
        </el-input>
        <!-- 后缀图标 -->
        <el-input
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input2">
        </el-input>
    </div>

    <!-- 文本类型 -->
    <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="textarea1">
    </el-input>
    <div style="margin: 20px 0;"></div>
    <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入内容"
        v-model="textarea2">
    </el-input>

    <div style="margin-top: 15px;"></div>
    <div>
        <el-input placeholder="请输入内容" v-model="input1">
            <!-- 前置 -->
            <template slot="prepend">Http://</template>
            <!-- <template slot="prepend">http://></template> -->
        </el-input>
    </div>
    <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="input2">
            <!-- 后置 -->
            <template slot="append">.com</template>
        </el-input>
    </div>

    <el-input
        type="text"
        placeholder="请输入内容"
        v-model="text"
        maxlength="10"
        show-word-limit
    >
    </el-input>

    <!-- input还有从服务端获取提示数据的组件 -->
  </div>
</template>

<script>
export default {

    data() {
        return {
            input:"",
            input1:"",
            input2:"",
            text:"",
        }
    },
}
</script>

<style>

</style>