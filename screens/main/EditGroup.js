import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import Header from '../../components/Header/Header';
import MemberEdit from '../../components/Edit/MemberEdit';
import { GlobalStyles } from '../../constants/styles';

const EditGroup = ({navigation}) => {
    const route = useRoute();
    const { groupData } = route.params;
    const memberSteps = groupData.stepsPerUser;

    useEffect(() => {
        //header
        navigation.setOptions({
            headerShown: true,
            headerStyle: {
                backgroundColor: GlobalStyles.colors1.primary,
            },
        });
    }
    , [navigation])
    
    

    return (
        <View>
            <Header />
            <View style={styles.container}>
                    <Text>{groupData.groupName}</Text>
                    {Object.keys(memberSteps).map((key) => (
                        <MemberEdit
                            member={key}
                            key={key}
                        />
                    ))}
            </View>
        </View>
    );
};

export default EditGroup;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: GlobalStyles.colors1.grey100,
        paddingHorizontal: 8,
    },
    innerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: 'blue',
    },
});
