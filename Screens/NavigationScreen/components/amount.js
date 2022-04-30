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

export default function Amount(props) {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.textmainContainer}>
          <Text style={styles.titletext}>Your portfolio</Text>
          <Text style={styles.amounttext}>{"$\t\t"}{props.AmountNumber}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: Dimensions.get('screen').height / 4.5,
    width: Dimensions.get('screen').width / 1.1,
    backgroundColor: '#9ba6ef',
    borderRadius: 20,
    justifyContent: 'center',
  },
  textmainContainer: {
      margin:25
  },
  titletext: {
    fontSize: 20,
    color: '#cdcdf6',
  },
  amounttext: {
    fontWeight: '700',
    fontSize: 30,
    color: 'white',
    marginTop:15,
  },
});
