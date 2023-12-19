import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../../constants/styles';

const Header = () => {
  return (
    <View
    style={styles.container}
    >
        <Text
        style={styles.headerEmoji}
        >
        🤗
        </Text>
      <Text
      style={styles.headerText}
      >Step With Friends</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: '100%',
        backgroundColor: GlobalStyles.colors1.primary,
    },
    headerEmoji: {
        fontSize: 24,
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors1.black,
    },
})