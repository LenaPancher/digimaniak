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
  const [hasData, setHasData] = useState([]);
  const loadData = async () => {
    const res = await getDigimonsByPage(page++, 20);
    setData([...data, ...res.content]);
  };

  const loadDataFromStart = async () => {
    const res = await getDigimonsByPage(0, 20);
    setData([]);
    setData([...data, ...res.content]);
  };
  const decideLoading = () => {
    if (search.length == 0) {
      // page = 0;
      loadData();
    }
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

  const searchItem = useMemo(() => {
    console.log('Used from start');
    if (search.length == 0) {
      setData([]);
      loadDataFromStart();
      setData[data.splice(0, 20)];
    }
    if (search.length > 0) {
      searchData().then(res => {
        setData([]);
        setData(res);
      });
    }
    //setSearchList([...test]);
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
        onEndReached={() => decideLoading()}
        style={styles.listItem}
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
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
