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
function* Get_InvokeWorkflowFile(el) {
    if (Array.isArray(el.elements)) {
        for (let index = 0; index < el.elements.length; index++) {
            const element = el.elements[index];
            if (element.name == "ui:InvokeWorkflowFile") {
                let txt = element.attributes.WorkflowFileName.replace(/\\/g, "/")
                yield txt
            } else {
                yield* Get_InvokeWorkflowFile(element)
            }
        };
    }
}
/* Function recursive de recherche de InvokeWorkflowFile dans un fichier XAML  */
function* Get_Activitys(el) {
    if (Array.isArray(el.elements)) {
        for (let index = 0; index < el.elements.length; index++) {
            const element = el.elements[index];
           
            if (element.name!= undefined) {
                if(element.name == "x:Members" || element.name == "mva:VisualBasic.Settings" || element.name == "sap:VirtualizedContainerService.HintSize" || element.name == "sap2010:WorkflowViewState.IdRef" || element.name == "TextExpression.NamespacesForImplementation" || element.name == "TextExpression.ReferencesForImplementation" )
                    continue;
                if(!element.name.match(/^mva\:/) && !element.name.match(/^x\:/) && !element.name.match(/^scg\:/) && !element.name.match(/^InArgument/) && !element.name.match(/OutArgument/)  ){
                    //console.log(element.name)
                    yield element.name
                }
            }
            yield* Get_Activitys(element)
        }
    };
}

/* Function de simplification des types  */
function filtreArgs(txt) {
    let matchs = txt.match(/[A-z,\d]+\:[A-z,\d]+/g)
    //console.log(matchs)
    matchs.forEach(match => {
        let typeOk = match.split(":")[1]
        while (txt.match(match)) {
            txt = txt.replace(match, typeOk)
        }
    });
    return txt
}
/* Function Main qui réalise le travail  */
; (async () => {
    let files = {}
    /* Récupération de chemine d'accès au fichier  */
    let rootpath = resolve('../Template/')
    /* Recherche des fichiers XAML */
    for await (const f of getFiles(rootpath)) {
        /* Si le fichier est un *.xaml */
        if (f.match(/.\.xaml$/)) {
            /* Je lit le fichier */
            let xml = fs.readFileSync(f)
            /* J'ajoute à "files" le xml convertie en JSON(Objet JS) */
            files[f.replace(rootpath + "\\", "").replace(/\\/g, "/")] = JSON.parse(convert.xml2json(xml, { compact: false, spaces: 4 }))
        }
    }

    /* Je serialise en JSON l'objet "files" */
    fs.writeFileSync("data.json", JSON.stringify(files, undefined, 5))


    let listFiles = Object.keys(files)
    let filesOk = {}
    listFiles.forEach(file => {
        console.log("***************************************************")
        console.log(file)
        filesOk[file] = {}
        let elements = files[file]
        let args = elements.elements[0].elements[0]
        let args_file = {}
            args_file.in = {}
            args_file.out = {}
            args_file.inout = {}
        if (args.name == "x:Members") {
            //console.log(args)
            for (let index = 0; index < args.elements.length; index++) {
                let element = args.elements[index];
                if (element.attributes.Type.match(/^InArgument./)) {
                    let txt = element.attributes.Type.replace("InArgument(", "")
                    txt = filtreArgs(txt.substring(0, txt.length - 1))
                    args_file.in[element.attributes.Name] = txt
                } else if (element.attributes.Type.match(/^OutArgument./)) {
                    let txt = element.attributes.Type.replace("OutArgument(", "")
                    txt = filtreArgs(txt.substring(0, txt.length - 1))
                    args_file.out[element.attributes.Name] = txt
                } else if (element.attributes.Type.match(/^InOutArgument./)) {
                    let txt = element.attributes.Type.replace("InOutArgument(", "")
                    txt = filtreArgs(txt.substring(0, txt.length - 1))
                    args_file.inout[element.attributes.Name] = txt
                } else {
                    //console.log(element)
                }
            }
            //console.log(args_file)
        }
        filesOk[file].args = args_file
        filesOk[file].InvokeWorkflowFile = {}
        for (const child of Get_InvokeWorkflowFile(elements)) {
            if (filesOk[file].InvokeWorkflowFile[child] == undefined) {
                filesOk[file].InvokeWorkflowFile[child] = 0
            }
            filesOk[file].InvokeWorkflowFile[child] += 1
        }

        filesOk[file].Activitys = {}
        for (const activity of Get_Activitys(elements)) {
            if (filesOk[file].Activitys[activity] == undefined) {
                filesOk[file].Activitys[activity] = 0
            }
            filesOk[file].Activitys[activity] += 1
        }

        console.log(filesOk[file])
    });

    fs.writeFileSync("dataOk.json", JSON.stringify(filesOk, undefined, 5))
    fs.writeFileSync("dataOk.js", "var data=" + JSON.stringify(filesOk, undefined, 5))
})()