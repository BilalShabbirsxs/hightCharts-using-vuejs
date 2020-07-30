<template>
  <div >
    <button @click="setUser()">Log out</button>
    <highcharts :options="chartOptions" ></highcharts>
      
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      seriesData: [],
      months: [],
      revenue: [],
      cost: [],
      profit: [],
      chartOptions: {
        chart: {
          type: 'spline'
        },
        title: {
          text: 'Growth Chart'
        },
        yAxis: {
        title: {
            text: 'Incommings'
              }
        },
        xAxis: {
          title: {
            text: 'Months'
              },
        categories: []
        },
        series: [],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
      }
    }
  },
  created () {
   
      const url = 'https://api.jsonbin.io/b/5f216dcd91806166284b5a2b'
      const response = axios.get(url,{
        headers: {
              'secret-key': '$2b$10$FKh4sUigY15yRqFs1RwXNeumUc/lK0dJiE59sTv0OnfggitiKRbpK'
            }
        })
        .then(response=>{
          this.seriesData = response.data
          console.log(response.data)

          response.data.forEach(element => {
            this.revenue.push(element.revenue)
            this.cost.push(element.cost)
            this.profit.push(element.revenue-element.cost)
            this.months.push(element.month)
          });

          // console.log(this.cost)
          // console.log(this.revenue)
          // console.log(this.profit)
          this.chartOptions.series = [{
            name: 'Revnue',
            data: this.revenue
            }, 
            {
            name: 'Cost',
            data: this.cost
            }, 
            {
            name: 'Profit',
            data: this.profit
            }, 
            ]
            this.chartOptions.xAxis.categories = this.months
        })
      
  },
  methods:{
     setUser(){
        //this.$emit('childToParent', false)
        this.$cookies.remove('user')
        location.reload();
    },
  }
}
</script>

<style scoped>
input[type="color"]::-webkit-color-swatch-wrapper {
  padding: 0;
}
#colorPicker {
  border: 0;
  padding: 0;
  margin: 0;
  width: 30px;
  height: 30px;
}
.numberInput {
  width: 30px;
}
</style>
