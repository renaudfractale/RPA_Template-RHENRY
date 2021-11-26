<template>
  <div id="chart1"></div>
  <h5>In</h5>
  <ul>
    <li v-for="(value, name) in xamlobjet.args.in" :key="name">
    {{ name }} : {{ value }} 
  </li>
  </ul>
</template>

<script>
import { GoogleCharts } from "google-charts";
export default {
  name: "InfoXaml",
  mixins: [GoogleCharts],
  props: {
    xamlobjet: Object,
  },
  components: {
    //VcDonut,
  },
   updated() {
       const Activitys = this.xamlobjet.Activitys
       this.$nextTick(function () {


    GoogleCharts.load(drawChart);

    function drawChart() {


      // Standard google charts functionality is available as GoogleCharts.api after load
      let tab = []
      tab.push(["Functions","occurence"])
      let activitys = Object.keys(Activitys)
      activitys.forEach(file => {
         tab.push([file,Activitys[file] ]) 
      })
      const data = GoogleCharts.api.visualization.arrayToDataTable(tab);
      const pie_1_chart = new GoogleCharts.api.visualization.PieChart(
        document.getElementById("chart1")
      );
      pie_1_chart.draw(data);
    }
    })
  },
  data() {
    return {
      nb: 50,
    };
  },
  };
</script>