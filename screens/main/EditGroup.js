import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native'; // Import useRoute from '@react-navigation/native'

const EditGroup = () => {
    const route = useRoute(); // Use useRoute to access route parameters
    const { groupData } = route.params;

    console.log(groupData);

    return (
        <View>
            <Text>{groupData.groupName}</Text>
        </View>
    );
};

export default EditGroup;

const styles = StyleSheet.create({});
