<template>
  <div>
      <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
      <el-input-number v-model="num" :step="0.1" :precision="2" :min="1" :max="10" label="描述文字"></el-input-number>
      <el-input-number v-model="num" controls-position="right" :min="1" :max="10" label="描述文字"></el-input-number>
  </div>
</template>

<script>
export default {
    data() {
        return {
            num:1
        }
    },
    methods: {
        handleChange(val){
            console.log(val)
        }
    },
}
</script>

<style>

</style>