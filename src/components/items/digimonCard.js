import {View, Text, TouchableOpacity} from 'react-native';
import React, {useCallback, useEffect, useState, useMemo} from 'react';
import {StyleSheet, Image, ActivityIndicator} from 'react-native';
import {getDigimonById} from '../../helpers/apiHelper';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector, useDispatch} from 'react-redux';
import {actions as favoriteActions} from '../../redux/reducers/favoriteReducer';

const DigimonCard = ({route, navigation}) => {
  const {digimonId} = route.params;
  const [digimon, setDigimon] = useState();

  const {favorite} = useSelector(state => state.favorite);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();

  const getDigimon = useCallback(async () => {
    const res = await getDigimonById(digimonId);
    setDigimon({data: res});
  }, []);

  const getDescription = useMemo(() => {
    if (digimon === undefined) {
      return 'Missing description';
    }
    for (let i = 0; i < digimon.data.descriptions.length; i++) {
      if (digimon.data.descriptions[i].language == 'en_us') {
        return digimon.data.descriptions[i].description;
      }
    }
    return 'Missing description';
  }, [digimon]);

  const getLevels = useMemo(() => {
    if (digimon === undefined) {
      return 'Missing Levels';
    } else if (digimon.data.levels.length != 0) {
      return digimon.data.levels[0].level;
    } else {
      return 'Missing Levels';
    }
  }, [digimon]);

  const getSkills = useMemo(() => {
    if (digimon === undefined) {
      return 'Missing Skills';
    } else if (digimon.data.skills.length != 0) {
      return digimon.data.skills[0].skill;
    } else {
      return 'Missing Skills';
    }
  }, [digimon]);

  const getSkillFlavor = useMemo(() => {
    if (digimon === undefined) {
      return 'Missing information';
    } else if (digimon.data.skills.length != 0) {
      return digimon.data.skills[0].description;
    } else {
      return 'Missing information';
    }
  }, [digimon]);

  const getTypes = useMemo(() => {
    if (digimon === undefined) {
      return 'Missing Types';
    } else if (digimon.data.types.length != 0) {
      return digimon.data.types[0].type;
    } else {
      return 'Missing Types';
    }
  }, [digimon]);

  const getIsFavoriteText = useMemo(() => {
    if (favorite != {} && digimon !== undefined) {
      if (favorite.id == digimon.data.id) {
        setIsFavorite(true);
        return 'Ce digimon est votre favori !';
      } else {
        setIsFavorite(false);
        return 'Faire de ce digimon votre favori';
      }
    }
    return 'Faire de ce digimon votre favori';
  }, [digimon, favorite]);

  const makeFavorite = useCallback(() => {
    dispatch(favoriteActions.addFavorite(digimon));
    setIsFavorite(true);
  });

  useEffect(() => {
    getDigimon();
  }, []);

  if (digimon === undefined) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'}></ActivityIndicator>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.cardHeader}>
            <Text style={styles.digimonName}>{digimon.data.name}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: digimon.data.images[0].href,
              }}
              style={styles.digimonImage}
            />
          </View>
          <View style={[styles.cardInfo]}>
            <View style={styles.infoHeader}>
              <View style={styles.infoContainer}>
                <Text style={styles.infoBold}>Level </Text>
                <Text style={styles.infoDescription}>{getLevels}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.cardInfo]}>
            <View style={styles.infoHeader}>
              <View style={styles.infoContainer}>
                <Text style={styles.infoBold}>Groupes </Text>
                <Text style={styles.infoDescription}>{getTypes}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.cardSkill]}>
            <View style={styles.infoHeader}>
              <View style={styles.infoContainer}>
                <Text style={styles.infoBold}>Main skill </Text>
                <Text style={styles.infoDescription}>{getSkills}</Text>
              </View>
            </View>
            <Text style={{fontStyle: 'italic', marginTop: 8}}>
              {getSkillFlavor}
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20}}>
          <TouchableOpacity
            onPress={() => {
              makeFavorite();
            }}>
            <Text>{getIsFavoriteText}</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20}}>
          <Text
            style={[
              styles.descriptionItem,
              {fontWeight: 'bold', fontSize: 20, textTransform: 'uppercase'},
            ]}>
            {digimon.data.name}
          </Text>
          <Text
            style={[
              styles.descriptionItem,
              {fontWeight: 'bold', fontSize: 16},
            ]}>
            Release date : {digimon.data.releaseDate}
          </Text>
          <Text>{getDescription}</Text>
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
