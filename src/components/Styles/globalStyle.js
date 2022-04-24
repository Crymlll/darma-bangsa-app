import {StyleSheet} from 'react-native';

const globalStyle = StyleSheet.create({
  iconBox: {
    backgroundColor: 'white',
    width: '10%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  Icon: {
    fontSize: 50,
    color: 'black',
  },
  textBlack: {
    color: 'black',
  },
  textBlackBold: {
    color: 'black',
    fontWeight: 'bold',
  },
});

const globalScreenStyle = StyleSheet.create({
  background: {
    height: '100%',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
  },
  title: {
    textAlign: 'center',
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: '20%',
  },
  header: {
    textAlign: 'center',
    color: 'black',
    fontSize: 15,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBox: {
    marginTop: '10%',
    backgroundColor: '#041562',
    width: '50%',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    textAlign: 'center',
    color: '#fff',
  },
});

export {globalStyle, globalScreenStyle};
