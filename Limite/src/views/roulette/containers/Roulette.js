/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */

import React, { useEffect, useRef } from 'react'
import { StyleSheet, View, Image, Animated, ScrollView } from 'react-native';
import Roulette from 'react-native-casino-roulette';
import { Layout, Button, Icon, Text, Card } from '@ui-kitten/components'
import marker from '../../../assets/roulett/marker.png'
import wheel from '../../../assets/roulett/wheel.png'
import { useState } from 'react';

export default function RouletteView({ route, navigation }) {

    const numbers = [
        {
            name: 'En equipo',
            code: 'enEquipo',
        },
        {
            name: 'Individual',
            code: 'Individual',
        },
        {
            name: 'Trivial',
            code: 'Trivial',
        },
        {
            name: 'Especial',
            code: 'Especial',
        },
        {
            name: 'En equipo',
            code: 'enEquipo',
        },
        {
            name: 'Individual',
            code: 'Individual',
        },
        {
            name: 'En equipo',
            code: 'enEquipo',
        },
        {
            name: 'Trivial',
            code: 'Trivial',
        }
    ];

const goToGameView = (game) => {
    navigation.navigate(numbers[game].code, { teams: teams })
}
    useEffect(() => {
        console.log(route.params)
        setTeams(route.params.teams)
    }, [route.params]);

    const [teams, setTeams] = useState([]);
    const options = numbers.map(o => ({ index: o }));
    const customOptions = numbers.map((o, index) => (

        <Text
            style={
                index === 2 || index === 6
                    ? { color: 'black', fontWeight: 'bold', fontSize: 15 }
                    : { color: 'white', fontWeight: 'bold', fontSize: 15 }
            }
            index={index}>
            {o.name}
        </Text>
    ));

    return (
        <>
            <Layout style={{ flex: 0.1, backgroundColor: '#f1ede4', width: '100%', alignItems: 'center' }}>
            </Layout>
            <Layout style={{ flex: 0.3, alignItems: 'center', backgroundColor: '#f1ede4', flexDirection: 'row',  flexWrap: 'wrap', }}>
                {teams.map((team, index) => (
                    <Card key={index} status='warning' style={styles.teamCard}>
                        <Text style={{ alignSelf: 'center', fontSize: 20, }}>{team.name}</Text>
                        <Text style={{ alignSelf: 'center', color: '#ffff', fontSize: 25, }}> {team.points}</Text>
                    </Card>
                ))}

            </Layout>
            <Layout style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1ede4' }}>
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
                        setTimeout(() => {
                            goToGameView(item.props.index)
                        }
                        , 10)
                    }}
                    markerWidth={200}></Roulette>
            </Layout>
            <Layout style={{ flex: 0.1, backgroundColor: '#f1ede4', width: '100%', alignItems: 'center' }}>
            </Layout>
        </>
    )
}
const styles = StyleSheet.create({
    teamCard: {
        shadowColor: "#000",
        backgroundColor: '#ee9b00',
        flexDirection: 'row',
        alignContent: 'center',
        alignSelf: 'center',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        marginTop: 10,
        marginBottom: 5,
        elevation: 10,
        padding: 0,
    },
    container: {
        minHeight: '100%',
    },
    backdrop: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
})