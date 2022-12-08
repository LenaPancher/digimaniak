import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, Image} from 'react-native';
import {getDigimonById, getDigimonByName} from '../../helpers/apiHelper';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const DigimonCard = ({route, navigation}) => {
  const {digimonId} = route.params;

  const [digimonData, setDigimonData] = useState('');
  const [digimonName, setDigimonName] = useState('');
  const [digimonImage, setDigimonImage] = useState('');
  const [digimonReleaseDate, setDigimonReleaseDate] = useState('');
  const [digimonDescription, setDigimonDescription] = useState('');
  const [digimonSkills, setDigimonSkills] = useState([{skill: ''}]);
  const [digimonLevel, setDigimonLevel] = useState([{level: ''}]);
  const [digimonTypes, setDigimonTypes] = useState([{type: ''}]);

  const getDigimon = useCallback(async () => {
    const res = await getDigimonById(digimonId);
    //console.log(res);
    setDigimonImage(res.images[0].href);
    setDigimonName(res.name);
    setDigimonReleaseDate(res.releaseDate);
    setDigimonLevel(res.levels);
    setDigimonSkills(res.skills);
    setDigimonTypes(res.types);
    for (let i = 0; i < res.descriptions.length; i++) {
      if (res.descriptions[i].language == 'en_us') {
        setDigimonDescription(res.descriptions[i].description);
      }
    }
    setDigimonData(res);
  }, []);

  useEffect(() => {
    getDigimon();
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <Text style={styles.digimonName}>{digimonName}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: digimonImage,
              }}
              style={styles.digimonImage}></Image>
          </View>
          <View style={[styles.cardInfo]}>
            <View style={styles.infoHeader}>
              <View style={styles.infoContainer}>
                <Text style={styles.infoBold}>Level </Text>
                <Text style={styles.infoDescription}>
                  {digimonLevel[0].level}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.cardInfo]}>
            <View style={styles.infoHeader}>
              <View style={styles.infoContainer}>
                <Text style={styles.infoBold}>Groupes </Text>
                <Text style={styles.infoDescription}>
                  {digimonTypes[0].type}
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.cardSkill]}>
            <View style={styles.infoHeader}>
              <View style={styles.infoContainer}>
                <Text style={styles.infoBold}>Main skill </Text>
                <Text style={styles.infoDescription}>
                  {digimonSkills[0].skill}
                </Text>
              </View>
            </View>
            <Text style={{fontStyle: 'italic', marginTop: 8}}>
              {digimonSkills[0].description}
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <Text
            style={[
              styles.descriptionItem,
              {fontWeight: 'bold', fontSize: 20, textTransform: 'uppercase'},
            ]}>
            {digimonName}
          </Text>
          <Text
            style={[
              styles.descriptionItem,
              {fontWeight: 'bold', fontSize: 16},
            ]}>
            Release date : {digimonReleaseDate}
          </Text>
          <Text>{digimonDescription}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
  },
  cardContainer: {
    width: '100%',
    height: 600,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fbc55e',
  },
  mainContainer: {
    marginTop: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardHeader: {
    width: '100%',
    height: 50,
    backgroundColor: '#E2A738',
    justifyContent: 'center',
    alignItems: 'center',
  },
  digimonName: {
    padding: 5,
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: '900',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderBottomWidth: 1,
    borderBottomColor: '#E2A738',
  },
  digimonImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderBottomWidth: 10,
    borderBottomColor: '#E2A738',
  },
  cardInfo: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E2A738',
  },
  cardSkill: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  infoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoBold: {
    fontWeight: '900',
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  infoDescription: {
    flex: 2,
  },
  descriptionItem: {
    marginBottom: 10,
  },
});

export default DigimonCard;
