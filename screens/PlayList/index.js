import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, ScrollView, FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {RectButton} from 'react-native-gesture-handler';

const PlayList = () => {
  const [data, setData] = useState([]);

  const loadDate = async () => {
    try {
      const result = await axios.get(
        'https://itunes.apple.com/search?term=soon',
      );
      setData(result.data);
    } catch (error) {}
  };

  loadDate();
  console.log(setData);
  const renderItem = ({item}) => {
    return (
      <RectButton
        key={item.trackId}
        style={{
          height: 200,
        }}>
        <FastImage
          source={{
            uri: `${item.previewUrl}.jpg`,
          }}
          style={{
            flex: 1,
            borderRadius: 10,
          }}
          resizeMode="cover"
        />
      </RectButton>
    );
  };

  useEffect(() => {
    loadDate();
  }, []);

  const keyExtractor = item => `${item.trackId}`;

  return (
    <ScrollView style={{flex: 1}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={() => <View style={{width: 20}} />}
        contentContainerStyle={{padding: 20}}
        pagingEnabled
        snapToAlignment="center"
        decelerationRate="fast"
        snapToInterval={330}
      />
    </ScrollView>
  );
};

export default PlayList;
