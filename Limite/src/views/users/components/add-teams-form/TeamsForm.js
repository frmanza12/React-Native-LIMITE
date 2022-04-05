/* eslint-disable prettier/prettier */
import React, { useRef } from 'react'
import { Layout, Input, Text } from '@ui-kitten/components'
import { StyleSheet } from "react-native";
import { linear } from 'react-native/Libraries/Animated/Easing';


export default function TeamsForm({getNteams}) {
    const inputRef = useRef();
    const [nteam, setNteam] = React.useState('');



    return (
        <>
            <Layout style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1ede4' }}>
                <Text style={styles.TeamNumber} >{nteam}</Text>

            </Layout>
            <Layout style={{ flex: 0.3, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#f1ede4' }}>

                <Input
                    placeholder='Número de equipos'
                    value={nteam}
                    onChangeText={nextValue => {setNteam(nextValue) 
                        getNteams(nextValue)}}
                />
            </Layout>

        </>
    )
}
const styles = StyleSheet.create({
    TeamNumber: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 70,
        fontFamily: 'Roboto-Bold',
        color: '#d62828'
    },
})