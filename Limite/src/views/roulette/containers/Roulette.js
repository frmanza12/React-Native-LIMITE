/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */

import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Image, Animated } from 'react-native';
import Roulette from 'react-native-casino-roulette';
import { Layout, Button, Icon, Text } from '@ui-kitten/components'
import marker from '../../../assets/roulett/marker.png'
import wheel from '../../../assets/roulett/wheel.png'
import { useState } from 'react';

    export default function RouletteView({route, navigation}) {

    const numbers = [
        'En equipo',
        'Individual',
        'Trivial',
        'Especial',
        'En equipo',
        'Individual',
        'En equipo',
        'Trivial',
    ];
   
    useEffect(() => {
        console.log(route.params)

    }, [route.params]);


    const options = numbers.map(o => ({ index: o }));
    const customOptions = numbers.map((o, index) => (
        
        <Text
            style={
                index === 2 || index === 6
                    ? { color: 'black', fontWeight: 'bold', fontSize: 15 }
                    : { color: 'white', fontWeight: 'bold', fontSize: 15 }
            }
            index={index}>
            {o}
        </Text>
    ));

    return (
        <>
            <Layout style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1ede4' }}>
                <Text></Text>
            </Layout>
            <Layout style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1ede4' }}>
                <Roulette
                    enableUserRotate
                    marker={marker}
                    options={customOptions}
                    markerTop={-24}
                    background={wheel}
                    rotateEachElement={index =>
                        ((index * 360) / options.length) * -1 - 90
                    }
                    onRotate={(item, index) => {
                        console.log(item.props.index)
                    }}
                    markerWidth={200}></Roulette>
            </Layout>
        </>
    )
}