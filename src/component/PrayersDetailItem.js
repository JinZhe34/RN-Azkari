import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import R from './R';

const { PALETTE, IMAGES, COLORS } = R;

const PrayersDetailItem = ({pContent, pCount, onPressCount, fontSize, onShare}) => {
  return (
    <View style={styles.mainWrapper}>
      <TouchableOpacity
        style={[
          styles.itemWrapper,
        ]}
        onPress={onPressCount}
      >
        <Text style={[styles.textContent, {fontSize: fontSize}]}>{pContent + '\n'}</Text>
        
      </TouchableOpacity>
      <View style={[
        PALETTE.row, 
        PALETTE.primaryBetween, 
        PALETTE.secondaryCenter, 
        styles.countWrapper
      ]}>
        <Text style={styles.textCount}>{pCount}</Text>
        <TouchableOpacity onPress={onShare}>
          <Text>
            <Icon name="sharealt" size={20} color={COLORS.white} />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  mainWrapper: {
    marginHorizontal: 20,
    marginVertical: 10,
    backgroundColor: COLORS.grey,
  },
  countWrapper:{
    width:'100%', 
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: COLORS.blue,
  },
  itemWrapper: {
    width: '100%',
    padding: 8,
    backgroundColor: COLORS.grey,
  },
  textContent: {
    color: COLORS.blue,
  },
  textCount: {
    fontSize: 14,
    color: COLORS.white,
  }
});

export default PrayersDetailItem;