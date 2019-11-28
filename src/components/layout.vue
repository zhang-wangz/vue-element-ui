<template>
<div>
    <!-- gutter 分栏距离 -->
    <el-row :gutter="10" type="flex" justify="center" align="top">
        <el-col :span="6" :offset="2"><div class="grid-content bg-purple"></div></el-col>
        <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
        <el-col :span="6" ><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20">
        <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
</div>
</template>

<script>
export default {
    name:"layout",
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>
.bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }

</style>