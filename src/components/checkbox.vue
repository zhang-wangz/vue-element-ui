<template>
  <div>
      <el-checkbox v-model="type">备选</el-checkbox>

      <div>
          <el-checkbox-group v-model="array">
            <el-checkbox label="复选框 A"></el-checkbox>
            <el-checkbox label="复选框 B"></el-checkbox>
            <el-checkbox label="复选框 C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
          </el-checkbox-group>
      </div>

      <div>
          <el-checkbox-group 
            v-model="checkedCities"
            :min="1"
            :max="2">
            <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </div>
  </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
    name:"checkbox",
    data() {
        return {
            type:true,
            array:["复选框 B"],
            cities:cityOptions,
            checkedCities: ['上海', '北京'],
        }
    },
}
</script>

<style>

</style>