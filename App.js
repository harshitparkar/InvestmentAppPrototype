import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import NavigationScreen1 from './Screens/NavigationScreen/NavigationScreen1';
import NavigationScreen2 from './Screens/NavigationScreen/NavigationScreen2';
import NavigationScreen3 from './Screens/NavigationScreen/NavigationScreen3';
import NavigationScreen4 from './Screens/NavigationScreen/NavigationScreen4';
import DrawerScreen1 from './Screens/DrawerScreen/DrawerScreen1';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function NavigationScreens() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NavigationScreen1" component={NavigationScreen1} />
      <Stack.Screen
        options={{
          animation: 'slide_from_bottom',
        }}
        name="NavigationScreen2"
        component={NavigationScreen2}
      />
      <Stack.Screen name="NavigationScreen3" component={NavigationScreen3} />
      <Stack.Screen name="NavigationScreen4" component={NavigationScreen4} />
    </Stack.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="NavigationScreens" component={NavigationScreens} />
      <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;
