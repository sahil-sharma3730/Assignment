import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import styles from './styles';
import {url} from '../../../constants/Api';
import Strings from '../../../constants/Strings';

const User = ({navigation}) => {
  const [fetchedData, setFetchedData] = useState();
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(url);
      setFetchedData(data.data);
    };
    getData();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.gridStyle}
        onPress={() => navigation.navigate('UserDetail', {id: item.id})}>
        <View style={styles.imageView}>
          <Image source={{uri: item.movie_banner}} style={styles.image} />
        </View>
        <Text style={styles.mainTilte}>{item.title}</Text>
        <Text style={styles.mainTilte2}>{item.original_title_romanised}</Text>
        <Text style={[styles.mainTilte2, {marginBottom: 5}]}>
          {item.original_title}
        </Text>
        <View style={styles.authorsView}>
          <View style={{flex: 0.5}}>
            <Text style={styles.authorsName}>{Strings.PRODUCER}</Text>
            <Text style={styles.authorsName}>{Strings.DIRECTOR}</Text>
            <Text style={styles.authorsName}>{Strings.RELEASE}</Text>
            <Text style={styles.authorsName}>{Strings.RT_SCORE}</Text>
            <Text style={styles.authorsName}>{Strings.RUNNING_TIME}</Text>
          </View>
          <View>
            <Text style={styles.authorText}>{item.producer}</Text>
            <Text style={styles.authorText}>{item.director}</Text>
            <Text style={styles.authorText}>{item.release_date}</Text>
            <Text style={styles.authorText}>{item.rt_score}</Text>
            <Text style={styles.authorText}>{item.running_time}</Text>
          </View>
        </View>

        <Text style={styles.description}>{item.description}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.conatainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            data={fetchedData}
            keyExtractor={item => item.id}
            scrollEnabled={false}
            key={item => item.id}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default User;
