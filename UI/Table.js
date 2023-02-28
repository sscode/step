import { FlatList, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../constants/styles'

const data = [
    {id: "Segment", name: 'Meters', email: 'Time'},
    {id: 2, name: 'Bob', email: 'bob@gmail.com'},
    {id: 3, name: 'Mei', email: 'mei@gmail.com'},
    {id: 4, name: 'Steve', email: 'steve@gmail.com'}
]
function TableOne(){
    const item = ({ item }) => (
        <View style={styles.itemRow}>
            <View style={[styles.column, styles.column1]}>
                <Text style={styles.text}>{item.id}</Text>
            </View>
            <View style={[styles.column, styles.column2]}>
                <Text style={styles.text}>{item.name}</Text>
            </View>
            <View style={[styles.column, styles.column3]}>
                <Text style={styles.text}>{item.email}</Text>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <FlatList data={data} renderItem={item} keyExtractor={item => item.id.toString()} />
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
    text: {
        fontSize: 12,
        color: GlobalStyles.colors.white,
        textAlign: 'center',
    }
})