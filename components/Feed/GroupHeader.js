import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GroupHeader = ({groupData}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>🐧</Text>
      <Text style={[styles.header, styles.right]}>{groupData.groupName}</Text>
    </View>
  )
}

export default GroupHeader

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 8,
        marginBottom: 8,
    },
    right: {
        marginLeft: 16,
    },
})