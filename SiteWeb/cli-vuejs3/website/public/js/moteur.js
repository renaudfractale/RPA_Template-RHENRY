 // Instantiate our network object.
 var container = document.getElementById('mynetwork');
 if(container != undefined) {
    container.innerHTML=""
    var nodes = []
    var edges = []
    let nodesraw = Object.keys(data)
    let dico =  new Map()
    for (let index = 0; index < nodesraw.length; index++) {
        let node = nodesraw[index];
        dico.set(node,index)
        nodes.push({
            id : index,
            label : node
        })
    }
    nodesraw.forEach(node => {
        let childs = Object.keys(data[node].InvokeWorkflowFile)
        childs.forEach(child => {
            edges.push({
                from : dico.get(node),
                to :  dico.get(child),
                force : data[node].InvokeWorkflowFile[child]*100,
                arrows: {
                        to: {
                            enabled: true,
                            type: "arrow",
                        },
                        },
            }) 
        });
        
    });
   
   
   
   
    var data = {
        nodes: nodes,
        edges: edges
    };
    //console.log(data)
    var options = {
        height: '800px',
        width: '1600px',
        nodes: {
        shape: 'dot',
        scaling: {
            customScalingFunction: function (min,max,total,value) {
            return value/total;
            },
            min:5,
            max:150
        }
        }
    };
    this.network = new vis.Network(container, data, options);
 }
 