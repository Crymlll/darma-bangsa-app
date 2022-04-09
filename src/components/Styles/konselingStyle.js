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

export { konselingIconStyle ,konselingStyle};