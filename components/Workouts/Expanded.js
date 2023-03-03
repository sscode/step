import { FlatList, Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import TableOne from "../../UI/Table";
import tableDataFormatter from "../../util/dataFormats/tableFormatter";

function Expanded(jsonData){

    const tableData = tableDataFormatter(jsonData.ergData)

    return (
        <TableOne data={tableData}/>
    )
}

export default Expanded;

const styles = StyleSheet.create({
    text: {
        color: GlobalStyles.colors.white,
    }
});