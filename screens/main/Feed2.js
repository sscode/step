import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../../components/Header/Header'
import Group from '../../components/Feed/Group'
import NavContainer from '../../components/BottomNav/NavContainer'

const Feed2 = () => {

    const groupData = [
        {
        groupName: 'Group 1',
        groupMembers: ['user1', 'user2', 'user3', 'user4', 'user5'],
        stepsPerUser: {
            user1: 100,
            user2: 200,
            user3: 2500,
            user4: 400,
            user5: 500,
        },
        },
        {
        groupName: 'Group 2',
        groupMembers: ['user1', 'user2', 'user3', 'user4', 'user5'],
        stepsPerUser: {
            user1: 432,
            user2: 324,
            user3: 342,
            user4: 4543,
            user5: 6234,
        },
        },
    ]

    const addGroup = () => {
        const groupLength = groupData.length
        groupData.push({
            groupName: `Group ${groupLength + 1}`,
            groupMembers: ['user1', 'user2', 'user3', 'user4', 'user5'],
            stepsPerUser: {
                user1: Math.floor(Math.random() * 1000),
                user2: Math.floor(Math.random() * 1000),
                user3: Math.floor(Math.random() * 1000),
                user4: Math.floor(Math.random() * 1000),
                user5: Math.floor(Math.random() * 1000),
            },
        })
    }

  return (
    <View style={styles.container}>
        <Header />
        <Group groupData={groupData}/>
        <NavContainer addGroup={addGroup}/>
    </View>
  )
}

export default Feed2

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        // height: '100%',
        // backgroundColor: 'blue',
    },
})