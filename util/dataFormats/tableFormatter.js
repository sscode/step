function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

function wattsOrSplit(str){
    if(str.includes(":") || str.includes(".") || str.includes(",")){
        return "500m"
    } else {
        return "watts"
    }
}

export default function tableDataFormatter(fullData){

    const headers = ["tableData"];
    let id = 0;

    const fullDict = []

    const header = headers[0]
    //for each row
    for(let j = 0; j < fullData[header].length; j++){
        const myDict = {}
        for (let x = 0; x < fullData.tableHead.length; x++) {
            myDict[fullData.tableHead[x]] = fullData[header][j][x];
        }
        myDict["id"] = j + id;
        fullDict.push(myDict)
    }

    fullData.tableHead.push("id")

    // console.log("tableDataFormatter: ", fullDict)
    return [fullDict, fullData.tableHead]
}