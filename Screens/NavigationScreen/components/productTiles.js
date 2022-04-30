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
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import CategoryTitles from '../components/categoryTitles';

export default function ProductsTiles(props) {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <Text style={styles.titletext}>{props.PlanName}</Text>
        <Text style={styles.pricetext}>$ {props.Price}</Text>
        <View style={styles.iconsbuttonContainer}>
          <FAIcon name={props.Icons} size={40} color="#6f8fdc" />
          <View style={styles.buttonsStyle}>
            <IoniconsIcon name="arrow-forward-circle" size={30} color="black" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: Dimensions.get('screen').width / 3,
    width: Dimensions.get('screen').width / 2.5,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    justifyContent: 'space-between',
    padding: 10,
    margin: 20,
  },
  titletext: {
    fontSize: 15,
    color: '#94919b',
  },
  pricetext: {
    fontSize: 19,
    color: '#1c1638',
    fontWeight: '800',
  },
  buttonsStyle: {
    height: 35,
    width: 35,
    position: 'absolute',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'flex-end',
    right: 0,
    backgroundColor: 'white',
    borderRadius: 100,
    padding: 1,
    elevation: 5,
  },
  iconsbuttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    padding: 10,
  },
});
