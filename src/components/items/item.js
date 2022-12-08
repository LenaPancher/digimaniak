import React, {useMemo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const ItemDigimon = ({item}) => {
  const imageUri = useMemo(() => {
    let replaced = item.name.replace(/ /g, '_');
    return 'https://digimon-api.com/images/digimon/w/' + replaced + '.png';
  }, [item]);

  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri: imageUri}} />
      <Text style={styles.text}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  item: {
    backgroundColor: '#fbc55e',
    marginVertical: 1,
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#145764',
  },
  text: {
    flex: 1,
    alignSelf: 'center',
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 17,
    color: 'black',
  },
});

export default ItemDigimon;
