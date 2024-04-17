import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {CardCT, RowCT, SpaceCT, TextCT} from '.';
import {globalStyles} from '../styles/globalStyles';
import {appColors} from '../constants/themeColor';
import {ArrowRight2, Location} from 'iconsax-react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {LocationModal} from '../modal';
const ChoiceLocation = () => {
  const [isVibleModalLocation, setIsVibleModalLocation] = useState(false);
  return (
    <>
      <RowCT
        styles={[globalStyles.inputContainer]}
        onPress={() => setIsVibleModalLocation(!isVibleModalLocation)}>
        <Location color={`${appColors.primary}80`} size={22} variant="Bold" />

        <SpaceCT width={12} />
        <TextCT text="Newyork, USA" flex={1} />
        <ArrowRight2 color={appColors.primary} size={22} />
      </RowCT>
      <LocationModal
        visible={isVibleModalLocation}
        onClose={() => setIsVibleModalLocation(false)}
        onSelect={val => console.log(val)}
      />
    </>
  );
};

export default ChoiceLocation;
