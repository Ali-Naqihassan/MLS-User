// // import React from "react";
// // import { NavigationContainer } from "@react-navigation/native";
// // import FlashMessage from "react-native-flash-message";
// // import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // // import SignUpScreen from "./src/screens/SignUpScreen";
// // // import SignInScreen from "./src/screens/SignInScreen";

// // // import HomeScreen from "./src/screens/HomeScreen"; //nice but not of use

// // import ExploreScreen from "./src/screens/ExploreScreen"; //This is nav screen we were looking for
// // // import SplashScreen from "./src/screens/SplashScreen"; //NIce splashed
// // // import ProfileScreen from "./src/screens/ProfileScreen"; //Our Mechanic Profile
// // // import NotificationScreen from "./src/screens/NotificationScreen"; //Will see if it is useful or not
// // import CardItemDetails from "./src/screens/CardItemDetails"; //may be helpful

// // // import SupportScreen from "./src/screens/SupportScreen";
// // import CardListScreen from "./src/screens/CardListScreen";
// // import MapOnly from "./src/screens/Driver/MapOnly";
// // import ScreenRating from "./src/screens/ScreenRating";

// // const Stack = createNativeStackNavigator();
// // const App = () => {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator>
// //         <Stack.Screen name="CardListScreen" component={CardListScreen} />
// //         <Stack.Screen name="home" component={ExploreScreen} />
// //         <Stack.Screen
// //           name="map"
// //           component={MapOnly}
// //           options={{ headerShown: false }}
// //         />
// //         <Stack.Screen
// //           name="CardItemDetails"
// //           component={CardItemDetails}
// //           options={{ headerShown: false }}
// //         />
// //       </Stack.Navigator>
// //       <FlashMessage position="top" />
// //     </NavigationContainer>
// //   );
// // };

// // export default App;

import React from "react";
import {
  OriginContextProvider,
  DestinationContextProvider,
} from "./src/contexts/contexts";

import RoootNavigator from "./src/navigations/RootNavigator";

const App = () => {
  return (
    <DestinationContextProvider>
      <OriginContextProvider>
        <RoootNavigator />
      </OriginContextProvider>
    </DestinationContextProvider>
  );
};

export default App;
