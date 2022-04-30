import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Amount from './components/amount';
import Header from './components/header';
import Products from './Sections/Products';
import Shares from './Sections/Shares';

export default function HomeScreen({navigation}) {
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <Header NavigateTo={() => navigation.openDrawer()} />
      <Amount AmountNumber={'109 987 973'} />
      <View style={styles.categoryContainer}>
        <Products />
        <Shares />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#f9f5fd',
    flex: 1,
    alignItems: 'center',
  },
  categoryContainer: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 20,
  },
});
