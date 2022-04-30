import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import PieChart from 'react-native-pie-chart';
import ShareNameTile from './sharename';

export default function ShareTiles() {
  const series = [34, 46, 20];
  const sliceColor = ['#f6dea2', '#6990f0', '#b199ef'];
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.graphContainer}>
          <Text style={styles.percentText}>100%</Text>
          <PieChart
            widthAndHeight={190}
            series={series}
            doughnut={true}
            sliceColor={sliceColor}
            coverRadius={0.7}
          />
        </View>
        <View
          style={styles.ShareNameContainer}>
          <ShareNameTile
            Color={'#6990f0'}
            PlanName={'BasicPland'}
            Percentage={'34%'}
          />
          <ShareNameTile
            Color={'#b199ef'}
            PlanName={'SuperTrader'}
            Percentage={'46%'}
          />
          <ShareNameTile
            Color={'#f6dea2'}
            PlanName={'Gold+'}
            Percentage={'20%'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
    backgroundColor: 'white',
    borderRadius: 20,
    elevation: 5,
    justifyContent: 'space-between',
    padding: 10,
    margin: 20,
  },
  ShareNameContainer:{
    width:Dimensions.get('screen').width/2,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  graphContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal:10,
  },
  percentText: {
    top: '50%',
    zIndex: 1,
    fontSize: 20,
    fontWeight: '700',
  },
});
