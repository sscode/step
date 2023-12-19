import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const GroupHeader = ({groupData}) => {

    const navigation = useNavigation();

    const pressHandler = () => {
        console.log(groupData.groupName)
        navigation.navigate('EditGroup', {groupData})
    }


  return (
    <View style={styles.container}>
        <View style={styles.leftContainer}>
            <Text style={styles.header}>🐧</Text>
            <Text style={[styles.header, styles.right]}>{groupData.groupName}</Text>
        </View>
        <View style={styles.rightContainer}>
            <TouchableOpacity
            onPress={pressHandler}
            >
                <Text>...</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default GroupHeader

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    leftContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '50%',
    },
    rightContainer: {
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
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