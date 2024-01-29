import React, { useState, useEffect } from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';

const Recorder = () => {
  const [recording, setRecording] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');

  const recordingHandler = () => {
    setRecording(!recording);
  }
  

  return (
    <View style={styles.container}>
      <Pressable
        //if recording is true, then style is buttonPressed, else style is button
        style={({ pressed }) => [styles.button, recording && styles.buttonPressed]}
        onPress={recordingHandler}
      >
        {({ pressed }) => (
          <Text style={styles.text}>{recording ? 'Stop' : 'Start Recording'}</Text>
        )}
      </Pressable>
      <Text>Recognized Text</Text>
      <Text
      style={styles.recText}
      >{recognizedText}</Text>

    </View>
  );
};

export default Recorder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: 20,
    borderRadius: 5,
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
  },
  buttonPressed: {
    backgroundColor: 'red',
  },
  recText: {
    backgroundColor: 'lightgrey',
    width: '80%',
    height: '20%',
    marginTop: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
  }



});
