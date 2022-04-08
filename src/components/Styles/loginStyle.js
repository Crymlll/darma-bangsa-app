import {StyleSheet } from 'react-native';


const loginStyle = StyleSheet.create({
    
    container:{
        flex: 1,
        alignItems: 'center',
        height: '100%',
    },
    box2:{
        top: 0,
        alignItems: 'center',
        height: '70%',
    },

    title:{
        textAlign: 'center',
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        // marginTop: '20%',
    },

    background:{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    
    header:{
        textAlign: 'center',
        color: 'black',
        fontSize: 15,
        marginTop: '5%',
    },

    login:{
        marginBottom: '5%',
    },

    logo:{
        marginTop: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    box:{
        height: '30%',
        alignSelf: 'center',
        // backgroundColor: '#fff',
        padding: '10%',
        width: '100%',
        // shadowColor: '#000',
        // elevation: 5,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        top: 0,
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
        borderColor: '#041562',
    },
})

const sloginStyle = StyleSheet.create({
    box:{
        alignSelf: 'center',
        backgroundColor: '#fff',
        padding: '10%',
        width: '100%',
        height: '60%',
        marginTop: '80%',
        shadowColor: '#000',
        elevation: 5,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    background:{
        height: '100%',
        top: 0,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
    },

    input: {
        width: '100%',
        borderColor: '#c4c4c4',
        borderWidth: 1,
        marginBottom: '10%',
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
export {sloginStyle};