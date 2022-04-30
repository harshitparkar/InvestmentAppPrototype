import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import CategoryTitles from '../components/categoryTitles';
import ShareTiles from '../components/shareTiles';

export default function Shares(props) {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <CategoryTitles Title={'Shares of products'} />
        <ShareTiles/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: Dimensions.get('screen').height / 4,
    width: Dimensions.get('screen').width,
    backgroundColor: 'white',
  },
});
