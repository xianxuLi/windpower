<template>
  <div class="substationOperation">
    <div class="left">
        <div class="top box">
            <Title name="主变实时信息"></Title>
            <ul class="title">
                    <li>
                        <el-row>
                            <el-col :span="2">&nbsp;</el-col> <el-col :span="4">有功功率</el-col>
                            <el-col :span="4">功率因素</el-col> <el-col :span="3">油温1</el-col>
                            <el-col :span="3">油温2</el-col> <el-col :span="4">绕组温度</el-col>
                            <el-col :span="2">档位</el-col> 

                        </el-row>
                    </li>
                    </ul>
            <div class="scroll">
                <vue-seamless-scroll
                    ref="scroll"
                    :data="mainRealtime"
                    :class-option="defaultOption"
                >
                    <ul class="ul-scroll">
                        <li v-for="item in mainRealtime">
                            <el-row>
                                <el-col :span="2">{{item.index}}</el-col> <el-col :span="4">{{item.value1}}</el-col>
                                <el-col :span="4">{{item.value2}}</el-col> <el-col :span="3">{{item.value3}}</el-col>
                                <el-col :span="3">{{item.value4}}</el-col> <el-col :span="4">{{item.value5}}</el-col>
                                <el-col :span="2">{{item.value6}}</el-col> 

                            </el-row>
                        </li>
                    </ul>
                </vue-seamless-scroll>
            </div>
        </div>
        <div class="center box">
            <Title name="开关柜放监测"></Title>
            <ul class="head-titles">
                <li class="title" :class="[item == switchGear.active ? 'title-active':'']" v-for="(item,index) in switchGear.datas" :key="item">{{ item }}</li>
            </ul>
            <div class="echarts">
                <more-bar></more-bar>
            </div>
        </div>
        <div class="bottom box">
            <Title name="告警分类统计"></Title>
            <div class="echarts"> <Bar :echartDatas="crewDatas"></Bar></div>
        </div>
    </div>
    <div class="right">
        <div class="videos">
            <video style="width: 100%;height: 100%;"  controls="controls" autoplay muted loop object-fit="fill">  
                <source :src="require('@/assets/video/bdz_rightTop.mp4')" type="video/mp4" />
            </video>
        </div>
        <div class="scroll">
                <vue-seamless-scroll
                    ref="scroll"
                    :data="alarmDatas"
                    :class-option="defaultOption"
                >
                    <ul >
                        <li v-for="(item,index) in alarmDatas" :key="index">
                            <el-row>
                                    <el-col class="img" :span="4">
                                        <img width="44px" alt="" :src="require('@/assets/images/serious.png')"/>
                                    </el-col>
                                    <el-col class="name" :span="11">
                                        {{ item.name }}
                                    </el-col>
                                    <el-col class="time" :span="8">
                                        {{ item.time }}
                                    </el-col>
                            </el-row>
                        </li>
                    </ul>
                </vue-seamless-scroll>
        </div>
    </div>
    <div class="bottoms">
        <el-row>
            <el-col class="b-left b-col">
                <Title name="1号巡检机器人实时巡检结果"></Title>
                <div class="container">
                    <div class="scroll">
                        <vue-seamless-scroll
                            ref="scroll"
                            :data="robotDatas"
                            :class-option="defaultOption"
                        >
                            <ul >
                                <li v-for="(item,index) in robotDatas" :key="index">
                                    <el-row>
                                            <el-col class="name" :span="16">
                                                {{ item.name }}
                                            </el-col>
                                            <el-col class="value" :span="5">
                                                {{ item.value }}
                                            </el-col>
                                            <el-col class="cll" :span="3">
                                                {{ item.cell }}
                                            </el-col>
                                    </el-row>
                                </li>
                            </ul>
                        </vue-seamless-scroll>
                    </div>
                </div>
            </el-col>
            <el-col class="b-center  b-col">
                <Title name="1号巡检机器人巡检视频"></Title>
                <div class="container">
                    <video  style="width: 100%;height: 100%;"  controls="controls" autoplay muted loop object-fit="fill"> 
                        <source :src="require('@/assets/video/bdz_bottomLeft.mp4')" type="video/mp4" />
                    </video>
                </div>
            </el-col>
            <el-col class="b-right  b-col">
                <Title name="1号巡检机器人红外巡检视频"></Title>
                <div class="container">
                    <video style="width: 100%;height: 100%;"   controls="controls" autoplay muted loop > 
                        <source :src="require('@/assets/video/bdz_bottomRight.mp4')" type="video/mp4" />
                    </video>
                </div>
            </el-col>
        </el-row>
    </div>
    <Weather></Weather>
 </div>
</template>

<script>
import Title from  '@/components/Title.vue'
import Bar from '@/components/Bar.vue'
import moreBar from '@/components/moreBar.vue'
import Weather from '@/page/commons/weather'

export default {
  name: 'substationOperation',
  data() { 
    return {
     crewDatas: [
        {value: 347,name: "局放告警"},
        {value: 330,name: "铁心接地"},
        {value: 280,name: "油色谱"},
        {value: 347,name: "油温告警"},
        {value: 280,name: "绕组温度"},
        ],
        mainRealtime:[
            {index:"1号",value1:"112MW",value2:"0.93",value3:"16°C",value4:"25°C",value5:"17°C",value6:"8"},
            {index:"2号",value1:"112MW",value2:"0.93",value3:"16°C",value4:"25°C",value5:"17°C",value6:"8"},
            {index:"3号",value1:"112MW",value2:"0.93",value3:"16°C",value4:"25°C",value5:"17°C",value6:"8"},
            {index:"4号",value1:"112MW",value2:"0.93",value3:"16°C",value4:"25°C",value5:"17°C",value6:"8"},
            {index:"5号",value1:"112MW",value2:"0.93",value3:"16°C",value4:"25°C",value5:"17°C",value6:"8"},
            {index:"6号",value1:"112MW",value2:"0.93",value3:"16°C",value4:"25°C",value5:"17°C",value6:"8"},
            {index:"7号",value1:"112MW",value2:"0.93",value3:"16°C",value4:"25°C",value5:"17°C",value6:"8"}
        ],
        switchGear:{
            active:"1#",
            datas:["1#","2#","3#","4#"]
        },
        alarmDatas:[
            {name:"继电保护室屏柜监测设备离线",time:"2023-10-12 00:00:00"},
            {name:"继电保护室屏柜监测设备离线",time:"2023-10-12 00:00:00"},
            {name:"继电保护室屏柜监测设备离线",time:"2023-10-12 00:00:00"},
            {name:"继电保护室屏柜监测设备离线",time:"2023-10-12 00:00:00"},
            {name:"继电保护室屏柜监测设备离线",time:"2023-10-12 00:00:00"}
        ],
        robotDatas:[
            {name:"低压缸前连通管蒸汽压力1",value:"259.9",cell:"Kpa"},
            {name:"低压缸前连通管蒸汽压力2",value:"259.9",cell:"Kpa"},
            {name:"低压缸前连通管蒸汽压力3",value:"259.9",cell:"Kpa"},
            {name:"低压缸前连通管蒸汽压力4",value:"259.9",cell:"Kpa"},
            {name:"低压缸前连通管蒸汽压力5",value:"259.9",cell:"Kpa"},
        ]
    }
  },
  components:{
    Title,Bar,moreBar,Weather
  },
  methods:{

  },
 computed:{
        defaultOption() {
            return {
            step: 0.15, // 数值越大速度滚动越快
            limitMoveNum: this.alarmDatas.length, // 开始无缝滚动的数据量 this.dataList.length
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
.substationOperation{
   
    .left{
        width: 410px;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
        background: linear-gradient(90deg, rgba(2,14,24,0.6) 0%, rgba(2,14,24,0) 100%);
        z-index: 99;
        .box{
            background: linear-gradient(270deg, rgba(8,18,43,0.2) 0%, rgba(8,25,43,0.8) 100%);
            padding: 16px 17px;
        }
        .top{
            width: 100%;
            height: 252px;
            margin: 111px 0px 0px 30px;
            color: #FFFFFF;
            .title{
                    width: 410px;
                    height: 30px; 
                    line-height: 30px;
                    margin-top: 20px;
                    text-align: center;
                }
            .scroll{
                width: 100%;
                height: 150px;
                font-size: 14px;
                font-family: SourceHanSansCN-Regular, SourceHanSansCN;
                font-weight: 400;
                
                overflow: hidden;
              
                .ul-scroll{
                    width: 410px;
                    height:160px; 
                    margin-top: 20px;
                  //  overflow: hidden;
                    li{
                        height: 40px;
                        line-height: 40px;
                        text-align: center;
                    }
                }
            }
        }
        .center{
            width: 100%;
            height:351px;
            margin: 16px 0px 0px 30px;
            .head-titles{
                width: calc(47px * 4);
                height: 30px;
                margin: 20px auto 0px auto;
                text-align: center;
                .title{
                    width: 47px;
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
            .echarts{
                width: 100%;
                height: calc(100% - 60px );
            }
        }
        .bottom{
            width: 100%;
            height: 274px;
            margin: 16px 0px 0px 30px;
            .echarts{
                width: 100%;
                height: 240px;
            }
        }
    }
    .right{
        width: 423px;
        height:100%;
        background: linear-gradient(90deg, rgba(2,14,24,0) 0%, rgba(2,14,24,0.6) 100%);
        position: absolute;
        right: 0px;
        top: 0px;
        z-index: 99;
        .videos{
            width: 423px;
            height: 234px;
            background: linear-gradient(270deg, rgba(8,18,43,0.2) 0%, rgba(8,25,43,0.8) 100%);
            border-radius: 4px;
            margin:111px 30px 0px 0px;
            padding: 16px 17px;
            position: relative;
            right: 30px;
        }
        .scroll{
            width: 423px;
            height: 165px;
            background: linear-gradient(270deg, rgba(8,18,43,0.2) 0%, rgba(8,25,43,0.8) 100%);
            border-radius: 4px;
            overflow: hidden;
            margin-top: 16px;
          //  margin-right: 30px;
            position: relative;
            right: 30px;
        }
        ul{
            width: 423px;
            height: 165px;
            margin-top: 16px;
            ::v-deep .el-col{
                height: 40px;
                line-height: 40px;
                font-size: 14px;
                font-family: SourceHanSansCN-Regular, SourceHanSansCN;
                font-weight: 400;
                color: #FFFFFF;
                text-align: center;
               
            }
            .img{
                padding-top: 5px;
            }
            .name{
                text-align: left;
            }
            .time{
                text-align: left;
            }
        }
    }
    .bottoms{
       width:calc(100% - 410px - 60px);
      
        position: absolute;
        right: 30px;
        bottom: 60px;
        z-index: 99;
        .b-col{
           width: calc((100% - 16px * 3) * 0.3);
        }
        .b-col:first-child{
            width: calc((100% - 16px * 3) * 0.4);
        }
       
        .b-col{
          //  width: 423px;
            height: 274px;
            background: linear-gradient(270deg, rgba(8,18,43,0.2) 0%, rgba(8,25,43,0.8) 100%);
            //border-radius: 3px;
            margin-left: 16px;
            padding: 16px 17px;
            .container{
                width: 100%;
                height: calc(100% - 30px);
                margin-top: 16px;
                overflow: hidden;
                .el-col{
                    height: 40px;
                    line-height: 40px;
                    color: #ffffff;
                    text-align: left;
                    background: unset;
                    margin-left: 0px;
                    padding: 0px;
                
                }
            }
        }
    }
    video{
        object-fit:fill; 
    }
}
</style>