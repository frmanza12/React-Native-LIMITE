/* eslint-disable prettier/prettier */
/* eslint-disable jsx-quotes */
/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable semi */
import { View } from 'react-native'
import React from 'react'
import { Layout, Input, Button, Card, Text, Icon } from '@ui-kitten/components'
import { ScrollView , StyleSheet} from 'react-native';

const PlusIcon = (props) => (
    <Icon {...props} name='plus-circle-outline'/>
  );
export default function UserForm({ getUserArray }) {
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
            <Layout style={{ flex: 0.2, justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f1ede4' , width:'100%'}}>
                <View style={{ flexDirection: 'row',  }}>
                    <Input
                    style={{ width: '50%' }}
                        placeholder='Usuario'
                        value={user}
                        onChangeText={nextValue => setUser(nextValue)}
                    />
                    <Button accessoryLeft={PlusIcon}  style={ { width:'10%', height:10} } status='warning' onPress={() => addUserToList()} />
                </View>
            </Layout>
            <Layout style={{ flex: 0.8, width:'100%', backgroundColor: '#f1ede4' }}>
                <ScrollView>
                    {userArray.map((item, index) => (
                        <Card key={index} style={styles.UserCard} status='warning'>
                            <Text style={{color:'#ffff', fontSize:20, fontFamily: 'Roboto-Bold',}}>{item}</Text>
                        </Card>
                    ))}
                </ScrollView>
            </Layout>
        </>


    )
}
const styles = StyleSheet.create({
    UserCard: {
        shadowColor: "#000",
        backgroundColor:'#ee9b00',
        width: '60%',
        alignContent: 'center',
        alignSelf: 'center',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,
        alignItems: 'center', 
        marginBottom: 10,
        elevation: 10,
        padding: 0,
    },
})