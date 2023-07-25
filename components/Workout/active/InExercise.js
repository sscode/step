import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { ExerciseContext } from '../../../store/exerciseContext';
import MainBG from '../../../UI/MainBG';
import { addSetToFirebase } from '../../../util/firebase/http';
import AddSetModal from './AddSetModal';
import CurrentExercise from './CurrentExercise';
import Header from './Header';
import SetAddButtons from './SetAddButtons';


const InExercise = ({ navigation, route }) => {

    const exerciseCtx = useContext(ExerciseContext);
    console.log(route.params.exerciseName)
    const exerciseName = route.params.exerciseName;
    
    //modal props
    const [modalVisible, setModalVisible] = useState(false);
    const userId = exerciseCtx.exerciseData.User.id
  

    //filter to get sets for current exercise
    const setsForCurrentExercise = exerciseCtx.exerciseData.Sets.filter(
      (set) => set.exerciseName === exerciseName
    );
    
    //get the last set for the current exercise in order to repeat it
    const repeatSet = setsForCurrentExercise[0];

    const handleAddSet = async (newSet) => {
        console.log("added ", newSet)
        // add to firebase
        const newSetFirebaseId = await addSetToFirebase(userId, newSet);
        // console.log("newSetFirebaseId ", newSetFirebaseId.name)
        //to context
        exerciseCtx.addSet(
            {id: newSetFirebaseId.name, 
            exerciseName: exerciseName, 
            lbs: newSet.lbs, 
            reps: newSet.reps, 
            date: newSet.date});
    }

      // Inside the InExercise component
      console.log('setsForCurrentExercise ids:', setsForCurrentExercise.map(set => set.id));


      
    return (
      <MainBG>
        <View style={styles.container}>
          <Header exerciseName={exerciseName} />
          <SetAddButtons repeatSet={repeatSet} showModal={() => setModalVisible(true)} />
          <CurrentExercise
            exerciseName={exerciseName}
            setsForCurrentExercise={setsForCurrentExercise}
          />
        <AddSetModal 
          exerciseName={exerciseName}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          onConfirm={handleAddSet}
        />
        </View>
      </MainBG>
    );
  };

export default InExercise;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 48,
    }
  });

