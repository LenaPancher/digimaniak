import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  FlatList,
} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';

import ItemDigimon from '../items/item';
import {getDigimonByName, getDigimonsByPage} from '../../helpers/apiHelper';

let page = 0;

const DigidexScreen = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);
  const loadData = async () => {
    const res = await getDigimonsByPage(page++, 20);
    setData([...data, ...res.content]);
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchData = async () => {
    const res = await getDigimonByName(search);
    //console.log(res.content);
    return res.content;
  };

  const searchItem = useMemo(async () => {
    let test = await searchData();
    console.log('TEEESSSSST ==== ', test);
    //setSearchList([...test]);
    return test;
  }, [searchList, search]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <TextInput
        style={styles.search}
        value={search}
        onChangeText={setSearch}
        placeholder={'Rechercher un digimon...'}
      />
      <FlatList
        onEndReached={() => loadData()}
        style={styles.listItem}
        data={data}
        extraData={searchItem}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          //console.log(item);
          return <ItemDigimon item={item} />;
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  search: {
    borderColor: '#145764',
    borderWidth: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  listItem: {
    flex: 1,
  },
});

export default DigidexScreen;
