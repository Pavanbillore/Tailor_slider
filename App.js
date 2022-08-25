import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectCategory from './Screen/SelectCategory';
import DressType from './Screen/DressType';
import SuitType from './Screen/SuitType';
import MeasurementType from './Screen/MeasurementType';
import FitMessege from './Screen/FitMessege'; 
import NotchLapel from './Screen/NotchLapel';
import CustomeDesign from './Screen/CustomeDesign';
import CustomeDesignTwo from './Screen/CustomeDesignTwo';
import SelectShirtCloth from './Screen/SelectShirtCloth';
import YourMeasurements from './Screen/YourMeasurements';
// import YourMeasurementSecond from './Screen/YourMeasurementSecond';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SelectCategory" component={SelectCategory} options={{ headerShown: false }} />
        <Stack.Screen name="DressType" component={DressType} options={{ headerShown: false }} />
        <Stack.Screen name="SuitType" component={SuitType} options={{ headerShown: false }} />
        <Stack.Screen name="MeasurementType" component={MeasurementType} options={{ headerShown: false }} />
        <Stack.Screen name="FitMessege" component={FitMessege} options={{ headerShown: false }} />
        <Stack.Screen name="NotchLapel" component={NotchLapel} options={{ headerShown: false }} />
        <Stack.Screen name="CustomeDesign" component={CustomeDesign} options={{ headerShown: false }} />
        <Stack.Screen name="CustomeDesignTwo" component={CustomeDesignTwo} options={{ headerShown: false }} />
        <Stack.Screen name="SelectShirtCloth" component={SelectShirtCloth} options={{ headerShown: false }} />
        <Stack.Screen name="YourMeasurements" component={YourMeasurements} options={{ headerShown: false }} />
        {/* <Stack.Screen name="YourMeasurementSecond" component={YourMeasurementSecond} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;
// 
// import React from 'react';
// import {
  // SafeAreaView,
  // ScrollView,
  // StatusBar,
  // StyleSheet,
  // Text,
  // useColorScheme,
  // View,
// } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import SelectCategory from './Screen/SelectCategory';
// import DressType from './Screen/DressType';
// import SuitType from './Screen/SuitType';
// import MeasurementType from './Screen/MeasurementType';
// import FitMessege from './Screen/FitMessege';
// import CustomeDesignTwo from './Screen/CustomeDesignTwo';
// const Stack = createNativeStackNavigator();
// const App = () => {
//  return (
// 
  // <View>
{/* <SelectCategory /> */}
{/* <DressType /> */}
{/* <SuitType /> */}
{/* <MeasurementType /> */}
{/* <FitMessege /> */}
{/* <CustomeDesignTwo /> */}
  {/* </View>   */}
//  )}
// export default App;
// 