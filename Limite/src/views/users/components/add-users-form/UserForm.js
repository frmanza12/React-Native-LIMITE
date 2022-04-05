/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import { View } from 'react-native'
import React from 'react'
import { Layout, Input, Button } from '@ui-kitten/components'

export default function UserForm({getUserArray}) {
    const [user, setUser] = React.useState('');
    const [userArray, setUserArray] = React.useState([]);

    const addUserToList = () => {
        if (user === '') return;
        setUserArray([...userArray, user])
        getUserArray([...userArray, user])
        setUser('')
    }

    return (
        <>
            <Layout style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f1ede4' }}>
                <Input
                    placeholder='Usuario'
                    value={user}
                    onChangeText={nextValue => setUser(nextValue)}
                />
                <Button onPress={() => addUserToList()} />
            </Layout>
            <Layout style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f1ede4' }}>


            </Layout>

        </>
    )
}