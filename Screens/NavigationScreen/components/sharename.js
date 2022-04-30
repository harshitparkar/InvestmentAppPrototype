import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';

export default function ShareNameTile(props) {
  return (
    <SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={[styles.color, {backgroundColor: props.Color}]} />
        <Text style={styles.plantext}>{props.PlanName}</Text>
        <Text style={styles.percentage}>{props.Percentage}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('screen').width / 3,
  },
  color: {
    height: 15,
    width: 15,
    borderRadius: 20,
  },
  plantext: {
    color: '#94919b',
  },
  percentage: {
    fontWeight: '800',
    color: 'black',
  },
});
