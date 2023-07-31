import React from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../../constants/styles';

const AddExerciseModal = ({ visible, onAdd, onCancel, onChangeText, value }) => {

  const addHandler = () => {
    if(value.length === 0) {
      return;
    }
    onAdd(value);
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
          <Text style={styles.modalTitle}>Add a new exercise</Text>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            onSubmitEditing={onAdd}
            placeholder="Exercise name"
            style={styles.modalInput}
            autoFocus={true}
          />
          <View style={styles.modalButtons}>
            <Button onPress={onCancel} title="Cancel" color={GlobalStyles.colors.gray700} />
            <Button
            onPress={addHandler} title="Add" color={GlobalStyles.colors.primary500} />
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
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: GlobalStyles.colors.gray500,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: GlobalStyles.colors.gray500,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
    color: GlobalStyles.colors.gray500,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AddExerciseModal;
