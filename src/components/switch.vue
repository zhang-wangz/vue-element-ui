<template>
  <div>
      <el-switch
      v-model="value"
      active-value=1
      inactive-value=0
      active-text="强"
      inactive-text="不强">
      </el-switch>
  </div>
</template>

<script>
export default {
    data() {
        return {
            value:1,
        }
    },
    methods: {
        
    },
}
</script>

<style>

</style>