import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Button,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function CategoryTitles(props) {
  return (
    <SafeAreaView>
      <View>
        <Text style={styles.titletext}>{props.Title}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titletext: {
    fontSize: 20,
    color: 'black',
    marginHorizontal: 20,
  },
});
