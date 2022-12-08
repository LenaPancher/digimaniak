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
          Digimaniak est une application mobile qui répertorie tous les digimons
          ! Apprenez-en plus sur chaque créature et devenez Digimon Tamer.
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
          <Text style={styles.subtitle}>Fonctionnnalités de l'application</Text>
          <Text style={styles.text}>
            Connectez-vous à travers le service Google et accédez au Digidex. Le
            Digidex est une encyclopédie recensant chaques créatures fictives de
            l'univers Digimon. Cet outil sert également à se renseigner sur les
            différentes espèces et permet de savoir son nom, ses attributs, ses
            compétences, ses possibles évolutions et voir à quoi il ressemble.
            Vous pourez également créer votre devenir Digimon Trainer, en
            renseignant votre pseudo, votre image et digimon favori.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Utilisation</Text>
          <Text style={styles.text}>
            "git pull https://github.com/LenaPancher/digimaniak.git" && "cd
            digimaniak Récupérer le projet depuis github"
          </Text>
          <Text style={styles.text}>
            npm i Installer toutes les dépendances de l'application
          </Text>
          <Text style={styles.text}>
            npx react-native run-ios Lancer l'appli iOS (requiert MacOS).
          </Text>
          <Text style={styles.text}>
            npx react-native run-android Lancer l'appli android
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Divers</Text>
          <Text style={styles.text}>
            DAPI est une API Digimon gratuite, elle utilise des données
            provenant de sources officielles et basées sur des fans.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Module(s) utilisé(s)</Text>
          <Text style={styles.text}>- Image Picker</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.subtitle}>Contributeurs</Text>
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
