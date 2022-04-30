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

export default function Header(props) {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <TouchableOpacity
          onPress={props.NavigateTo}
          style={styles.drawerIconContainer}>
          <AntIcon name="menuunfold" size={20} color="#7f7b8c" />
        </TouchableOpacity>
        <Text style={styles.textstyle}>Portfolio</Text>
        <View style={styles.drawerIconContainer}>
          <FeatherIcon name="bell" size={20} color="#7f7b8c" />
          <View style={styles.alertStyle} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width,
    padding: 15,
  },
  drawerIconContainer: {
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 40,
    width: 40,
  },
  alertStyle: {
    backgroundColor: '#698fee',
    width: 10,
    height: 10,
    position: 'absolute',
    top: 0,
    alignSelf: 'flex-end',
    borderRadius: 10,
  },
  textstyle: {
    fontSize: 20,
    color: '#1b1639',
    fontWeight: '600',
  },
});
