import { FlatList, Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import TableOne from "../../UI/Table";
import tableDataFormatter from "../../util/dataFormats/tableFormatter";

function Expanded(jsonData){

    const tableData = tableDataFormatter(jsonData.ergData)
    console.log("tableData", tableData[1])

    return (
        <TableOne data={tableData[0]} headers={tableData[1]}/>
    )
}

export default Expanded;

const styles = StyleSheet.create({
    text: {
        color: GlobalStyles.colors.white,
    }
});