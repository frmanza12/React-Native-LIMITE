/* eslint-disable prettier/prettier */
import React from 'react'
import { Layout } from '@ui-kitten/components'
import TeamsForm from '../components/add-teams-form/TeamsForm'
import UserForm from '../components/add-users-form/UserForm'
export default function Users() {
  const teams = 0
  const users = []

  const getUserArray = (userArray) => {
    console.log(userArray)
  }
  const getNteams = (nteam) => {
    console.log(nteam)
  }
  return (
    <>
      <Layout style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1ede4' }}>
        <TeamsForm getNteams={getNteams} />
      </Layout>
      <Layout style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f1ede4' }}>
        <UserForm getUserArray={getUserArray} />
      </Layout>
    </>
  )
}