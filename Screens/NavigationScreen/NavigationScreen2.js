import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';

export default function NavigationScreen2({navigation}) {
  return (
    <SafeAreaView style={[styles.mainContainer]}>
      <Text>Screen 2</Text>
      <Button
        title="Screen3"
        onPress={() => navigation.navigate('NavigationScreen3')}
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
