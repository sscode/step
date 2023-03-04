function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

function wattsOrSplit(str){
    if(str.includes(":") || str.includes(".") || str.includes(",")){
        return "split"
    } else {
        return "watts"
    }
}

export default function tableDataFormatter(fullData){

    const headers = ["tableData"];
    // const labels = ["time", "distance"]
    let labels = []
    let id = 0;

    const fullDict = []

    if(isLetter(fullData.tableHead[0].charAt(0))){
        // console.log("True String Header and not values")
        // console.log("tableHead: ", fullData.tableHead)
        labels = fullData.tableHead
        // console.log("labels: ", labels)
    } else {
        //see if third value contains : or . or ,
        const thirdValue = wattsOrSplit(fullData.tableData[0][2])
        labels = ["time", "distance", thirdValue, "spm"]
        // console.log("False String Header and instead is #")
        //read this and add it to fullDict
        const header = "tableHead"
        const myDict = {}
        for (let x = 0; x < labels.length; x++) {
            myDict[labels[x]] = fullData[header][x];
        }
        myDict["id"] = 0;
        id += 1;
        fullDict.push(myDict)
    }

    const header = headers[0]
    //for each row
    for(let j = 0; j < fullData[header].length; j++){
        const myDict = {}
        for (let x = 0; x < labels.length; x++) {
            myDict[labels[x]] = fullData[header][j][x];
        }
        myDict["id"] = j + id;
        fullDict.push(myDict)
    }

    labels.push("id")

    // console.log("tableDataFormatter: ", fullDict)
    return [fullDict, labels]
}