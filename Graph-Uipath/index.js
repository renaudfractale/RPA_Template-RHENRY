const { resolve } = require('path');
const { readdir } = require('fs').promises;
const fs = require('fs');
const convert = require('xml-js');

/* Function recursive de recherche de fichiers  */
async function* getFiles(dir) {
  const dirents = await readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = resolve(dir, dirent.name);
    if (dirent.isDirectory()) {
      yield* getFiles(res);
    } else {
      yield res;
    }
  }
}
/* Function recursive de recherche de InvokeWorkflowFile dans un fichier XAML  */
function* Get_InvokeWorkflowFile(el){
    if(Array.isArray(el.elements)){
       for (let index = 0; index < el.elements.length; index++) {
           const element = el.elements[index];
            if(element.name == "ui:InvokeWorkflowFile"){
                //console.log(element.attributes)
                //console.log(element.attributes.WorkflowFileName)
                let txt = element.attributes.WorkflowFileName.replace(/\\/g,"/")
                yield txt
            } else{
                yield* Get_InvokeWorkflowFile(element)
            }
        };
    }

}
/* Function de simplification des types  */
function filtreArgs(txt){
    let matchs = txt.match(/[A-z,\d]+\:[A-z,\d]+/g)
    //console.log(matchs)
    matchs.forEach(match => {
        let typeOk = match.split(":")[1]
        while (txt.match(match)) {
            txt=txt.replace(match,typeOk) 
        }
    });
    return txt
}
/* Function Main qui réalise le travail  */
;(async () => {
    let files = {}
    /* Récupération de chemine d'accès au fichier  */
    let rootpath = resolve('../Template/')
    //console.log(rootpath)
    for await (const f of getFiles('../Template')) {
      if(f.match(/.\.xaml$/)){
          let xml = fs.readFileSync(f)
        files[f.replace(rootpath+"\\","").replace(/\\/g,"/")] = JSON.parse(convert.xml2json(xml, {compact: false, spaces: 4}))
      }
    }
    //console.log(files)
    
    fs.writeFileSync("data.json",JSON.stringify(files,undefined,5))
    

    let listFiles = Object.keys(files)
    let filesOk = {}
    listFiles.forEach(file => {
        console.log("***************************************************")
        console.log(file)
        filesOk[file] = {}
        let elements = files[file]
        let args = elements.elements[0].elements[0]
        if(args.name == "x:Members")
        {
            //console.log(args)
            let args_file = {}
            for (let index = 0; index < args.elements.length; index++) {
                let element = args.elements[index];
                if(element.attributes.Type.match(/^InArgument./))
                {
                    if(args_file.in == undefined)
                    {
                        args_file.in = {}
                    }
                    let txt = element.attributes.Type.replace("InArgument(","")
                    txt = filtreArgs(txt.substring(0,txt.length-1))
                    args_file.in[element.attributes.Name] = txt
                } else if(element.attributes.Type.match(/^OutArgument./))
                {
                    if(args_file.out == undefined)
                    {
                        args_file.out = {}
                    }
                    let txt = element.attributes.Type.replace("OutArgument(","")
                    txt = filtreArgs(txt.substring(0,txt.length-1))
                    args_file.out[element.attributes.Name] = txt
                } else if(element.attributes.Type.match(/^InOutArgument./))
                {
                    if(args_file.inout == undefined)
                    {
                        args_file.inout = {}
                    }
                    let txt = element.attributes.Type.replace("InOutArgument(","")
                    txt = filtreArgs(txt.substring(0,txt.length-1))
                    args_file.inout[element.attributes.Name] = txt
                } else{
                    //console.log(element)
                }
            } 
            //console.log(args_file)
            filesOk[file].args = args_file
            
        }
        filesOk[file].InvokeWorkflowFile = {}
        for  (const child of Get_InvokeWorkflowFile(elements)) {
            if(filesOk[file].InvokeWorkflowFile[child]== undefined){
                filesOk[file].InvokeWorkflowFile[child] = 0
            }
            filesOk[file].InvokeWorkflowFile[child]+=1
        } 
        
        console.log(filesOk[file])
    });

    fs.writeFileSync("dataOk.json",JSON.stringify(filesOk,undefined,5))
    fs.writeFileSync("dataOk.js","var data="+JSON.stringify(filesOk,undefined,5))
  })()