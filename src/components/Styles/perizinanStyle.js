import {StyleSheet} from 'react-native';

const perizinanIconStyle = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FDFFBC',
    borderRadius: 15,
  },
  Icon: {
    fontSize: 48,
    color: 'black',
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
});

const perizinanMenuStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  blueBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    height: '10%',
    backgroundColor: '#11468F',
    paddingRight: '5%',
    paddingLeft: '3%',
  },
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
  judul: {
    fontSize: 20,
    color: 'white',
    marginLeft: '5%',
  },
  box: {
    width: '90%',
    height: '80%',
  },
  box2: {
    width: '90%',
    height: '90%',
  },
  box3: {
    width: '90%',
    height: '90%',
  },
  textHeader: {
    fontSize: 18,
    color: 'black',
    marginTop: '5%',
    marginBottom: '5%',
  },
  textHeader2: {
    fontSize: 15,
    color: 'black',
    fontWeight: '500',
    marginTop: '5%',
    marginBottom: '5%',
  },
  textPadding: {
    paddingTop: '5%',
    color: 'black',
  },
  dispensasiBox: {
    width: '100%',
    padding: '5%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: '5%',
    flexDirection: 'row',
  },
  perizinanBox: {
    width: '100%',
    padding: '5%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: '5%',
    flexDirection: 'row',
  },
  textDispensasi: {
    borderRadius: 10,
  },
  button: {
    width: '100%',
    padding: '3%',
    backgroundColor: '#11468F',
    borderRadius: 10,
    flexDirection: 'row',
  },
  textButton: {
    fontSize: 15,
    color: 'white',
    textAlign: 'center',
  },
  Icon2: {
    fontSize: 25,
    color: 'white',
    marginRight: '5%',
  },
  bottom: {
    height: '10%',
  },
  package: {
    marginTop: '2%',
  },
  formSingle: {
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
  input: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#424242',
    marginLeft: '5%',
  },
  text: {
    color: 'black',
  },
  text2: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  formDateTime: {
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
  btnContainer: {
    alignItems: 'flex-end',
  },
  btn: {
    backgroundColor: '#041562',
    width: '40%',
    textAlign: 'center',
    alignItems: 'center',
    padding: '2%',
    borderRadius: 10,
    marginTop: '5%',
  },
  btnText: {
    fontSize: 15,
    color: '#fff',
  },
  btnDouble: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnAccept: {
    backgroundColor: '#041562',
    padding: '2%',
    paddingLeft: '5%',
    paddingRight: '5%',
    borderRadius: 10,
    alignItems: 'center',
  },
  btnDecline: {
    backgroundColor: '#white',
    padding: '2%',
    paddingLeft: '5%',
    paddingRight: '5%',
    borderWidth: 1,
    borderColor: '#969696',
    borderRadius: 10,
  },
  textAccept: {
    color: '#fff',
  },
  textDecline: {
    color: '#000',
  },
  boxDetail: {
    width: '90%',
    height: '100%',
    marginTop: '5%',
  },
});

const LihatPerizinanIconStyle = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBC8D5',
    borderRadius: 15,
  },
  Icon: {
    fontSize: 48,
    color: 'black',
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
});

const BuatPerizinanIconStyle = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EBC8D5',
    borderRadius: 15,
  },
  Icon: {
    fontSize: 48,
    color: 'black',
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
});

export {
  perizinanMenuStyle,
  perizinanIconStyle,
  LihatPerizinanIconStyle,
  BuatPerizinanIconStyle,
};
