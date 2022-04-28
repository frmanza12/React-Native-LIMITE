/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the UI Kitten template
 * https://github.com/akveo/react-native-ui-kitten
 *
 * Documentation: https://akveo.github.io/react-native-ui-kitten/docs
 *
 * @format
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import {
  ApplicationProvider,
  IconRegistry,
} from '@ui-kitten/components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import {Home} from './src/views/home/Home';
import Teams from './src/views/teams/container/Teams';
import Users from './src/views/users/containers/Users';
import RouletteView from './src/views/roulette/containers/Roulette';
import Group from './src/views/games/group/Group';
import Trivial from './src/views/games/trivial/Trivial';
import Individual from './src/views/games/individual/Individual';
import Special from './src/views/games/special/Special';
const Stack = createNativeStackNavigator();

export default () => (
  <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Users" component={Users} />
          <Stack.Screen name="Teams" component={Teams} />
          <Stack.Screen name="Roulette" component={RouletteView} />

          <Stack.Screen name="enEquipo" component={Group} />
          <Stack.Screen name="Individual" component={Individual} />
          <Stack.Screen name="Trivial" component={Trivial} />
          <Stack.Screen name="Especial" component={Special} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
  </>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  likeButton: {
    marginVertical: 16,
  },
});
