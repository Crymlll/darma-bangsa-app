import {StyleSheet} from 'react-native';

const menuStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  blueBox: {
    width: '100%',
    height: '20%',
    backgroundColor: '#11468F',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: '5%',
  },
  sekolahText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
  },
  box: {
    width: '95%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 10,
  },
  iconBar: {
    width: '17%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    paddingLeft: '5%',
    paddingRight: '5%',
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileText: {
    marginLeft: '5%',
  },

  profileDetail: {
    flexDirection: 'row',
    width: '70%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePhotoFrame: {
    width: '30%',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoRounded: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  textNama: {
    fontSize: 20,
    fontWeight: '500',
    color: '#1D1F1F',
  },
  text: {
    fontSize: 15,
    color: '#1D1F1F',
  },
  dispensasiArea: {
    width: '100%',
    height: '40%',
    paddingLeft: '5%',
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  dispensasiText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1D1F1F',
  },
  dispensasiTextArea: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textDispensasi: {
    fontSize: 15,
    marginLeft: '2%',
    color: '#1D1F1F',
  },
  bottomBox: {
    width: '95%',
    justifyContent: 'space-between',
    marginTop: '30%',
  },
  infoEvent: {
    width: '100%',
    height: '20%',
  },
  textJudul: {
    fontSize: 20,
    fontWeight: '400',
    color: 'black',
  },
  listEvent: {
    width: '100%',
    height: '70%',
  },
  konselingIcon: {
    width: '30%',
    height: '100%',
    borderRadius: 75,
  },
  boxInformasi: {
    width: '100%',
    height: '33%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '5%',
  },
  beritaBox: {
    width: '100%',
    height: '100%',
    padding: '5%',
    backgroundColor: '#ACCFFF',
    borderRadius: 10,
    marginTop: '5%',
    borderColor: 'black',
    borderWidth: 1,
  },
  textBerita: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  beritaJudul: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0038FF',
  },
  beritaKonten: {
    fontSize: 15,
    color: 'black',
    marginTop: '5%',
  },
});

export default menuStyle;
