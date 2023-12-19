import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GroupHeader from './GroupHeader'
import Member from './Member'
import { GlobalStyles } from '../../constants/styles'

const Group = ({groupData}) => {


  return (
    <View style={styles.groupList}>
        <FlatList
        data={groupData}
        renderItem={({item}) => {
            return (
                <View style={styles.group}>
                    <GroupHeader groupData={item} />
                    {
                        item.groupMembers.map(member => {
                            return (
                                <Member
                                member={member}
                                steps={item.stepsPerUser[member]}
                                key={member}
                                />
                            )
                        })
                    }
                </View>
            )
        }} />
    </View>
  )
}

export default Group

const styles = StyleSheet.create({
    groupList: {
        width: '100%',
        // backgroundColor: GlobalStyles.colors1.primary,
        alignItems: 'center',
        marginBottom: 160,
    },
    group: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '95%',
        backgroundColor: GlobalStyles.colors1.grey100,
        paddingHorizontal: 8,
        marginBottom: 16,
    },

})