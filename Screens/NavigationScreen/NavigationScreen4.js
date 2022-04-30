import React from 'react';
import {SafeAreaView, StyleSheet, Text,Button} from 'react-native';

export default function NavigationScreen4({navigation}) {
  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <Text>Screen 4</Text>
      <Button
        title="Screen1"
        onPress={() => navigation.navigate('NavigationScreen1')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
