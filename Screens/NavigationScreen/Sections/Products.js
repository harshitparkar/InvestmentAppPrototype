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
  FlatList,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CategoryTitles from '../components/categoryTitles';
import ProductsTiles from '../components/productTiles';

export default function Products(props) {
  const Data = [
    {
      id: 0,
      planName: 'Basic Plan',
      price: '122 726',
      icons: 'file-invoice-dollar',
    },
    {
      id: 1,
      planName: 'SuperTrader',
      price: '1 981 000',
      icons: 'cash-register',
    },
    {
      id: 3,
      planName: 'Party Expense',
      price: '120 176',
      icons: 'cocktail',
    },
  ];

  function renderItem({item}) {
    return (
      <ProductsTiles
        PlanName={item.planName}
        Price={item.price}
        Icons={item.icons}
      />
    );
  }
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <CategoryTitles Title={'Products'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={item => item.id}
          data={Data}
          renderItem={renderItem}
        />
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
