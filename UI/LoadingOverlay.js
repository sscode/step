import { ActivityIndicator, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../constants/styles";


function LoadingOverlay({ show, children }) {
  return (

    <View style={styles.container}>
        <ActivityIndicator size="large" color={GlobalStyles.colors.gray200} />
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
        backgroundColor: GlobalStyles.colors.gray700
    }
})