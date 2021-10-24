import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import Typography from '../../components/Typography';
import {ScrollView} from 'react-native-gesture-handler';

const Home = () => {
  const [data, setData] = useState([]);

  const loadDate = async () => {
    try {
      const res = await axios.get(
        'https://itunes.apple.com/search?term=#searchTerm',
      );
      setData(res.data);
    } catch (error) {}
  };
  // use effect for load components
  useEffect(() => {
    loadDate();
  }, []);
  console.warn(loadDate);

  return (
    <ScrollView>
      <View>
        <Text></Text>
        <View>
          <SearchBar
            placeholder="Search here"
            onPress={() => alert('onPress')}
            onChangeText={() => {
              console.log(text);
            }}
          />
        </View>

        {/* <View>
          {data.map(item => (
            <View key={item.resultCount}>
              <Typography variant="body1">{item.results}</Typography>
            </View>
          ))}
        </View> */}
      </View>
    </ScrollView>
  );
};

export default Home;
