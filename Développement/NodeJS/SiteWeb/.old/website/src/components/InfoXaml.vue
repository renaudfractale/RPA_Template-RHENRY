<template>
  <div class="input-field col s12">
    <input
      placeholder="Placeholder"
      id="first_name"
      type="text"
      class="validate"
      v-model="filexaml"
      @change="updatelistXaml"
    />
    <label for="first_name">Fichier à analyser</label>
  </div>
 <div class="collection">
  <a v-for="(value, name) in listeXamlsFiles" :value="name" :key="name">
    {{ name }}
  </a>
   </div>
  <div id="chart1"></div>
  <div class="container">
    <div class="section">
      <!--   Icon Section   -->
      <div class="row">
        <div class="col s12 m4">
          <h5>In</h5>
          <ul>
            <li
              v-for="(value, name) in xamlobjets[filexaml].args.in"
              :key="name"
            >
              {{ name }} : {{ value }}
            </li>
          </ul>
        </div>

        <div class="col s12 m4">
          <h5>Out</h5>
          <ul>
            <li
              v-for="(value, name) in xamlobjets[filexaml].args.out"
              :key="name"
            >
              {{ name }} : {{ value }}
            </li>
          </ul>
        </div>

        <div class="col s12 m4">
          <h5>InOut</h5>
          <ul>
            <li
              v-for="(value, name) in xamlobjets[filexaml].args.inout"
              :key="name"
            >
              {{ name }} : {{ value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <br /><br />
  </div>
</template>

<script>
//import {Select, Option} from "vue-materialize"
import dataOk from "../dataOk.json";
import { GoogleCharts } from "google-charts";
export default {
  name: "InfoXaml",
  mixins: [GoogleCharts, dataOk],
  props: {
    message: Object,
    currentLocale: String,
  },
  components: {

  },

  created() {
    this.xamlobjets = dataOk;
    this.filexaml = Object.keys(dataOk)[0];

    this.$nextTick(function () {});
  },
  data() {
    return {
      filexaml: "",
      listeXamlsFiles : {},
      xamlobjets: {},
    };
  },
  methods: {
    updatelistXaml(){
      this.listeXamlsFiles = {}
      let regex = new RegExp(this.filexaml, "i");
       for (const key in this.xamlobjets) {
      if (Object.prototype.hasOwnProperty.call(this.xamlobjets, key)) {
        if (key.match(regex)) {
         this.listeXamlsFiles[key] = this.xamlobjets[key]
        }
      }
    }
    },
    updateform() {
      const Activitys = this.xamlobjets[this.filexaml].Activitys;
      GoogleCharts.load(drawChart);

      function drawChart() {
        // Standard google charts functionality is available as GoogleCharts.api after load
        let tab = [];
        tab.push(["Functions", "occurence"]);
        let activitys = Object.keys(Activitys);
        activitys.forEach((file) => {
          tab.push([file, Activitys[file]]);
        });
        const data = GoogleCharts.api.visualization.arrayToDataTable(tab);
        const pie_1_chart = new GoogleCharts.api.visualization.PieChart(
          document.getElementById("chart1")
        );
        pie_1_chart.draw(data);
      }
    },
  },
};
</script>