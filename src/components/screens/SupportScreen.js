import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SupportScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Digimaniak</Text>
        <Image style={styles.image} source={require('../../assets/logo.png')} />
        <Text style={styles.text}>
          Digimaniak is a mobile application that lists all the digimons ! Learn
          more about each creature and become a Digimon Tamer.
        </Text>
        <View style={styles.icons}>
          <Ionicons name="logo-apple" color="black" size={25} />
          <Text style={styles.iconsText}>IOS</Text>
          <Ionicons name="logo-android" color="black" size={25} />
          <Text style={styles.iconsText}>ANDROID</Text>
          <Ionicons name="desktop" color="black" size={25} />
          <Text style={styles.iconsText}>Web</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Features of the application</Text>
          <Text style={styles.text}>
            Log in through the Google service and access the Digidex.
            {'\n'}The Digidex is an encyclopedia listing each fictional creature
            from the Digimon universe. {'\n'}This tool is also used to learn
            about information on the different species and allows to know its
            name, its attributes, its skills, its possible evolutions and see
            what it what it looks like. {'\n'}You can also create your become a
            Digimon Trainer, by filling in your nickname, your image and
            favorite digimon.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Usage</Text>
          <Text style={styles.text}>
            - Get the project from github : "git pull
            https://github.com/LenaPancher/digimaniak.git" && "cd digimaniak"
          </Text>
          <Text style={styles.text}>
            - Install all application dependencies : "npm i"
          </Text>
          <Text style={styles.text}>
            - Launch the iOS application (requires MacOS) : "npx react-native
            run-ios"
          </Text>
          <Text style={styles.text}>
            - Launch the android application : "npx react-native run-android"
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Various</Text>
          <Text style={styles.text}>
            DAPI is a free Digimon API, it uses data from official and fan based
            sources.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Module(s) used</Text>
          <Text style={styles.text}>- Image Picker</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Contributors</Text>
          <Text style={styles.text}>
            Paul Geneve, Lucas Gauvain, Robin Littiere, Léna Pancher
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    margin: 20,
  },
  text: {
    textAlign: 'justify',
  },
  image: {
    width: 360,
    height: 200,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  section: {
    marginVertical: 10,
  },
  icons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  iconsText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
});

export default SupportScreen;
