import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SoundAlert } from './models/Sound';
import { Vibrator } from './models/Vibration';

const vibe = new Vibrator();
const sound = new SoundAlert();

function turnSignalsOn() {
	sound.play();
	vibe.vibratePatternUntilCancel();
}

function turnSignalsOff() {
	sound.pause();
	vibe.cancel();
}

function HomeScreen({ navigation }) {
  return (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen</Text>
    <Button title="Settings" onPress={() => navigation.navigate('Configurations')}/>
    <Button title='Alert on' onPress={() => turnSignalsOn()}></Button>
    <Button title='Alert off' onPress={() => turnSignalsOff()}></Button>
  </View>
  );
}

function ConfigurationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Configurations Screen</Text>
      <Button
      title="Home"
      onPress={() => navigation.goBack()}
    />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Configurations" component={ConfigurationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;