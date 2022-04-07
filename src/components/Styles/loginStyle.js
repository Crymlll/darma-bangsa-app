import {StyleSheet } from 'react-native';


const loginStyle = StyleSheet.create({
    box:{
        alignSelf: 'center',
        backgroundColor: '#fff',
        padding: '10%',
        width: '100%',
        shadowColor: '#000',
        elevation: 5,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    input: {
        width: '100%',
        borderColor: '#c4c4c4',
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        lineHeight: 1,
    },
    ButtonSubmit:{
        fontWeight: '400',
        fontSize: 20,
        paddingTop: 5,
        color: '#fff',
        backgroundColor: '#041562',
        borderRadius: 5,
        textAlign: 'center',
        width: '100%',
        height: 40,
    },
    ButtonSubmitWhite:{
        marginTop: '5%',
        fontWeight: '400',
        fontSize: 20,
        paddingTop: 5,
        backgroundColor: '#fff',
        borderRadius: 5,
        textAlign: 'center',
        width: '100%',
        height: 40,
        borderRadius: 5,
        color: '#041562',
        borderWidth: 1,
    },
})

export default loginStyle;
