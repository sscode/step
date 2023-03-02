import { FlatList, Text, View } from "react-native";

function Expanded({jsonData}){
    return (
        <View style={tableStyles.container}>
            <Text style={{
                fontSize: 22,
                color:'black'
            }}>
                Form Data
            </Text>
            {
                Object.keys(jsonData?.keyValue).map((key) => (
                <View >
                    <Text style={{color:'black',fontWeight:900}} >{key}</Text>
                    <Text style={{color:'#303030'}} type="text">{jsonData?.keyValue[key]} </Text>
                </View>
                ))
            }
        </View>

    )
}

export default Expanded;

const tableStyles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff', color: 'black' },
    text: { margin: 6, color: 'black' }
  });