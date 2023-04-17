import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, ImageBackground } from 'react-native';
import WorkoutSummary from '../../components/Workout/WorkoutSummary';
import { GlobalStyles } from '../../constants/styles';
import Button from '../../UI/Button';

const Feed = ({ navigation }) => {
  const [workoutSummaries, setWorkoutSummaries] = useState([]);

  useEffect(() => {
    // Fetch workout summaries from your data source (e.g., Firebase) here
  }, []);

  const navigateToDetails = (workoutId) => {
    navigation.navigate('WorkoutDetails', { workoutId });
  };

  const startNewWorkout = () => {
    console.log('startNewWorkout');
    navigation.navigate('NewWorkout');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToDetails(item.id)}>
      <WorkoutSummary workout={item} style={styles.workoutSummary} />
    </TouchableOpacity>
  );

  const renderEmptyList = () => (
    <View>
       <Text style={styles.emptyListText}>Add your first workout</Text>
    </View>
  );

  const renderFooter = () => (
    <TouchableOpacity onPress={startNewWorkout} style={styles.newWorkoutButton}>
      <Text style={styles.newWorkoutText}>New Workout</Text>
    </TouchableOpacity>
  );

  return (
    // <ImageBackground
    // source={require('../../assets/bg1-splash.png')} 
    // style={styles.image}>
        <View style={styles.container}>
        <FlatList
            data={workoutSummaries}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={renderEmptyList}
            ListFooterComponent={renderFooter}
        />
        </View>
    // </ImageBackground>
  );
};

export default Feed;

const styles = StyleSheet.create({
    // image: {
    //     flex: 1,
    //     resizeMode: "cover",
    //     justifyContent: "center"
    // },
    container: {
      flex: 1,
      backgroundColor: GlobalStyles.colors.lightGray,
    },
    emptyListContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
    emptyListText: {
        fontSize: 16,
        color: GlobalStyles.colors.gray,
        textAlign: 'center',
        marginTop: 20,
      }, 
    workoutSummary: {
      fontSize: 18,
      color: GlobalStyles.colors.black,
    },
    newWorkoutButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        marginVertical: 20,
        borderWidth: 2,
        borderColor: GlobalStyles.colors.black,
        borderRadius: 10,
        backgroundColor: GlobalStyles.colors.white,
      },
      newWorkoutBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
      },
      newWorkoutText: {
        fontSize: 18,
        color: GlobalStyles.colors.black,
      },
      newWorkoutButtonHover: {
        backgroundColor: GlobalStyles.colors.primary,
        borderColor: GlobalStyles.colors.white,
      }
});
