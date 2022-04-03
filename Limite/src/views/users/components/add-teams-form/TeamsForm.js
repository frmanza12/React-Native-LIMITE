/* eslint-disable prettier/prettier */
import React , { useRef } from 'react'
import { Layout, Button , Input, Icon} from '@ui-kitten/components'

const AddIcon = (props) => (
        <Icon {...props} name='plus-circle'/>
  );

export default function TeamsForm() {
    const num = useRef();
    const [nteam, setNteam] = React.useState('');
    const addTeam = () => {
     const numer = num.current.value;
     if(numer !== ''){
      setNteam(numer);
     }

    }
    
    return (
        <>
            <Layout style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
           
            </Layout>
            <Layout style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center',  }}>
            <Layout style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center',}}>
            <Input
                placeholder='Número de equipos'
                ref={num}
                />
            <Button onPress={addTeam}  appearance='ghost'
             accessoryLeft={AddIcon}
             />
            </Layout>
            </Layout>

        </>
    )
}