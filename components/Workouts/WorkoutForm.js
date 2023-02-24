import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import Input from '../../UI/Input';
import { makeid } from '../../util/random';


function WorkoutForm(){

    const data = {
        name: makeid(6),
        date: new Date(),
        userID: '55832'
    }

    console.log(data.date)

    return( 
        <View style={styles.container}>
            <Text>{data.name}</Text>
            <Text>{data.date.toISOString().slice(0, 19)}</Text>
            <Input />
        </View>
    )
}

export default WorkoutForm;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    text: {
        color: GlobalStyles.colors.white,
    }
  });