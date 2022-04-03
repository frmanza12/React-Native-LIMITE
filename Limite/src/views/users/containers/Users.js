/* eslint-disable prettier/prettier */
import React from 'react'
import { Layout } from '@ui-kitten/components'
import TeamsForm from '../components/add-teams-form/TeamsForm'
export default function Users() {
  return (
    <>
    <Layout style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
        <TeamsForm/>
    </Layout>
     <Layout style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' , backgroundColor:'blue'}}>

     </Layout>
     </>
  )
}