import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SetAddButtons = ({ repeatSet, showModal }) => {
  return (
    <View style={styles.repeatAddContainer}>
      <TouchableOpacity style={styles.repeatAddButton} onPress={repeatSet}>
        <Text style={styles.repeatAddButtonText}>Repeat</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.repeatAddButton} onPress={showModal}>
        <Text style={styles.repeatAddButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  repeatAddContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingVertical: 16,
  },
  repeatAddButton: {
    width: 130,
    height: 130,
    borderRadius: 100,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  repeatAddButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#424242',
  },
});

export default SetAddButtons;
