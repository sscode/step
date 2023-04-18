import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';

const SetOrderButton = ({ onPress }) => (
  <TouchableOpacity style={styles.setOrderButton} onPress={onPress}>
    <Text style={styles.setOrderButtonText}>Set Order</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  setOrderButton: {
    backgroundColor: GlobalStyles.colors.black,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  setOrderButtonText: {
    color: GlobalStyles.colors.white,
    fontSize: 16,
  },
});

export default SetOrderButton;
