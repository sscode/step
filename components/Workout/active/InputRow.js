import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';

const InputRow = ({ label, value, placeholder, onChangeText, amount }) => {
    const decrement = () => {
        // Decrease the value by the specified amount
        const newValue = Math.max(0, parseInt(value) - amount);
        onChangeText(newValue.toString());
      };
    
      const increment = () => {
        // Increase the value by the specified amount
        const newValue = parseInt(value) + amount;
        onChangeText(newValue.toString());
      };


  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputFields}>
        <TouchableOpacity onPress={decrement}>
          <Text style={styles.increment}>-{amount}</Text>
        </TouchableOpacity>        
        <View style={styles.center}>
          <View style={styles.largeInput}>
            <TextInput
              style={styles.input}
              placeholder={placeholder}
              placeholderTextColor={GlobalStyles.colors.white}
              value={value}
              onChangeText={onChangeText}
              keyboardType="numeric"
              maxLength={3}
              onFocus={() => onChangeText('')}
            />
          </View>
          <Text style={styles.inputHeader}>{label}</Text>
        </View>
        <TouchableOpacity onPress={increment}>
          <Text style={styles.increment}>+{amount}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputRow;


const styles = StyleSheet.create({
      inputContainer: {
        // marginVertical: 4,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        // backgroundColor: 'red',
      },
      center: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'green',
      },
      largeInput: {
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: GlobalStyles.colors.primary50,
      },
      inputHeader: {
        width: '50%',
        color: GlobalStyles.colors.white,
        fontSize: 12,
        paddingLeft: 8,
        textAlign: 'left',
      },
      inputFields: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        // backgroundColor: 'blue',
      },
      input: {
        paddingVertical: 8,
        // textAlign: 'center',
        // backgroundColor: GlobalStyles.colors.primary50,
        color: GlobalStyles.colors.white,
        fontSize: 36,
        fontWeight: 'bold',
      },
      increment: {
        width: 48,
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        color: GlobalStyles.colors.grey100,
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 5,
        borderColor: GlobalStyles.colors.grey100,
        borderWidth: 1,
        // paddingHorizontal: 8,
        paddingVertical: 4,
      }
})