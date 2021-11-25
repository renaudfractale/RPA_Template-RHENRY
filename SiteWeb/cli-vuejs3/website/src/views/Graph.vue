<template>
  <div id="mynetwork"></div>
</template>

<script>
import { DataSet } from "vis-data/peer";
import "vis-network/styles/vis-network.css";
import { Network } from "vis-network/peer";
import dataOk from "../dataOk.json";

export default {
  mixins: [Network, dataOk, DataSet],
  name: "Graph",
  components: {
    //
  },
  data() {
    return {
      options: {},
      nodes: [],
      edges: [],
    };
  },
  mounted() {
    this.$nextTick(function () {
      var nodes = [];
      var edges = [];
      let nodesraw = Object.keys(dataOk);
      let dico = new Map();
      for (let index = 0; index < nodesraw.length; index++) {
        let node = nodesraw[index];
        dico.set(node, index);
        nodes.push({
          id: index,
          label: node,
        });
      }
      nodesraw.forEach((node) => {
        let childs = Object.keys(dataOk[node].InvokeWorkflowFile);
        childs.forEach((child) => {
          edges.push({
            from: dico.get(node),
            to: dico.get(child),
            force: dataOk[node].InvokeWorkflowFile[child] * 100,
            arrows: {
              to: {
                enabled: true,
                type: "arrow",
              },
            },
          });
        });
      });
      var options = {
        height: "800px",
        width: "1600px",
        nodes: {
          shape: "dot",
          scaling: {
            customScalingFunction: function (min, max, total, value) {
              return value / total;
            },
            min: 5,
            max: 150,
          },
        },
      };
      const container = document.getElementById("mynetwork");
      new Network(
        container,
        {
          nodes: new DataSet(nodes),
          edges: new DataSet(edges),
        },
        options
      );
      //this.network = new vis.Network(container, data, options);
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
