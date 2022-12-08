import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

const SupportScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <Text style={styles.title}>Deigimanigak</Text>
        <Text>
          Digimaniak est une application mobile qui répertorie tous les digimons
          ! Apprenez-en plus sur chaque créature et devenez Digimon Tamer.
        </Text>
        <View style={styles.icons}>
          <Image source={require('../../assets/apple.png')} />
          <Text style={styles.iconsText}>IOS</Text>
          <Image source={require('../../assets/android.png')} />
          <Text style={styles.iconsText}>ANDROID</Text>
          <Image source={require('../../assets/web.png')} />
          <Text style={styles.iconsText}>Web</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Fonctionnnalités de l'application</Text>
          <Text>
            Connectez-vous à travers le service Google et accédez au Digidex. Le
            Le Digidex est une encyclopédie recensant chaques créatures fictives
            de l'univers Digimon. Cet outil sert également à se renseigner sur
            les différentes espèces et permet de savoir son nom, ses attributs,
            ses compétences, ses possibles évolutions et voir à quoi il
            ressemble. Vous pourez également créer votre devenir Digimon
            Trainer, en renseignant votre pseudo, votre image et digimon favori.
          </Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Utilisation</Text>
          <Text>
            "git pull https://github.com/LenaPancher/digimaniak.git" && "cd
            digimaniak Récupérer le projet depuis github"
          </Text>
          <Text>npm i Installer toutes les dépendances de l'application</Text>
          <Text>
            npx react-native run-ios Lancer l'appli iOS (requiert MacOS).
          </Text>
          <Text>npx react-native run-android Lancer l'appli android</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Divers</Text>
          <Text>
            DAPI est une API Digimon gratuite, elle utilise des données
            provenant de sources officielles et basées sur des fans.
          </Text>
          <Text>Module(s) utilisé(s)</Text>
          <Text>Image Picker</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.title}>Contributeurs</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    margin: 20,
  },
  title: {
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
