import { StyleSheet } from 'react-native';

const menuStyle = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
    },
    blueBox:{
        width: '100%',
        height: '20%',
        backgroundColor: '#11468F',
        alignItems: 'center',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: '5%',
    },
    sekolahText:{
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
    },
    box:{
        width: '95%',
        height: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 10,
        shadowColor: '#000',
        elevation: 10,
    },
    iconBar:{
        width: '17%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    profile:{
        flexDirection: 'row',
        paddingLeft: '5%',
        paddingRight: '5%',
        width: '100%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profileDetail:{
        flexDirection: 'row',
        width: '70%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    profilePhotoFrame:{
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoRounded:{
        width: '100%',
        height: '100%',
        borderRadius: 50,
    },
    textNama:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    text:{
        fontSize: 15,
    },
    dispensasiArea:{
        width: '100%',
        height: '40%',
        paddingLeft: '5%',
        alignItems: 'baseline',
        justifyContent: 'center',
    },
    dispensasiText:{
        fontSize: 15,
        fontWeight: 'bold',
    },
    dispensasiTextArea:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },



    

})

export default menuStyle;