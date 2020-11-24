import * as React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SoundAlert} from './models/Sound';
import { Vibrator } from './models/Vibration';
import { getPermissionsAsync } from 'expo-av/build/Audio';

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

  <View style= {styles.container}>

    <View style= {{alignItems: 'flex-end'}}>
      <TouchableOpacity style={styles.btnConfig} onPress={() => navigation.navigate('Configurations')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.Center}>
      <Text style={styles.txtScreen}>Home Screen</Text>
      <TouchableOpacity style={styles.btnSimple} onPress={() => turnSignalsOn()}>
        <Text>Turn On</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnSimple} onPress={() => turnSignalsOff()}>
        <Text>Turn Off</Text>
      </TouchableOpacity>
    </View>

  </View>
  );
}

function ConfigurationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.txtScreenS}>Configurations Screen</Text>
      <Button
      title="Home"
      onPress={() => navigation.goBack()}
    />
    </View>
  );
}

const Stack = createStackNavigator();

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },

  btnConfig: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 80,
    margin: 15,
    backgroundColor: "#DDDDDD",
  },

  Center:{
    paddingTop: 100,
    alignItems: 'center',
    justifyContent: 'center',  
  },

  btnSimple:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 80,
    backgroundColor: "#DDDDDD",
    marginBottom: 10,
  },

  txtScreen: {
    marginBottom: 5,
  },
  
})

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="BabyAlert" component={HomeScreen} />
        <Stack.Screen name="Configurations" component={ConfigurationsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;