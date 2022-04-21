/* eslint-disable prettier/prettier */
import React, { useEffect, useRef } from 'react'
import { Layout , Button, Icon} from '@ui-kitten/components'
import TeamsForm from '../components/add-teams-form/TeamsForm'
import UserForm from '../components/add-users-form/UserForm'

export default function Users({route, navigation}) {
  let teams = 0
  let users = []
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
  const getUserArray = (userArray) => {
    users = userArray
  }
  const getNteams = (nteam) => {
    teams = nteam
  }
  return (
    <>
      <Layout style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1ede4' }}>
        <TeamsForm getNteams={getNteams} />
      </Layout>
      <Layout style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1ede4' }}>
        <UserForm getUserArray={getUserArray} />
      </Layout>
      <Layout style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1ede4' }}>
      <Button  accessoryRight={renderInfiniteAnimationIcon}  style={ { width:'10%', height:10} } status='warning' onPress={() => navigation.navigate('Teams', {players: users, nTeams: teams})}/>
      </Layout>
    </>
  )
}