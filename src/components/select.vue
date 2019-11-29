<template>
  <div>
      <div>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>

            <el-select v-model="value" placeholder="select">
                <el-option
                    v-for="(item, index) in options" :key="index"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.disabled">
                </el-option>

            </el-select>
      </div>
      <div>
          <el-select
            v-model="value2"
            multiple
            
            style="margin-left: 20px;"
            placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
      </div>

      <div>
        <el-select v-model="value" placeholder="请选择">
            <el-option-group
            v-for="group in options1"
            :key="group.label"
            :label="group.label">
            <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
            </el-option-group>
        </el-select>          
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕',
                disabled:true
                }, {
                value: '选项2',
                label: '双皮奶'
                }, {
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
                }],
            options1: [{
                label:"热门食物",
                options:[{
                value: '选项1',
                label: '黄金糕',
                disabled:true
                }, {
                value: '选项2',
                label: '双皮奶',
                disabled:false
                }]},

                {
                label:"冷门食物",
                options:[{
                value: '选项3',
                label: '蚵仔煎'
                }, {
                value: '选项4',
                label: '龙须面'
                }, {
                value: '选项5',
                label: '北京烤鸭'
                }]
                }],
            value:"",
            value2:[],
        }
    },
}
</script>

<style>

</style>