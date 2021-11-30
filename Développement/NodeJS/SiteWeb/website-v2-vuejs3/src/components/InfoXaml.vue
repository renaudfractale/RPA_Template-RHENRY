<template>
  <div class="input-field col s12" style="margin: 50px">
    <input
      placeholder=""
      id="first_name"
      type="text"
      class="validate"
      v-model="filexaml"
      @change="updatelistXaml"
    />
    <label for="first_name">Fichier à analyser</label>
  </div>
  <div class="collection" style="margin: 50px">
    <a
      v-for="(value, name) in listeXamlsFiles"
      :key="name"
      class="collection-item"
      @click="updateinfos(name)"
    >
      {{ name }}
    </a>
  </div>
  <div id="chart1" v-if="filexamlOK.length > 0"></div>
  <div class="container" v-if="filexamlOK.length > 0">
    <div class="section">
      <div class="row center">
        <h5 class="header col s12 light">{{ filexamlOK }}</h5>
      </div>
      <!--   Icon Section   -->
      <div class="row">
        <div class="col s12 m4">
          <h5>In</h5>
          <ul>
            <li
              v-for="(value, name) in xamlobjets[filexamlOK].args.in"
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
              v-for="(value, name) in xamlobjets[filexamlOK].args.out"
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
              v-for="(value, name) in xamlobjets[filexamlOK].args.inout"
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
  components: {},

  created() {
    this.xamlobjets = dataOk;
    this.filexaml = ".";
    this.updatelistXaml();
    this.$nextTick(function () {});
  },
  data() {
    return {
      filexaml: "",
      filexamlOK: "",
      listeXamlsFiles: {},
      xamlobjets: {},
    };
  },
  methods: {
    updateinfos(file) {
      this.filexamlOK = file;
      this.updateform();
    },
    updatelistXaml() {
      this.listeXamlsFiles = {};
      if (this.filexaml.length > 0) {
        let regex = new RegExp(this.filexaml, "i");
        for (const key in this.xamlobjets) {
          if (Object.prototype.hasOwnProperty.call(this.xamlobjets, key)) {
            if (key.match(regex)) {
              this.listeXamlsFiles[key] = this.xamlobjets[key];
            }
          }
        }
      }
    },
    updateform() {
      const Activitys = this.xamlobjets[this.filexamlOK].Activitys;
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