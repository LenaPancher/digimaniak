import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  Button,
  SafeAreaView,
} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ProfileScreen = ({navigation: {navigate}}) => {
  const [pseudo, setPseudo] = useState('Rio Akiyama');
  const [email, setEmail] = useState('rio@Akiyama.com');
  const [userData, setUserData] = useState({});
  const [uriProfil, setUriProfil] = useState(
    'https://wikimon.net/images/thumb/5/56/Ryou.gif/140px-Ryou.gif',
  );
  const [uriDigi, setUriDigi] = useState(
    'https://digimon-api.com/images/digimon/w/Dukemon(Crimson_Mode).png',
  );

  const takePicture = useCallback(() => {
    launchCamera({
      mediaType: 'photo',
      cameraType: 'front',
      saveToPhotos: true,
    }).then(photo => {
      if (photo.didCancel) {
        return;
      }
      console.log(photo);
      console.log(userData.uid);
      setUriProfil(photo.assets[0].uri);
    });
  }, [userData]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@userData');
      console.log('JSON =====', jsonValue);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };

  useFocusEffect(
    useCallback(() => {
      getData().then(user => {
        setUserData(user);
        setPseudo(user.displayName);
        setEmail(user.email);
        setUriProfil(user.photoURL);
      });
    }, []),
  );

  return (
    <ScrollView style={styles.safeArea}>
      <SafeAreaView>
        <Button
          title="GO BACK TO LOGIN SCREEN"
          onPress={() => navigate('Login')}
          color="#145764"
        />
        <View style={styles.cardProfile}>
          <Image
            style={styles.image}
            source={{
              uri: uriProfil,
            }}
          />
          <Button title="TAKE A PICTURE" onPress={takePicture} />
          <View style={styles.infoProfile}>
            <Text style={styles.pseudo}>{pseudo}</Text>
            <Text style={styles.email}>{email}</Text>
          </View>
          <View style={styles.digiPartner}>
            <Text style={styles.titlePartner}>Partner</Text>
            <View style={styles.viewGlobalPartner}>
              <View style={styles.viewInfoDigi}>
                <Text style={styles.nameDigi}>Name</Text>
                <Text style={styles.typeDigi}>Type</Text>
              </View>
              <View style={styles.viewDigiPicture}>
                <Image
                  style={styles.digiPicture}
                  source={{
                    uri: uriDigi,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fbc55e',
  },
  cardProfile: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    marginTop: 20,
    backgroundColor: 'white',
    flex: 1,
    width: 190,
    height: 190,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  buttonPicture: {
    backgroundColor: '#145764',
    padding: 10,
    borderRadius: 20,
    width: 150,
    alignItems: 'center',
    alignSelf: 'center',
    margin: 20,
  },
  textButtonPicture: {
    color: 'white',
  },
  infoProfile: {
    alignItems: 'center',
  },
  pseudo: {
    fontWeight: 'bold',
    fontSize: 35,
    color: 'black',
  },
  email: {
    marginVertical: 20,
    fontSize: 15,
    color: 'black',
  },
  digiPartner: {
    backgroundColor: 'white',
    width: 360,
    height: 320,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
  },
  titlePartner: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  viewGlobalPartner: {
    marginHorizontal: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  viewInfoDigi: {
    flex: 1,
  },
  nameDigi: {
    fontSize: 15,
    marginVertical: 10,
  },
  typeDigi: {
    fontSize: 15,
    marginVertical: 10,
  },
  viewDigipicture: {
    flex: 1,
  },
  digiPicture: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  buttonDelete: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    width: 150,
    borderColor: '#145764',
    alignItems: 'center',
    alignSelf: 'center',
    margin: 20,
  },
  textButtonDelete: {
    color: 'black',
  },
});

export default ProfileScreen;
