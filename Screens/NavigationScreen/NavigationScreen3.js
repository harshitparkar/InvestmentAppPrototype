import React from 'react';
import {SafeAreaView, StyleSheet, Text,Button} from 'react-native';

export default function NavigationScreen3({navigation}) {
  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <Text>Screen 3</Text>
      <Button
        title="Screen4"
        onPress={() => navigation.navigate('NavigationScreen4')}
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
