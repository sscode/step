import { FlatList, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../constants/styles'

function TableOne(data){

    const item = ({item}) => (
        <View style={styles.itemRow}>
            <View style={[styles.column, styles.column1]}>
                <Text style={styles.text}>{item.id}</Text>
            </View>
            <View style={[styles.column, styles.column2]}>
                <Text style={styles.text}>{item.time}</Text>
            </View>
            <View style={[styles.column, styles.column3]}>
                <Text style={styles.text}>{item.distance}</Text>
            </View>
        </View>
    )
    return (
        <View style={styles.container}>
            <FlatList
                data={data.data}
                renderItem={item}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
export default TableOne


const styles = StyleSheet.create({
    container: {
        color: 'white',

    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    column: {
        width: '33.33%',
    },
    column1: {
        // backgroundColor: 'blue',
    },
    column2: {

    },
    column3: {

    },
    headerCell: {
        color: 'white',
    },
    text: {
        fontSize: 12,
        color: GlobalStyles.colors.white,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'white',
    }
})