import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, ScrollView, FlatList, useWindowDimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import SearchBar from 'react-native-dynamic-search-bar';
import Typography from '../../components/Typography';
import {RectButton} from 'react-native-gesture-handler';
import Song from '../Songs';

const Home = () => {
  return (
    <View>
      <View>
        <SearchBar
          placeholder="Search here"
          style={{marginVertical: 20}}
          onPress={() => alert('onPress')}
          onChangeText={() => {}}
        />
      </View>
      <View>
        <Song />
      </View>
    </View>
  );
};

export default Home;
