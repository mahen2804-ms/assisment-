import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, ScrollView, FlatList, useWindowDimensions} from 'react-native';
import FastImage from 'react-native-fast-image';
import SearchBar from 'react-native-dynamic-search-bar';
import Typography from '../../components/Typography';
import {RectButton} from 'react-native-gesture-handler';
import PlayList from '../PlayList';

const Song = () => {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const {width: screenWidth} = useWindowDimensions();
  // Component Did mount
  useEffect(() => {
    loadData(page);
  }, [page]);
  const loadData = async page => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10',
      );
      setData(val => {
        return [...val, ...res.data];
      });
    } catch (error) {}
  };
  const renderItem = ({item}) => {
    return (
      <RectButton
        onPress={() =>
          navigation.navigate('DetailsPage', {headerBackTitle: 'Gallery', item})
        }
        style={{
          alignItems: 'center',
        }}>
        <View style={{maxWidth: 500, width: screenWidth}}>
          <FastImage
            source={{
              uri: `${item.url}.png`,
            }}
            style={{
              height: 240,
              flex: 1,
            }}
            resizeMode="cover"
          />
          <Typography
            variant="h3"
            style={{
              padding: 10,
            }}>
            {item.title}
          </Typography>
        </View>
      </RectButton>
    );
  };

  const keyExtractor = item => `${item.id}`;
  const onEndReached = () => {
    setPage(val => val + 1);
  };

  return (
    <ScrollView>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.6}
        />
      </View>
      <View>{/* <PlayList /> */}</View>
    </ScrollView>
  );
};

export default Song;
