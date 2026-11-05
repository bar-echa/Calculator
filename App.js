import Homepage from './src/HomePage';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function App() {
  const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
      <Stack.Navigator initialRouteName="GLA1-01(b):Calculator Layout">

        <Stack.Screen
          name="GLA1-01(b):Calculator Layout"
          component={Homepage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;