<template>
  <div>
    <el-time-select
        v-model="value"
        :picker-options="{
            start: '08:30',
            step: '00:15',
            end: '18:30'
        }"
        placeholder="选择时间">
    </el-time-select>

    <div>
          <el-time-picker
            v-model="value1"
            @change="inputchange"
            :picker-options="{
                selectableRange: '18:30:00-20:30:00'
            }"
            placeholder="任意时间点">
        </el-time-picker>
    </div>

    <div>
        <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
            v-model="value2"
            align="right"
            type="date"
            placeholder="选择日期"
            :picker-options="pickerOptions">
            </el-date-picker>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            value1:"",
            value:"",
            pickerOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                },
                shortcuts:[
                    {
                    text: '今天',
                    onClick(picker) {
                    picker.$emit('pick', new Date());
                    }
                }, {
                    text: '昨天',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24);
                    picker.$emit('pick', date);
                    }
                }, {
                    text: '一周前',
                    onClick(picker) {
                    const date = new Date();
                    date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', date);
                    }
                }]
                },
                }
    },
    methods: {
        inputchange(val){
            console.log(val)
        }
    },
}
</script>

<style>

</style>