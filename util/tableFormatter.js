export default function tableDataFormatter(fullData){

    const headers = ["tableData"];
    const labels = ["time", "distance", "watts", "spm"]

    const fullDict = []

    //set headers
    // const tempDict = {"id": 0}
    // labels.forEach(label => {
    //     tempDict[label] = label
    // });
    // fullDict.push(tempDict)
    //for each header
    for (let i = 0; i < headers.length; i++){
        const header = headers[i]
        //for each row
        for(let j = 0; j < fullData[header].length; j++){
            const myDict = {}
            for (let x = 0; x < labels.length; x++) {
                myDict[labels[x]] = fullData[header][j][x];
            }
            myDict["id"] = j;
            fullDict.push(myDict)
        }

    }
    return fullDict
}