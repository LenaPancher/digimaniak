import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';

const ProfileScreen = () => {
  const [pseudo, setPseudo] = useState('Rio Akiyama');
  const [email, setEmail] = useState('rio@Akiyama.com');
  const [uriProfil, setUriProfil] = useState(
    'https://wikimon.net/images/thumb/5/56/Ryou.gif/140px-Ryou.gif',
  );
  const [uriDigi, setUriDigi] = useState(
    'https://digimon-api.com/images/digimon/w/Dukemon(Crimson_Mode).png',
  );

  return (
    <ScrollView>
      <View style={styles.cardProfile}>
        <Image
          style={styles.image}
          source={{
            uri: uriProfil,
          }}
        />
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
          <TouchableHighlight style={styles.buttonDelete}>
            <Text>Supprimer</Text>
          </TouchableHighlight>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  titlePartner: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  digiPicture: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  pseudo: {
    fontWeight: 'bold',
    fontSize: 35,
  },
  email: {
    marginVertical: 20,
    fontSize: 15,
  },
  cardProfile: {
    flex: 1,
    alignItems: 'center',
  },
  infoProfile: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    margin: 20,
    backgroundColor: 'white',
    flex: 1,
    width: 200,
    height: 200,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  viewGlobalPartner: {
    marginHorizontal: 70,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  digiPartner: {
    backgroundColor: 'white',
    width: 360,
    height: 320,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  viewInfoDigi: {
    flex: 1,
  },
  viewDigipicture: {
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
  buttonDelete: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
});

export default ProfileScreen;
