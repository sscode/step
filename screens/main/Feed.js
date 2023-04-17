import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, ImageBackground } from 'react-native';
import { GlobalStyles } from '../../constants/styles';


const Feed = ({ navigation }) => {


  const startNewWorkout = () => {
    navigation.navigate('NewWorkout');
  };

  return (
    // <ImageBackground
    // source={require('../../assets/bg1-splash.png')} 
    // style={styles.image}>
        <View style={styles.container}>
        <TouchableOpacity onPress={startNewWorkout} style={styles.newWorkoutButton}>
            <Text style={styles.newWorkoutText}>New Workout</Text>
        </TouchableOpacity>

        {/* <FlatList
            data={workoutSummaries}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={renderEmptyList}
            ListFooterComponent={renderFooter}
        /> */}
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
