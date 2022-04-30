import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CategoryTitles from '../components/categoryTitles';
import ProductsTiles from '../components/productTiles';

export default function Products(props) {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <CategoryTitles Title={'Products'} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ProductsTiles />
          <ProductsTiles />
          <ProductsTiles />
          <ProductsTiles />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 25,
    height: Dimensions.get('screen').height / 4,
    width: Dimensions.get('screen').width,
    backgroundColor: 'white',
  },
});
