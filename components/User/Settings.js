import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { GlobalStyles } from '../../constants/styles';
import { userContext } from '../../store/userContext';

const Settings = () => {
  const userCtx = useContext(userContext);

  // Initialize addSetVibration with the value from userCtx.haptic
  const [addSetVibration, setAddSetVibration] = useState(userCtx.haptic);
  const [weightLbs, setWeightLbs] = useState(true);

  // Function to toggle the Add Set Vibration setting
  const toggleAddSetVibration = () => {
    const updatedValue = !addSetVibration; // Toggle the value
    setAddSetVibration(updatedValue); 
    userCtx.updateHaptic(updatedValue); 
    console.log('updatedValue', updatedValue);
  };

  // Use useEffect to listen for changes in userCtx.haptic and update addSetVibration
  useEffect(() => {
    setAddSetVibration(userCtx.haptic);
  }, [userCtx.haptic]);

  return (
    <View style={styles.container}>
        <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Add Set Vibration</Text>
            <Switch
                value={addSetVibration}
                onValueChange={toggleAddSetVibration}
                thumbColor={addSetVibration ? GlobalStyles.colors.primary : '#f4f3f4'}
            />
        </View>
        {/* <View style={styles.settingRow}>
            <Text style={styles.settingLabel}>Weight in Lbs</Text>
            <Switch
                value={addSetVibration}
                // onValueChange={toggleAddSetVibration}
                thumbColor={addSetVibration ? GlobalStyles.colors.primary : '#f4f3f4'}
            />
        </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.grey,
    borderRadius: 5,
  },
    settingRow: {
        paddingHorizontal: 16,
        paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    borderBottomColor: GlobalStyles.colors.grey100,
    borderBottomWidth: 1,
    },
  settingLabel: {
    fontSize: 18,
  },
});

export default Settings;
