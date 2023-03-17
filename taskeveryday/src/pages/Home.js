import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import InputSelect from '../components/inputSelect.js'


export default function Home() {
    return(
        <View style={style.container}>
            <Text style={style.title}>TASK EVERYDAY</Text>
            <Text style={style.subtitle}>Seu planejamento diário</Text>
            <InputSelect/>

            <StatusBar style="auto" />
        </View>  
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#8000FF",
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontFamily: 'Arial',
        fontWeight: '400',
        color: '#fafafa'
    },
    subtitle: {
        fontSize: 16,
        fontFamily: 'Arial',
        color: '#fafafa'
    },
})