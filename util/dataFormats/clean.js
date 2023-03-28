function wattsOrSplit(str){
    if(str.includes(":") || str.includes(".") || str.includes(",")){
        return "500m"
    } else {
        return "watts"
    }
}

function isLetter(str) {
    return str.length === 1 && str.match(/[a-z]/i);
  }

export default function clean(data){
    // let data = {"keyValue": {"Mar ": ["01 2023 "]}, "tableData": [["5:00.0", "849", "63", "25"], ["7:50.8", "557", "97", "28"]], "tableHead": ["7:50.8", "1405", "74 26", ""]}
    //clean header
    let newHeader = []
    let isSplit = null;
    let newColumn = null;

    //correctly picked up header or not
    if(isLetter(data.tableHead[0].charAt(0))){
        // console.log("True String Header and not values")
        if(data.tableHead[2] === "500m"){
            isSplit = true
        }
    } else {
        const thirdValue = wattsOrSplit(data.tableData[0][2])
        if(thirdValue === "500m"){
            isSplit = true
            newColumn = "watts"
        } else {
            isSplit = false
            newColumn = "500m"
        }
        newHeader = ["time", "distance", thirdValue, "spm", newColumn]

        //correct for bad spm
        if(data.tableHead[3] === ""){
            const valueSplit = data.tableHead[2].split(" ")
            if(valueSplit.length === 2){
                data.tableHead[2] = valueSplit[0]
                data.tableHead[3] = valueSplit[1]
            }
        }
        //push this rows data to tableData
        data.tableData.unshift(data.tableHead)
        data.tableHead = newHeader
    }

    //clean time formats
    // for each row in tableData if the first value contains , then convert it to a .
    for(let i = 0; i < data.tableData.length; i++){
        //correct for time column
        if(data.tableData[i][0].includes(",")){
            data.tableData[i][0] = data.tableData[i][0].replace(",", ".")
        }
        //correct for split column
        if(data.tableData[i][2].includes(",")){
            data.tableData[i][2] = data.tableData[i][2].replace(",", ".")
        }

        //add splits if watts and vice versa
        if(isSplit){
            const seconds = data.tableData[i][2].split(":")
            const watts = 2.8 * (500/(86400 * seconds))^3
            data.tableData[i].push(watts)
            // 2.8 * (500/(86400*B1))^3
        } else {
            const watts = parseInt(data.tableData[i][2])
            // const seconds = 500 * (2.8 / watts)^(1/3) / 86400
            const x = 500 * Math.pow(2.8 / watts, 1/3);

            const minutes = Math.floor(x / 60) % 60;
            const seconds = Math.floor(x % 60);
            const milliseconds = Math.round(Math.round((x - Math.floor(x)) * 1000)/100);
            const formattedTime = `${minutes}:${seconds}.${milliseconds}`;
            data.tableData[i].push(formattedTime)
        }
    }

    // console.log("data end:", data)
    return data
}