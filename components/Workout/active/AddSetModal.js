import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TextInput,
} from 'react-native';
import { GlobalStyles } from '../../../constants/styles';

const AddSetModal = ({ visible, onRequestClose, onConfirm, exerciseName }) => {
  const [reps, setReps] = useState('');
  const [lbs, setLbs] = useState('');

  const handleConfirm = () => {
    console.log('add new ,', exerciseName);
    onConfirm({
      reps: parseInt(reps),
      lbs: parseInt(lbs),
      date: new Date().toISOString(),
      exerciseName: exerciseName,
    });

    setReps('');
    setLbs('');
    onRequestClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <View style={styles.modalView}>
        <Text style={styles.modalTitle}>Add Set</Text>
        <TextInput
          autoFocus={true}
          style={styles.modalInput}
          keyboardType="number-pad"
          placeholder="Reps"
          value={reps}
          onChangeText={setReps}
        />
        <TextInput
          style={styles.modalInput}
          keyboardType="number-pad"
          placeholder="Lbs"
          value={lbs}
          onChangeText={setLbs}
          onSubmitEditing={handleConfirm}
        />
        <View style={styles.modalButtons}>
          <TouchableOpacity
            style={[styles.modalButton, styles.modalButtonCancel]}
            onPress={onRequestClose}
          >
            <Text style={styles.modalButtonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.modalButton, styles.modalButtonConfirm]}
            onPress={handleConfirm}
          >
            <Text style={styles.modalButtonText}>Confirm</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddSetModal;

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  modalInput: {
    backgroundColor: GlobalStyles.colors.white,
    color: GlobalStyles.colors.black,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    fontSize: 18,
    width: '80%',
    marginBottom: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
    alignItems: 'center',
  },
  modalButtonCancel: {
    backgroundColor: GlobalStyles.colors.error500,
    marginRight: 8,
  },
  modalButtonConfirm: {
    backgroundColor: GlobalStyles.colors.primary500,
    marginLeft: 8,
  },
  modalButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
