<template>
  <div>
      <div>
          <span>默认</span>
          <el-slider v-model="value" :disabled="false" :show-tooltip="true" :format-tooltip="format"></el-slider>
      </div>

      <div>
          <span>默认备选</span>
          <el-slider 
          v-model="value" 
          :format-tooltip="format"
          :step="10"
          show-stops
          ></el-slider>
      </div>

      <div>
          <span>默认备选</span>
          <el-slider 
          v-model="value" 
          :format-tooltip="format"
          show-input
          show-input-controls
          @input="inputchange"
          ></el-slider>
      </div>

      <div>
          <span>默认备选</span>
          <el-slider 
          v-model="val1" 
          :format-tooltip="format"
          range
          show-stops
          :max="10"
          vertical
          height="200px"
          ></el-slider>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            value:50,
            val1:[1,2],
        }
    },
    methods: {
        format(val){
            return val/100
        },
        inputchange(val){
            console.log(val)
        }
    },
}
</script>

<style>

</style>