/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { StyleSheet, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Layout, Button, Icon, Text, Card } from '@ui-kitten/components'

export default function Individual({ route, navigation }) {
    const choosePlayers = (teams) => {
        // take two randoms differents items from an array
        if (teams.length > 2) {
            const max = teams.length - 1;
            const randomNumber = Math.floor(Math.random() * (max - 0 + 1)) + 0;
            const randomNumber2 = Math.floor(Math.random() * (max - 0 + 1)) + 0;
            if (randomNumber === randomNumber2) {
                return choosePlayers(teams);
            }
        } else {
            const randomNumber = Math.floor(Math.random() * teams[0].users.length);
            const randomNumber2 = Math.floor(Math.random() * teams[1].users.length);
            const users = [
                {
                    team: teams[0].id,
                    name: teams[0].users[randomNumber]
                },
                {
                    team: teams[1].id,
                    name: teams[1].users[randomNumber2]
                }
            ]
            console.log('users', users)
            setPlayers(users)
        }

    }
    const gameFinished = (player) => {
        const teams = route.params.teams

        teams[player.team].points += 3
        navigation.navigate('Roulette', { teams: teams })
    }


    const [players, setPlayers] = useState([]);
    useEffect(() => {
        console.log('individual')
        console.log(route.params.teams)
        console.log(route.params.teams.length)
        choosePlayers(route.params.teams)
    }, []);

    if (players.length > 0) {
        return (
            <>
                <Layout style={{ flex: 0.2, backgroundColor: '#f1ede4', width: '100%', alignItems: 'center', flexDirection: 'row', alignContent: 'center' }}>

                    <Card key={0} status='warning' style={styles.teamCard}>
                        <Text style={{ alignSelf: 'center', fontSize: 25, }}>{players[0].name}</Text>
                    </Card>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#000000', padding: 10 }}>VS</Text>
                    <Card key={1} status='warning' style={styles.teamCard}>
                        <Text style={{ alignSelf: 'center', fontSize: 25, }}>{players[1].name}</Text>
                    </Card>
                </Layout>
                <Layout style={{ flex: 0.6, backgroundColor: '#f1ede4', width: '100%', alignItems: 'center' }}>
                </Layout>
                <Layout style={{ flex: 0.2, backgroundColor: '#f1ede4', width: '100%', alignItems: 'center' }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#000000', padding: 10 }}>¿Quién ha ganado?</Text>
                    <View style={{ width: '100%', flexDirection: 'row', alignContent: 'center' }}>
                        <Button style={{ marginLeft: 20 }} status='warning' onPress={() => gameFinished(players[0])}>
                            {players[0].name}
                        </Button>
                        <Button style={{ marginLeft: 20 }} status='warning' onPress={() => gameFinished(players[1])}>
                            {players[1].name}
                        </Button>

                    </View>


                </Layout>
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
}
const styles = StyleSheet.create({
    teamCard: {
        shadowColor: "#000",
        backgroundColor: '#ee9b00',
        flexDirection: 'row',
        alignContent: 'center',
        alignSelf: 'center',
        marginRight: 10,
        marginLeft: 10,
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