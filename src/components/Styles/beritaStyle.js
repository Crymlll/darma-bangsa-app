import {StyleSheet} from 'react-native';

const beritaStyle = StyleSheet.create({
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
  },
  beritaBox: {
    width: '100%',
    height: '20%',
    padding: '5%',
    paddingBottom: '10%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: '5%',
    flexDirection: 'row',
  },
  logo: {
    width: '20%',
  },
  gambar: {
    width: '100%',
    height: '100%',
  },
  beritaJudul: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  beritaKonten: {
    fontSize: 15,
    color: 'black',
  },
  textBerita: {
    width: '80%',
    height: '100%',
  },
  textLink: {
    fontSize: 15,
    color: '#11468F',
    textDecorationLine: 'underline',
  },
});

const beritaIconStyle = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#94DAFF',
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

const beritaDetailStyle = StyleSheet.create({
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
    marginTop: '5%',
    width: '90%',
  },
  gambar: {
    width: '100%',
    height: '30%',
  },
  judulBerita: {
    marginTop: '10%',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  kontenBerita: {
    marginTop: '5%',
    fontSize: 15,
    color: 'black',
  },
});

export {beritaDetailStyle, beritaStyle, beritaIconStyle};
