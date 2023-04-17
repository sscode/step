import React from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddExerciseModal = ({ visible, onAdd, onCancel, onChangeText, value }) => (
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
          placeholder="Exercise name"
          style={styles.modalInput}
        />
        <View style={styles.modalButtons}>
          <Button onPress={onAdd} title="Add" />
          <Button onPress={onCancel} title="Cancel" />
        </View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default AddExerciseModal;
