import { FlatList, Text, View, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../constants/styles'
import moment from 'moment'

function TableOne({data, headers}){

    const fullWorkout = data.filter(
        (item) => item.id === 0
    )

    const body = data.filter(
        (item) => item.id !== 0
    )

    const item = ({item}) => { 

        return (
        <View style={styles.itemRow}>
                  {Object.keys(item).map((key) => (
                    <View style={styles.column}>
                        <Text 
                        style={styles.text}
                        key={key}>{item[key]}</Text>
                    </View>
                ))}
        </View>
    )}

    const headerList = (
        <View style={[styles.itemRow, styles.headerRow]}>
        {headers.map((header) => (
            <View style={[styles.column, styles.header]}>
                <Text style={[styles.text, styles.headerCell]}>{header}</Text>
            </View>))
        }
        </View>
    )


    return (
        <View style={styles.container}>
            {headerList}
            <FlatList
                listKey={moment().valueOf().toString() + "123213"}
                data={fullWorkout}
                renderItem={item}
                keyExtractor={item => item.id}
            />
            <FlatList
                listKey={moment().valueOf().toString()}
                data={body}
                renderItem={item}
                keyExtractor={item => item.id}
                style={{marginTop: 12}}
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
        marginBottom: 4,
    },
    headerRow: {
        
        marginTop: 8,
        marginBottom: 8,
    },
    column: {
        width: '25%',
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
        fontWeight: 'bold',
    },
    text: {
        fontSize: 12,
        color: GlobalStyles.colors.white,
        textAlign: 'center',
        // borderWidth: 1,
        // borderColor: 'white',
    }
})