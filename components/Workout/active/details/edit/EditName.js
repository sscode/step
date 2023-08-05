import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const EditName = ({ exerciseName, onSave }) => {
  const [editedName, setEditedName] = useState(exerciseName);

  const handleSave = () => {
    // Call the onSave function with the edited exercise name
    onSave(editedName);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={editedName}
        onChangeText={setEditedName}
        placeholder={exerciseName}
        placeholderTextColor="#CCCCCC"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // padding: 16,
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  }
});

export default EditName;
