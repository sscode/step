import React, { useState } from 'react';
import { StyleSheet, Text, View, PanResponder } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  useAnimatedSensor, SensorType
} from 'react-native-reanimated';

const StockMain = () => {
  const stockList = ['AAPL', 'MSFT', 'AMZN'];
  const backgroundColors = ['lightblue', 'lightgreen', 'lightpink'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotation = useAnimatedSensor(SensorType.ROTATION);

  // Shared value to track the x-axis translation
  const translateX = useSharedValue(0);

  // PanResponder for handling drag gestures
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      // Start of drag
    },
    onPanResponderMove: (_, { dx, vx }) => {
      // Update the shared value based on drag
      if(dx < 0) {
        translateX.value = dx;
      }
    },
    onPanResponderRelease: (_, { dx, vx }) => {
      // End of drag, you can add animation logic here if needed
      translateX.value = withTiming(0, { duration: 0 }); //  back to the initial position

      if (vx < -0.5) {
        // If velocity is less than -1, increment the index
        setCurrentIndex((prevIndex) =>
          prevIndex === stockList.length - 1 ? 0 : prevIndex + 1
        );
      }
    },
  });

  const animatedStyleCircle = useAnimatedStyle(() => {
    // console.log('rotation', rotation.value);
    // return {
    //   transform: [{ translateX: translateX.value }],
    // };
    return {
        transform: [{ rotate: `${rotation.value}deg` }],
    }
  });


  // Animated style to apply the translation
  const animatedStyle = useAnimatedStyle(() => {

    return {
      transform: [{ translateX: translateX.value }],
        backgroundColor: backgroundColors[currentIndex],
    };
  });

  const animatedStyleBG = useAnimatedStyle(() => {

    let bgIndex;
    
    if (currentIndex === stockList.length - 1) {
        bgIndex = 0;
    } else {
        bgIndex = currentIndex + 1;
    }

    console.log('bgIndex', bgIndex);

    return {
      backgroundColor: backgroundColors[bgIndex],
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyleBG]}>
      <Animated.View style={[styles.stockItem, animatedStyle]} {...panResponder.panHandlers}>
        <Animated.View style={[styles.circle, animatedStyleCircle]}></Animated.View>
        <Text>{stockList[currentIndex]}</Text>
      </Animated.View>
    </Animated.View>
  );
};

export default StockMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    marginBottom: 50,
  },
  stockItem: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
