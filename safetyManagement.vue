<template>
  <div class="safetyManagement">
    <div class="left">
        <div class="top box">
            <Title name="巡检统计"></Title>
            <ul class="head-titles">
                <li @click="leftTopTitleClick(item)" class="title" :class="[item == topDataActive ? 'title-active':'']" v-for="(item,index) in topDatas" :key="item">{{ item }}</li>
            </ul>
            <div class="scroll">
                <vue-seamless-scroll
                    ref="scroll"
                    :data="alarmDatas"
                    :class-option="defaultOption"
                >
                    <ul >
                        <li v-for="item in 5">
                            <div class="img">
                            <img width="44px" alt="" :src="require('@/assets/images/serious.png')"/>
                            </div>
                            <span class="name">姓名：张安安</span>
                            <span class="position">风机叶片损伤</span>
                            <span class="time">电话：13512565236</span>
                            <span class="handle">2023-11-01 00:00:00</span>
                        </li>
                    </ul>
                </vue-seamless-scroll>
            </div>
        </div>
        <div class="center box">
            <Title name="告警分类统计"></Title>
            <div class="echart">
                    <stackBar :echartDatas="alarmTypeDatas"></stackBar>
            </div>
        </div>
        <div class="bottom box">
            <Title name="风机监控画面轮播"> </Title>
            <el-checkbox class="videoInterVal" v-model="videoInterVal" @change="change">画面轮播</el-checkbox>
            
            <ul class="head-titles">
                <li @click="monitorTitleClick(item)" class="title" :class="[item == monitorActive ? 'title-active':'']" v-for="(item,index) in monitorTitles" :key="item">{{ item }}</li>
            </ul>
            <video v-if="!videoInterVal"  style="width: calc(100% - 0px);height: calc(100% - 60px);margin-top: 5px;"  controls="controls" autoplay muted loop object-fit="fill"> 
                <source :src="require('@/assets/video/aqgl_leftBottom.mp4')" type="video/mp4" />
            </video>

            <el-carousel style="height: calc(100% - 60px);margin-top: 5px;" v-else @change="carouselChange">
                <el-carousel-item v-for="item in 4" :key="item">
                    <video  style="width: calc(100% - 0px);height: 100%"  controls="controls" autoplay muted loop object-fit="fill"> 
                        <source :src="require('@/assets/video/aqgl_leftBottom.mp4')" type="video/mp4" />
                    </video>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
    <div class="right">
        <div class="top box">
            <Title name="电子围栏实时预警"></Title>
            <ul class="ul-title">
                    <li>
                        <el-row>
                            <el-col :span="6">船舶编号</el-col> <el-col :span="8">入侵时间</el-col>
                            <el-col :span="8">离开时间</el-col> <el-col :span="2">操作</el-col>
                        </el-row>
                    </li>
                    </ul>
            <div class="scroll">
                <vue-seamless-scroll
                    ref="scroll"
                    :data="rightDatas1"
                    :class-option="defaultOption2"
                >
                    <ul class="ul-scroll">
                        <li v-for="item in rightDatas1">
                            <el-row>
                                <el-col :span="6">{{item.value1}}</el-col> <el-col :span="8">{{item.value2}}</el-col>
                                <el-col :span="8">{{item.value3}}</el-col> <el-col :span="2">查看</el-col>
                            </el-row>
                        </li>
                    </ul>
                </vue-seamless-scroll>
            </div>
        </div>
        <div class="center1 box">
            <Title name="风机实时预警"></Title>
            <ul class="ul-title">
                    <li>
                        <el-row>
                            <el-col :span="6">风机编号</el-col> <el-col :span="8">事件描述</el-col>
                            <el-col :span="8">发生时间</el-col> <el-col :span="2">操作</el-col>
                        </el-row>
                    </li>
                    </ul>
            <div class="scroll">
                <vue-seamless-scroll
                    ref="scroll"
                    :data="rightDatas2"
                    :class-option="defaultOption2"
                >
                    <ul class="ul-scroll">
                        <li v-for="item in rightDatas2">
                            <el-row>
                                <el-col :span="6">{{item.value1}}</el-col> <el-col :span="8">{{item.value2}}</el-col>
                                <el-col :span="8">{{item.value3}}</el-col> <el-col :span="2">查看</el-col>
                            </el-row>
                        </li>
                    </ul>
                </vue-seamless-scroll>
            </div>
        </div>
        <div class="center2 box">
            <Title name="海缆实时预警"></Title>
            <ul class="ul-title">
                    <li>
                        <el-row>
                            <el-col :span="6">风机编号</el-col> <el-col :span="8">事件描述</el-col>
                            <el-col :span="8">发生时间</el-col> <el-col :span="2">操作</el-col>
                        </el-row>
                    </li>
                    </ul>
            <div class="scroll">
                <vue-seamless-scroll
                    ref="scroll"
                    :data="rightDatas3"
                    :class-option="defaultOption2"
                >
                    <ul class="ul-scroll">
                        <li v-for="item in rightDatas3">
                            <el-row>
                                <el-col :span="6">{{item.value1}}</el-col> <el-col :span="8">{{item.value2}}</el-col>
                                <el-col :span="8">{{item.value3}}</el-col> <el-col :span="2">查看</el-col>
                            </el-row>
                        </li>
                    </ul>
                </vue-seamless-scroll>
            </div>
        </div>
        <div class="bottom box">
            <Title :name="examineActive"></Title>
            <ul class="head-titles">
                <li @click="examineTitleClick(item)" class="title" :class="[item == examineActive ? 'title-active':'']" v-for="(item,index) in examineTitles" :key="item">{{ item }}</li>
            </ul>
           <div class="echart"> 
            <Pie :echartDatas="examineDatas[examineActive]" ref="examine"></Pie>
         </div>
        </div>
    </div>
    <Weather></Weather>
    <div class="rightButtons">
        <div class="button" @click="buttonClick('检修工作申请')">检修工作申请</div> <div class="button" @click="buttonClick('检修计划明细')">检修计划明细</div>
    </div>

    <el-dialog :title="dialogTitle"  :visible.sync="dialogVisible"   width="60%" class="dialog" :modal="false">
            <div class="searchs">
                检修工作申请: <el-input  prefix-icon="el-icon-search" v-model="input1"></el-input>

                <el-radio-group v-model="examineType" size="small" class="examineTypes" @change="examineTypeChange" v-if="dialogTitle == '检修工作申请'">
                    <el-radio-button label="待审批"></el-radio-button>
                    <el-radio-button label="已审批"></el-radio-button>
                </el-radio-group>

            </div>
            <el-table :data="tableData" style="width: 100%" v-if="dialogTitle == '检修计划明细'">
                <el-table-column prop="value1" label="任务编号"  width="140" align="center"></el-table-column>
                <el-table-column prop="value2" label="任务名称"  width="100" align="center"></el-table-column>
                <el-table-column prop="value3" label="任务状态"  width="100" align="center"></el-table-column>
                <el-table-column prop="value4" label="检修负责人"  width="100" align="center"></el-table-column>
                <el-table-column prop="value5" label="检修内容"  width="100" align="center"></el-table-column>
                <el-table-column prop="value6" label="检修时间"  width="180" align="center"></el-table-column>
                <el-table-column prop="value7" label="检修结果"  width="100" align="center"></el-table-column>
                <el-table-column prop="value8" label="后续处理措施"  width="120" align="center"></el-table-column>
                <el-table-column prop="value9" label="录入渠道"  width="100" align="center"></el-table-column>
                <el-table-column prop="value10" label="录入人"  width="100" align="center"></el-table-column>
                <el-table-column prop="value11" label="录入时间"  width="140" align="center"></el-table-column>
            </el-table>

            <el-table :data="tableData2" style="width: 100%" v-if="dialogTitle == '检修工作申请' && examineType == '待审批'">
                <el-table-column prop="value1" label="申请编号"  width="140" align="center"></el-table-column>
                <el-table-column prop="value2" label="申请人"  width="80" align="center"></el-table-column>
                <el-table-column prop="value3" label="计划时间范围"  width="300" align="center"></el-table-column>
                <el-table-column prop="value4" label="是否具备海上作业条件"  width="180" align="center"></el-table-column>
                <el-table-column prop="value5" label="巡检目标"  width="150" align="center"></el-table-column>
                <el-table-column prop="value6" label="备注"  width="120" align="center"></el-table-column>
                <el-table-column label="操作"  width="140" align="center">
                    <template slot-scope="scope">
                        <el-button size="mini  ">审批</el-button>
                        <el-button size="mini  " type="danger" >驳回</el-button>
                    </template>
                   
                </el-table-column>
            </el-table>
            <el-table :data="tableData3" style="width: 100%" v-if="dialogTitle == '检修工作申请' && examineType == '已审批'">
                <el-table-column prop="value1" label="申请编号"  width="140" align="center"></el-table-column>
                <el-table-column prop="value2" label="申请人"  width="80" align="center"></el-table-column>
                <el-table-column prop="value3" label="计划时间范围"  width="300" align="center"></el-table-column>
                <el-table-column prop="value4" label="是否具备海上作业条件"  width="180" align="center"></el-table-column>
                <el-table-column prop="value5" label="巡检目标"  width="150" align="center"></el-table-column>
                <el-table-column prop="value6" label="备注"  width="80" align="center"></el-table-column>
                <el-table-column prop="value7" label="审批人员"  width="100" align="center"></el-table-column>
                <el-table-column prop="value8" label="审批时间"  width="180" align="center"></el-table-column>
                <el-table-column prop="value9" label="审批结果"  width="140" align="center"></el-table-column>
                
            </el-table>
            <el-pagination :page-size="6"  layout="total, prev, pager, next" :total="6"></el-pagination>
    </el-dialog>
    <div class="right-top">
        <el-row>
            <el-col v-for="item in rightTopDatas" :key="item.name">
                <div class="name">
                    <img width="10px" alt="" :src="require('@/assets/images/lightning.png')"/>
                    {{item.name}} &nbsp; 
                </div>
                <span class="value">&nbsp; {{ item.value }} <span class="cell">个</span></span>
                <span class="value">&nbsp; {{ item.value2 }} <span class="cell">%</span></span>
            </el-col>
        </el-row>
    </div>

 </div>
</template>

<script>
import Title from  '@/components/Title.vue'
import stackBar from  '@/components/stackBar.vue'
import Pie from  '@/components/Pie.vue'
import Weather from '@/page/commons/weather'
export default {
  name: 'safetyManagement',
  data() { 
    return {
      topDatas:["人员（8）","无人机（8）","机器人（8）"],
      topDataActive:"人员（8）",
      alarmDatas:[
            {name:"11",phone:"13512565325",time:"2023-10-12 00:00:00"},
            {name:"11",phone:"13512565325",time:"2023-10-12 00:00:00"},
            {name:"11",phone:"13512565325",time:"2023-10-12 00:00:00"},
            {name:"11",phone:"13512565325",time:"2023-10-12 00:00:00"},
            {name:"11",phone:"13512565325",time:"2023-10-12 00:00:00"}
        ],
        alarmTypeDatas:{
            yAxisData:[
              "电子围栏",
              "海缆安全",
              "风机异常",
              "主变异常",
              "设备异常",
            ],
            yAxisData2: ["已完成:60,进度:100%", "已完成:40,进度:70%", "已完成:20,进度:33.3%", "已完成:10,进度:20%", "已完成:10,进度:10%"],
            colors:['#64B1EA','#5FFFD5'],
            names:["总数","已完成"],
            values:[
            [100, 50, 60, 60, 60], [10, 10, 20, 40, 60]
            ]
        },
        monitorTitles:['监控01','监控02','监控03','监控04'],
        monitorActive:"监控01",
        rightDatas1:[
            {value1:"F1558",value2:"04-09 10:43:25",value3:"04-10 10:53:25"},
            {value1:"F1558",value2:"04-09 10:43:25",value3:"04-10 10:53:25"},
        ],
        rightDatas2:[
            {value1:"F1558",value2:"机舱控制柜温度高",value3:"04-10 10:53:25"},
            {value1:"F1558",value2:"机舱控制柜温度高",value3:"04-10 10:53:25"},
        ],
        rightDatas3:[
            {value1:"F1558",value2:"1#段遭受侵害",value3:"04-10 10:53:25"},
            {value1:"F1558",value2:"1#段遭受侵害",value3:"04-10 10:53:25"},
        ],
        examineTitles:['检修故障占比','检修情况占比'],
        examineActive:"检修故障占比",
        examineDatas:{
           "检修故障占比": {
                colors: ['#5744FF','#0092FF', '#88F3A1'],
                legend:['高','中','低'],
                value:[
                        { "name": "高", "value": 30 },
                        { "name": "中", "value": 10 },
                        { "name": "低", "value": 15 },
                    ]
            },
           "检修情况占比": {
                colors: ['#FF8055','#FFDE55', '#0092FF','#5744FF', '#88F3A1'],
                legend:['无法检修','未检修','部分检修','无需检修','已检修'],
                value:[
                        { "name": "无法检修", "value": 30 },
                        { "name": "未检修", "value": 10 },
                        { "name": "部分检修", "value": 15 },
                        { "name": "无需检修", "value": 20 },
                        { "name": "已检修", "value": 10 },
                    ]
            },
        },
        dialogVisible:false,
        input1:"",
        dialogTitle:"",
        tableData:[
            ,{value1:"RW2020202002313",value2:"海上巡检",value3:"待派工",value4:"张三",value5:"日常检修",value6:"2022-10-10至2023-01-01",value7:"",value8:"",value9:"",value10:"",value11:"",}
            ,{value1:"RW2020202002314",value2:"海上巡检",value3:"已派单",value4:"彭工",value5:"日常检修",value6:"2022-10-10至2023-01-01",value7:"",value8:"",value9:"",value10:"",value11:"",}
            ,{value1:"RW2020202002315",value2:"海上巡检",value3:"已接单",value4:"彭工",value5:"日常检修",value6:"2022-10-10至2023-01-01",value7:"",value8:"",value9:"",value10:"",value11:"",}
            ,{value1:"RW2020202002316",value2:"海上巡检",value3:"待检修",value4:"彭工",value5:"日常检修",value6:"2022-10-10至2023-01-01",value7:"",value8:"",value9:"",value10:"",value11:"",}
            ,{value1:"RW2020202002317",value2:"海上巡检",value3:"检修中",value4:"彭工",value5:"风机检修",value6:"2022-10-10至2023-01-01",value7:"",value8:"",value9:"",value10:"",value11:"",}
            ,{value1:"RW2020202002318",value2:"海上巡检",value3:"检修完成",value4:"彭工",value5:"风机检修",value6:"2022-10-10至2023-01-01",value7:"部分检修",value8:"再次派工检修",value9:"手机APP",value10:"张三",value11:"2022-11-12 10:00:00",}
        ],
        examineType:"待审批",
        tableData2:[
            ,{value1:"XJ2020202002313",value2:"张小刚",value3:"2022-01-01 10:00:00~2023-01-01 10:00:00",value4:"是",value5:"风机2#、5#、7#群",value6:"快审批"}
            ,{value1:"XJ2020202002314",value2:"李小红",value3:"2022-01-01 10:00:00~2023-01-01 10:00:00",value4:"是",value5:"风机3#回路异常",value6:"快审批"}
            ,{value1:"XJ2020202002315",value2:"王小明",value3:"2022-01-01 10:00:00~2023-01-01 10:00:00",value4:"是",value5:"",value6:"快审批"}
            ,{value1:"XJ2020202002316",value2:"周小伟",value3:"2022-01-01 10:00:00~2023-01-01 10:00:00",value4:"是",value5:"",value6:"别管"}
            ,{value1:"XJ2020202002317",value2:"郭小涛",value3:"2022-01-01 10:00:00~2023-01-01 10:00:00",value4:"否",value5:"",value6:""}
            ,{value1:"XJ2020202002318",value2:"张小刚",value3:"2022-01-01 10:00:00~2023-01-01 10:00:00",value4:"否",value5:"",value6:""}
        ],
        tableData3:[
            ,{value1:"XJ2020202002313",value2:"张小刚",value3:"2022-01-01 10:00:00~2023-01-01 10:00:00",value4:"是",value5:"风机2#、5#、7#群",value6:"快审批",value7:"张三",value8:"2022-01-01 10:00:00",value9:"同意"}
            ,{value1:"XJ2020202002314",value2:"李小红",value3:"2022-01-01 10:00:00~2023-01-01 10:00:00",value4:"是",value5:"风机3#回路异常",value6:"快审批",value7:"张三",value8:"2022-01-01 10:00:00",value9:"同意"}
            ,{value1:"XJ2020202002315",value2:"王小明",value3:"2022-01-01 10:00:00~2023-01-01 10:00:00",value4:"是",value5:"",value6:"快审批",value7:"张三",value8:"2022-01-01 10:00:00",value9:"同意"}
            ,{value1:"XJ2020202002316",value2:"周小伟",value3:"2022-01-01 10:00:00~2023-01-01 10:00:00",value4:"是",value5:"",value6:"别管",value7:"张三",value8:"2022-01-01 10:00:00",value9:"同意"}
            ,{value1:"XJ2020202002317",value2:"郭小涛",value3:"2022-01-01 10:00:00~2023-01-01 10:00:00",value4:"否",value5:"",value6:"",value7:"张三",value8:"2022-01-01 10:00:00",value9:"不同意"}
            ,{value1:"XJ2020202002318",value2:"张小刚",value3:"2022-01-01 10:00:00~2023-01-01 10:00:00",value4:"否",value5:"",value6:"",value7:"张三",value8:"2022-01-01 10:00:00",value9:"同意"}
        ],
        videoInterVal:"",
        rightTopDatas:[
              {name:"今日检修情况",value:"90",value2:"40"},
              {name:"本周检修情况",value:"320",value2:"25"},
              {name:"本月检修情况",value:"523",value2:"25"},
              {name:"今年检修情况",value:"1920",value2:"10"}
          ],
    }
  },
  components:{
    Title,stackBar,Pie,Weather
  },
  methods:{
    leftTopTitleClick(item){
        this.topDataActive = item
    },
    monitorTitleClick(item){
        this.monitorActive = item
    },
    examineTitleClick(item){
        this.examineActive = item;
        this.$nextTick(()=>{
            this.$refs.examine.initEcharts()
        })
    },
    buttonClick(type){
        this.dialogVisible = true
        this.dialogTitle = type
    },
    examineTypeChange(e){
        this.examineType = e
    },
    change(e){

    },
    carouselChange(e){
        this.monitorActive = this.monitorTitles[e]
    }
  },
 computed:{
        defaultOption() {
            return {
            step: 0.15, // 数值越大速度滚动越快
            limitMoveNum:this.alarmDatas.length, // 开始无缝滚动的数据量 this.dataList.length
            hoverStop: true, // 是否开启鼠标悬停stop
            direction: 1, // 0向下 1向上 2向左 3向右
            openWatch: true, // 开启数据实时监控刷新dom
            singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
            singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
            waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
            };
      },
      defaultOption2() {
            return {
            step: 0.15, // 数值越大速度滚动越快
            limitMoveNum:this.rightDatas3.length, // 开始无缝滚动的数据量 this.dataList.length
            hoverStop: true, // 是否开启鼠标悬停stop
            direction: 1, // 0向下 1向上 2向左 3向右
            openWatch: true, // 开启数据实时监控刷新dom
            singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
            singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
            waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
            };
      }
 },
  mounted() {

  },
 }
</script>

<style lang='scss' scoped>
.safetyManagement{
    .box{
        background: linear-gradient(270deg, rgba(8,18,43,0.2) 0%, rgba(8,25,43,0.8) 100%);
        border-radius: 4px;
        width: 100%;
        padding: 16px 17px;
    }
    .head-titles{ 
        height: 30px;
        margin: 20px auto 0px auto;
        text-align: center;
        .title{
            
            height: 30px;
            color: #FFFFFF;
            //filter: blur(3px);
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            float: left;
            text-align: center;
            line-height: 30px;
        }
        .title-active{
            background: linear-gradient(180deg, rgba(125,164,230,0) 0%, rgba(125,164,230,0.7) 100%);
        }
    }
    .left{
        width: 410px;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        background: linear-gradient(90deg, rgba(2,14,24,0.6) 0%, rgba(2,14,24,0) 100%);
        z-index: 99;
        .top{
            width: 410px;
            height: 300px;  
            margin: 111px 0px 0px 30px;
            .head-titles{
                width: calc(110px * 3);
                .title{
                    width: 110px;
                }
            }
            .scroll {
        width: 380px;
        height: 190px;
        margin-top: 16px;
        overflow: hidden;
        li{
            position: relative;
            width: 380px;
            height: 75px;
            color: #FFFFFF;
            margin-top: 16px;
            .img{
                width: 120px;
                height: 75px;
                position: absolute;
                left: 0px;
                background-image: url('@/assets/images/alarm.png');
                background-size: 100% 100%;
            }
            .name{
                position: absolute;
                left: 135px;
                top: 0px;
                font-size: 12px;
                font-family: SourceHanSansCN-Medium, SourceHanSansCN;
                font-weight: 500;
            }
            .position{
                position: absolute;
                left: 135px;
                top: 50%;
                bottom: 50%;
                margin: auto;
                font-size: 12px;
                font-family: SourceHanSansCN-Regular, SourceHanSansCN;
                font-weight: 400;
                display: inline-block;
                width: calc(100% - 155px);
                height: 30px;
                line-height: 30px;
                img{
                    position: absolute;
                    top: 58%;
                    bottom: 50%;
                    margin: auto;
                }
                span{
                    position: absolute;
                    height: 23px;
                    left: 30px;
                    top: 50%;
                    bottom: 50%;
                    margin: auto;
                }
            }
            .time{
                position: absolute;
                left: 135px;
                bottom: 0px;
                font-size: 12px;
                font-family: SourceHanSansCN-Medium, SourceHanSansCN;
                font-weight: 500;
               
            }
            .handle{
                position: absolute;
                right: -20px;
                top: 0px;
                width: 150px;
            }
        }
    }
        }
        .center{
            width: 410px;
            height: 246px; 
            margin: 16px 0px 0px 30px;
            .echart{
                width: 100%;
                height: 200px;
            } 
        }
        .bottom{
            width: 410px;
            height: 331px;  
            margin: 16px 0px 0px 30px;
            position: relative;
            .head-titles{
                width: calc(80px * 4);
                .title{
                    width: 80px;
                }
            }
            .videoInterVal{
                position: absolute;
                top: 17px;
                right: 13px;
                color: #ffffff;
            }
            ::v-deep .el-carousel__container{
                height: 100%!important;
            }
        }
    }
    .right{
        width: 410px;
        height: 100%;
        position: absolute;
        right: 0px;
        top: 0px;
        background: linear-gradient(90deg, rgba(2,14,24,0) 0%, rgba(2,14,24,0.6) 100%);
        z-index:99;
        color: #FFFFFF;
        ::v-deep .el-col{
            font-size: 14px;
            font-family: SourceHanSansCN-Regular, SourceHanSansCN;
            font-weight: 400;
            color: #FFFFFF;
            height: 40px;
            line-height: 40px;

        }
        .ul-title{
            height: 40px;
            line-height: 40px;
            margin-top: 20px;
        }
        .scroll{
            height: calc(100% - 70px);
            overflow: hidden;
        }
        .top{
            width: 410px;
            height: 179px;
            margin: 111px 0px 0px 0px;
            position: relative;
            right: 30px;
        }
        .center1{
            width: 410px;
            height: 179px;
            margin: 16px 0px 0px 0px;
            position: relative;
            right: 30px;
        }
        .center2{
            width: 410px;
            height: 179px;
            margin: 16px 0px 0px 0px;
            position: relative;
            right: 30px;
        }
        .bottom{
            width: 410px;
            height: 324px;
            margin: 16px 0px 0px 0px;
            position: relative;
            right: 30px;
            .head-titles{
                width: calc(120px * 2);
                .title{
                    width: 120px;
                }
            }
            .echart{
                width: 100%;
                height: calc(100% - 60px);
            }
        }
    }
    .rightButtons{
        position: absolute;
        right: 456px;
        z-index: 999;
        width: 220px;
        height: 35px;
        line-height: 35px;
        background: rgba(8,18,43,0.3);
        color: #ffffff;
        text-align: center;
        border-radius: 25px;
        .button{
            width: 110px;
            float: left;
        }
    }
    .right-top{
        width: 190px;
        height: 250px;
        background: linear-gradient(270deg, rgba(8,18,43,0.2) 0%, rgba(8,25,43,0.8) 100%);
        border-radius: 30px 0px 30px 0px;
        padding: 0px 0px 20px 10px;
        position: absolute;
        top: 160px;
        right: 456px;
        z-index: 999;
        .el-row{
                  height: 50px;
                  padding: 10px 10px 20px 10px;
                  margin-top: 10px;
                  .name{   
                      font-size: 12px;
                      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
                      font-weight: 400;
                      color: #ffffffe8;
                  }
                  .value{
                      font-size: 20px;
                      font-family: PangMenZhengDao;
                      color: #FFFFFF;
                      display: inline-block;
                        width:80px;
                        float: left;
                      .cell{
                        font-size: 14px;
                        color: #ffffffb6;
                      }
                  }
              }
    }
   
  
}

</style>
<style lang='scss'>
.dialog{
    .searchs{
        color: #ffffff;
        font-size: 16px;
        margin: 0px 0px 10px 0px;
        .el-input{
            width: 200px;
           
        }
        .el-input__inner{
            background-color: unset;
            color: #FFFFFF;
            border: 1px solid #525762b9;
        }
        .examineTypes{
            position: absolute;
            right: 30px ;
        }
    }
    .el-dialog__body{
        padding: 10px 20px 20px 20px;
    }
    .el-dialog__title{
        color: #ffffff;
        font-size: 20px;
        font-weight: bold;
    }
    .el-table{
        background-color: unset !important;
        tr{
            background-color: unset!important;
        }
        
        .el-table__body tr:hover>td{
            background-color: #6494ed80 !important;
        }
         td.el-table__cell,th.el-table__cell.is-leaf {
            border-bottom: 1px solid #6a76935e!important;
            color: #ffffff!important;
        }
         th.el-table__cell{
            background-color: unset!important;
            background: linear-gradient(180deg, rgba(125,164,230,0) 0%, rgba(125,164,230,0.7) 100%)!important;
            color: #ffffff!important;
            font-size: 16px;
        }
    }
    .el-table::before{
        background-color: unset!important;
    }
}
.el-pagination .btn-next, .el-pagination .btn-prev{
         background: unset!important; 
}
.el-pager li{
    background-color: unset!important; 
}
.el-pagination{
    padding-top: 10px!important;
    text-align: center;
}
.el-button--mini {
    padding: 5px 10px!important;
}
</style>