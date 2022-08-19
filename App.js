import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectCategory from './Screen/SelectCategory';
import DressType from './Screen/DressType';
import SuitType from './Screen/SuitType';
import MeasurementType from './Screen/MeasurementType';
import FitMessege from './Screen/FitMessege';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;

// import React from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import SelectCategory from './Screen/SelectCategory';
// import DressType from './Screen/DressType';
// import SuitType from './Screen/SuitType';
// import MeasurementType from './Screen/MeasurementType';
// import FitMessege from './Screen/FitMessege';

// const Stack = createNativeStackNavigator();
// const App = () => {
//  return (

//   <View>
// {/* <SelectCategory /> */}
// {/* <DressType /> */}
// {/* <SuitType /> */}
// {/* <MeasurementType /> */}
// <FitMessege />
//   </View>  
//  )}
// export default App;
