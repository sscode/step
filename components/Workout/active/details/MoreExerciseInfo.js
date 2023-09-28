import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import MainBG from '../../../../UI/MainBG';
import BottomSheet from './edit/BottomSheet';
import { AntDesign } from '@expo/vector-icons';
import { GlobalStyles } from '../../../../constants/styles';
import Stats from './stats/Stats';

const MoreExerciseInfo = ({ navigation, route }) => {
  const { exerciseName } = route.params;
  const { exerciseId } = route.params;
  const { exerciseColor } = route.params;
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  useEffect(() => {
    //header
    navigation.setOptions({
      headerTitle: 'Exercise Details',
    });
  }, []);

  const handleEditButtonPress = () => {
    setBottomSheetVisible(!bottomSheetVisible);
  };

  return (
    <MainBG>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>{exerciseName}</Text>
          <TouchableOpacity onPress={handleEditButtonPress}>
            <AntDesign name="edit" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Stats exerciseName={exerciseName} />
        </View>
        {bottomSheetVisible && 
        <BottomSheet 
        exerciseName={exerciseName}
        exerciseId={exerciseId}
        exerciseColor={exerciseColor}
        />}
      </View>
    </MainBG>
  );
};

export default MoreExerciseInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 120,
    // backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalStyles.colors.white,
  },
  body: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
