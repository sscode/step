import React, { useState } from 'react';
import { Modal, View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';
import ColorSwatch from '../../../UI/ColorSwatch';

const AddExerciseModal = ({ visible, onAdd, onCancel, onChangeText, value, activeColor, setActiveColor }) => {

  const addHandler = () => {
    const trimmedValue = value.trim(); // Remove any leading and trailing whitespace
    if (trimmedValue.length === 0) {
      return;
    }
    onAdd(trimmedValue);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Add a New Exercise</Text>
          <ColorSwatch 
          activeColor={activeColor}
          handleColorPress={setActiveColor}/>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onAdd}
            placeholder="Exercise name"
            style={styles.modalInput}
            autoFocus={true}
            maxLength={22}
          />
          <View style={styles.modalButtons}>
            <TouchableOpacity onPress={onCancel} style={styles.cancelButton}>
                <Text style={styles.buttonTextCancel}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={addHandler} style={styles.addButton}>
                <Text style={styles.buttonTextAdd}>Add</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalContent: {
    backgroundColor: GlobalStyles.colors.white,
    borderRadius: 10,
    padding: 20,
    width: '80%',
    marginBottom: 250,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: GlobalStyles.colors.grey500,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.grey100,
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 25,
    marginBottom: 16,
    backgroundColor: GlobalStyles.colors.grey,
    color: GlobalStyles.colors.grey500,
    fontWeight: 'bold',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GlobalStyles.colors.primary,
    borderRadius: 3,
    paddingVertical: 10,
  },
  cancelButton: {
    width: '30%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    borderRadius: 3,
    paddingVertical: 10,
    borderColor: GlobalStyles.colors.grey100,
    borderWidth: 1,
  },
  buttonTextAdd: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.white,
  },
  buttonTextCancel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: GlobalStyles.colors.grey100,
  },
});

export default AddExerciseModal;
