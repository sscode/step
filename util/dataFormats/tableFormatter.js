function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

export default function tableDataFormatter(fullData){

    const headers = ["tableData"];
    const labels = ["time", "distance", "watts", "spm"]
    let id = 0;

    const fullDict = []

    if(isLetter(fullData.tableHead[0].charAt(0))){
        // console.log("True String Header and not values")
    } else {
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

    // console.log("tableDataFormatter: ", fullDict)
    return fullDict
}