import React, {useState, useEffect, useCallback} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
  Image,
} from 'react-native';

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';

import AsyncStorage from '@react-native-async-storage/async-storage';

export default props => {
  const {navigation} = props;
  const [loggedIn, setloggedIn] = useState(false);
  const [user, setUser] = useState([]);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();

      setloggedIn(true);

      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth().signInWithCredential(credential);

      navigation.navigate('TestNavigate');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        Alert.alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('PLAY_SERVICES_NO_AVAILABLE');
        // play services not availabl e or outdated
      } else {
        // some other error happened
      }
    }
  };

  const storeData = async value => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@userData', jsonValue);
    } catch (e) {
      // saving error
    }
  };

  function onAuthStateChanged(user) {
    setUser(user);
    storeData(user);
    if (user) {
      setloggedIn(true);
    }
  }
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '326699004510-19r8qtdnqa301nic2cof1g6j36i75rt9.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  });

  async function removeStorage() {
    try {
      await AsyncStorage.removeItem('@userData');
    } catch (e) {
      // remove error
    }
  }

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      auth()
        .signOut()
        .then(() => Alert.alert('Your are signed out!'));
      setloggedIn(false);
      // setuserInfo([]);
      removeStorage();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <View style={styles.topContent}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <Text style={styles.mainText}>
          Welcome to the Digimon Trainers Club !
        </Text>
      </View>
      <View style={styles.bottomContent}>
        <View style={styles.sectionContainer}>
          {!loggedIn && (
            <GoogleSigninButton
              style={{width: 192, height: 48}}
              size={GoogleSigninButton.Size.Wide}
              color={GoogleSigninButton.Color.Dark}
              onPress={signIn}
            />
          )}
        </View>
        <View style={styles.buttonContainer}>
          {!user && <Text>You are currently logged out</Text>}
          {user && (
            <View>
              <Text>Welcome {user.displayName}</Text>
              <Button onPress={signOut} title="LogOut" color="#145764" />
            </View>
          )}
        </View>
        <View style={styles.buttonContainer}>
          {user && (
            <View>
              <Button
                onPress={() => navigation.navigate('TestNavigate')}
                title="Go Back To App"
                color="grey"
              />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fbc55e',
  },
  topContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 3,
  },
  logo: {
    width: 300,
    height: 300,
    borderRadius: 300,
  },
  bottomContent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  mainText: {
    fontSize: 35,
    color: '#145764',
    textAlign: 'center',
    margin: 20,
  },
  googleButton: {
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 34,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleButtonText: {
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '600',
  },
  googleIcon: {
    height: 24,
    width: 24,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  buttonContainer: {
    alignSelf: 'center',
    marginTop: 10,
  },
});
