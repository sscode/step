import { useEffect, useState } from "react";
import { ActivityIndicator, View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";


function LoadingOverlay({ show, children }) {
  const [countdown, setCountdown] = useState(Math.floor(Math.random() * (51 - 34 + 1)) + 34);


  const strings = ["coxswains loading excel", "transposing photo to csv", "uploading csv to server", "calling a coach. please try again."]

  useEffect(() => {
    if (show) {
      const interval = setInterval(() => {
        setCountdown(prevCountdown => prevCountdown > 0 ? prevCountdown - 1 : 0);
      }, 1000);
      
      return () => {
        clearInterval(interval);
      };
    }
  }, [show]);

  const getCurrentString = () => {
    if (countdown > 31) {
      return strings[0];
    } else if (countdown > 19) {
      return strings[1];
    } else if (countdown > 3) {
      return strings[2];
    } else {
      return strings[3];
    }
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={GlobalStyles.colors.white} />
      <Text style={styles.countdownText}>Est. time remaining: {countdown}sec</Text>
      <Text style={styles.countdownTextSmall}>{getCurrentString()}</Text>
    </View>
  );
}


export default LoadingOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    countdownText: {
        marginTop: 24,
        color: GlobalStyles.colors.white,
      },
      countdownTextSmall: {
        marginTop: 8,
        fontSize: 8,
        color: GlobalStyles.colors.white,
    }
})