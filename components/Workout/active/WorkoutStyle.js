import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

const WorkoutStyle = ({toggleState, setToggleState}) => {

  const toggleIcon = () => {
      console.log(toggleState);
      setToggleState((prevState) => !prevState);
  };

  return (
    <TouchableOpacity onPress={toggleIcon}>
      {toggleState ? (
        <FontAwesome name="toggle-on" size={24} color="white" />
      ) : (
        <FontAwesome name="toggle-off" size={24} color="white" />
      )}
    </TouchableOpacity>
  );
};

export default WorkoutStyle;
