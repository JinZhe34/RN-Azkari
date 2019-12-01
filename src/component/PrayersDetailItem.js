import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import R from './R';

const { PALETTE, IMAGES, COLORS } = R;

const PrayersDetailItem = ({pContent, pCount, onPressCount, fontSize}) => {
  console.log(fontSize);
  return (
    <View style={styles.mainWrapper}>
      <View
        style={[
          styles.itemWrapper,
        ]}
      >
        <Text style={[styles.textContent, {fontSize: fontSize}]}>{pContent + '\n'}</Text>
        
      </View>
      <View style={[
        PALETTE.row, 
        PALETTE.primaryBetween, 
        PALETTE.secondaryCenter, 
        styles.countWrapper
      ]}>
        <Text style={styles.textCount}>{pCount}</Text>
        <TouchableOpacity onPress={onPressCount}>
        <Text>
          <Icon name="arrow-right" size={20} color={COLORS.white} />
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