import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import ExerciseItem from '../active/ExerciseItem';

export default function ExerciseList({exercises, selectedExercisesIds, toggleExercise}) {

    const renderItem = ({ item, id }) => (
        <ExerciseItem
          exercise={item}
          onSelect={() => toggleExercise(item.id)}
          selected={selectedExercisesIds.includes(item.id)}
        />
      );
    
        if(exercises.length === 0){
            return (
                <View style={styles.middle}>
                    <Text style={styles.middleText}>No exercises found. Start adding exercises:</Text>
                </View>
        )} else {
            return(
                <FlatList
                style={styles.list}
                data={exercises}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                />
            )
        }
}


const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: GlobalStyles.colors.gray200,
    },
    middle: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleText: {
        fontSize: 18,
        color: GlobalStyles.colors.black,
    },
    list: {
        marginTop: 20,
    },
  });


