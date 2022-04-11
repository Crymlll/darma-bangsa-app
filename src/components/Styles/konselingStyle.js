import { StyleSheet } from 'react-native';

const konselingStyle = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },

})

const konselingIconStyle = StyleSheet.create({
    box:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F29191',
        borderRadius: 15,
    },
    Icon:{
        fontSize: 48,
        color: 'black',
    },
    text:{
        fontSize: 18,
        color: 'black',
        marginTop: 10,
    },
})

const jadwalKonselingStyle = StyleSheet.create({
    box:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CDF2CA',
        borderRadius: 15,
    },
    Icon:{
        fontSize: 48,
        color: 'black',
    },
    text:{
        fontSize: 18,
        color: 'black',
        marginTop: 10,
        textAlign: 'center',
    },
})

const konselingMenuStyle = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    blueBox:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: '10%',
        backgroundColor: '#11468F',
        paddingRight: '5%',
        paddingLeft: '3%',
    },
    iconBox:{
        backgroundColor: 'white',
        width: '10%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    Icon:{
        fontSize: 50,
        color: 'black',
    },
    judul:{
        fontSize: 20,
        color: 'white',
        marginLeft: '5%',
    },
    box:{
        width: '90%',
        height: '80%',
    },
    konselingBox:{
        width: '100%',
        padding: '5%',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: '5%',
        flexDirection: 'row',
    },
    textKonseling:{
        borderRadius: 10,
    },
    button:{
        width: '100%',
        padding: '3%',
        backgroundColor: '#11468F',
        borderRadius: 10,
        flexDirection: 'row',
    },
    textButton:{
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
    },
    Icon2:{
        fontSize: 25,
        color: 'white',
        marginRight: '5%',
    },
    bottom:{
        height: '10%',
    },
    package:{
        marginTop: '2%',
    },
    formSingle:{
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#969696',
        borderRadius: 10,
        marginTop: 5,
        padding: '2%',
    },
    input:{
        flex: 1,
        backgroundColor: '#fff',
        color: '#424242',
        marginLeft: '5%',
    },
    text2:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'#000000'
    },
    formDateTime:{
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#969696',
        borderRadius: 10,
        marginTop: 5,
        padding: '2%',
    },
    datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        alignItems: 'flex-start',
    },
    pickedDate: {
        fontSize: 15,
        fontWeight: '400',
        color: '#000',
        marginLeft: '5%',
    },
    btn:{
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
    
})

export { konselingMenuStyle, jadwalKonselingStyle, konselingIconStyle ,konselingStyle};