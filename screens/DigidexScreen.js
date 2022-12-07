import {View, Text} from 'react-native';
import React from 'react';
import {
  getDigimonsByPage,
  getAllDigimon,
  getDigimonNextpage,
} from '../src/helpers/apiHelper';

getDigimonsByPage(1, 20);
getDigimonNextpage(1, 20);

const DigidexScreen = () => {
  return (
    <View>
      <Text>DigidexScreen</Text>
    </View>
  );
};

export default DigidexScreen;
