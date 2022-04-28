/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { View, Text } from 'react-native'
import React,  { useEffect, useRef } from 'react'

export default function Group({ route, navigation }) {
  useEffect(() => {
    console.log(route.params)
   
}, [route.params]);

  return (
    <View>
      <Text>Group</Text>
    </View>
  )
}