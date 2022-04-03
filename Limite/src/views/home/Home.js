/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React, { useEffect, useRef } from 'react'
import { Layout, Button, Icon } from '@ui-kitten/components'
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import backgroundImage from '../../assets/images/home_background.png';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export const Home = ({navigation}) => {
  const infiniteAnimationIconRef = useRef();

  useEffect(() => {
    infiniteAnimationIconRef.current.startAnimation();
  }, []);

  const renderInfiniteAnimationIcon = (props) => (
    <Icon
      {...props}
      ref={infiniteAnimationIconRef}
      animationConfig={{ cycles: Infinity }}
      animation='zoom'
      name='play-circle-outline'
    />
  );
  return (
    <Layout style={styles.container}>
      <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
        <Button
         status={'basic'}
         onPress={() => {navigation.navigate('Users')}}
          style={styles.button}
          accessoryRight={renderInfiniteAnimationIcon}>
          ¡A BEBER!
        </Button>
      </ImageBackground>
    </Layout>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  button: {
    marginTop: 100,
    zIndex: 1,
    alignSelf: "center",
  
    color: '#ffffff',
    textDecorationColor: '#fff',
    borderColor: '#fff',
    
  },
  

});