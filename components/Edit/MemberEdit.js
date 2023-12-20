import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles'

const MemberEdit = ({member}) => {
  return (
    <View style={styles.member}>
        <View
        style={styles.left}
        >
            <View
            style={styles.memberImage}
            ></View>
            <Text
            style={styles.memberName}
            >{member}</Text>
        </View>
        <View style={styles.right}>
            <Text
            style={styles.memberSteps}
            >x</Text>
        </View>
    </View>
  )
}

export default MemberEdit;

const styles = StyleSheet.create({
    member: {
        display: 'flex',
        flexDirection: 'row',
        // alignItems: 'center',
        // justifyContent: 'space-around',
        // width: '100%',
        backgroundColor: GlobalStyles.colors1.grey200,
        paddingVertical: 8,
        marginBottom: 16,
        borderRadius: 8,
        },
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '50%',
        justifyContent: 'flex-start',
        // backgroundColor: 'red',
    },
    right: {
        width: '50%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    memberImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: GlobalStyles.colors1.primary,
        marginLeft: 8,
    },
    memberName: {
        fontSize: 16,
        marginLeft: 8,
    },
    memberSteps: {
        fontSize: 16,
        marginRight: 8,
        fontWeight: 'bold',
        color: GlobalStyles.colors1.error,
    },
})