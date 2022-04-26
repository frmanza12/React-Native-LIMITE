/* eslint-disable prettier/prettier */
/* eslint-disable semi */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Layout, Button, Card, Text, Icon, ModalService, Input, Modal } from '@ui-kitten/components'
import { ScrollView, StyleSheet, } from 'react-native';
import { View, TextInput } from 'react-native'

const RefreshTeams = (props) => (
  <Icon {...props} name='refresh-outline' />
);
const EditName = (props) => (
  <Icon {...props} name='edit-outline' />
);
// create n teams with randoms users from an array

export default function Teams({ route, navigation }) {
  const createGropus = (users, n) => {
    const teams = []
    const nUsers = users.length
    const nTeams = n
    const copyUsers = [...users]
    const nUsersPerTeam = Math.trunc(nUsers / nTeams)
    let nUsersPerTeamRest = nUsers % nTeams
    for (let i = 0; i < nTeams; i++) {
      const nUsersPerTeamRestArray = []
      if (nUsersPerTeamRest > 0) {
        for (var j = 0; j <= nUsersPerTeam; j++) {
          nUsersPerTeamRestArray.push(
            copyUsers[Math.floor(Math.random() * copyUsers.length)],
          );
          for (var k = 0; k < copyUsers.length; k++) {
            if (copyUsers[k] === nUsersPerTeamRestArray[nUsersPerTeamRestArray.length - 1]) {
              copyUsers.splice(k, 1);
            }
          }
        }
        nUsersPerTeamRest--;
      } else if (nUsersPerTeamRest === 0 && copyUsers.length > 0) {
        for (var h = 0; h < nUsersPerTeam; h++) {
          nUsersPerTeamRestArray.push(
            copyUsers[Math.floor(Math.random() * copyUsers.length)],
          );

          for (var y = 0; y < copyUsers.length; y++) {
            if (copyUsers[y] === nUsersPerTeamRestArray[nUsersPerTeamRestArray.length - 1]) {
              copyUsers.splice(y, 1);
            }
          }
        }
      }
      teams.push(nUsersPerTeamRestArray)
    }
    createTeans(teams)

  }

  let modalID = '';
  const editTeamName = (item) => {
    const contentElement = renderModalContentElement(item);
    modalID = ModalService.show(contentElement, { onBackdropPress: hideModal });
  };

  const hideModal = () => {
    ModalService.hide(modalID);
  };

  const renderModalContentElement = (item) => {
    console.log(item)
    return (
      <Layout style={{ flex: 0.8, backgroundColor: 'rgba(0, 0, 0, 0.5)', width: '100%', alignItems: 'center', alignContent: 'center' }}>
        <Card disabled={true}>

          <TextInput
            style={{ width: '100%' }}
            onChangeText={text => {
              let auxTeam = teams
              auxTeam[item.id].name = text
              setTeams(auxTeam)
            }}
            value={item.name}
            placeholder="useless placeholder"

          />

        </Card>
      </Layout>

    );
  };
  const createTeans = (TeansArray) => {
    const teams = [];
    TeansArray.forEach((element, index) => {
      const team = {
        id: index,
        name: `Equipo ${index + 1}`,
        users: element,
        points: 0,
      }
      teams.push(team)
    });
    setTeams(teams)
  }
  const [teams, setTeams] = useState([])

  useEffect(() => {
    console.log(route.params)
    createGropus(route.params.players, route.params.nTeams)
  }, [route.params]);

  return (
    <>
      <Layout style={{ flex: 0.1, backgroundColor: '#f1ede4', width: '100%', alignItems: 'center' }}>
        <Button accessoryLeft={RefreshTeams} status='basic' appearance='ghost' onPress={() => createGropus(route.params.players, route.params.nTeams)} />
      </Layout>
      <Layout style={{ flex: 0.7, backgroundColor: '#f1ede4', width: '100%', }}>
        <ScrollView>
          {teams.map((item, index) => (
            <Card key={index} style={styles.teamCard} status='warning'>
              <View style={{ width: '100%', alignItems: 'center', marginBottom: 10 }}>
                <Text category='h5' style={{ alignSelf: 'center' }}>{item.name}</Text>
              </View>
              {item.users.map((user, index) => (
                <Text key={index} style={{ color: '#ffff', fontSize: 25, fontFamily: 'Roboto-Bold', }}>{user}</Text>
              ))}
            </Card>
          ))}
        </ScrollView>

      </Layout>
      <Layout style={{ flex: 0.2, backgroundColor: '#f1ede4', width: '100%', alignContent: 'center', alignItems: 'center' }}>
        <Button status='warning' onPress={() => navigation.navigate('Roulette', { teams: teams })}>
          Go!
        </Button>
      </Layout>


    </>
  )
}

const styles = StyleSheet.create({
  teamCard: {
    shadowColor: "#000",
    backgroundColor: '#ee9b00',
    width: '60%',
    alignContent: 'center',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    marginBottom: 10,
    elevation: 10,
    padding: 0,
  },
  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
})