import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Text,
  View,
  SafeAreaView,
  Image,
} from 'react-native';
import styles from './styles';
import axios from 'axios';
import {url} from '../../../constants/Api';
import Strings from '../../../constants/Strings';
import Colors from '../../../constants/Colors';

const UserDetail = props => {
  const {id} = props.route.params;
  const [fetchedData, setFetchedData] = useState();
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get(url + id);
      setFetchedData(data.data);
    };
    getData();
    setLoader(false);
  }, []);
  return (
    <SafeAreaView>
      <Text
        style={{textAlign: 'left', margin: 8, color: Colors.PRIMARY_COLOR}}
        onPress={() => props.navigation.goBack()}>
        Back
      </Text>
      <View style={styles.gridStyle}>
        <View style={styles.imageView}>
          <Image
            source={{uri: fetchedData?.movie_banner}}
            style={styles.image}
          />
        </View>
        <Text style={styles.mainTilte}>{fetchedData?.title}</Text>
        <Text style={styles.mainTilte2}>
          {fetchedData?.original_title_romanised}
        </Text>
        <Text style={[styles.mainTilte2, {marginBottom: 5}]}>
          {fetchedData?.original_title}
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
            <Text style={styles.autohrText}>{fetchedData?.producer}</Text>
            <Text style={styles.autohrText}>{fetchedData?.director}</Text>
            <Text style={styles.autohrText}>{fetchedData?.release_date}</Text>
            <Text style={styles.autohrText}>{fetchedData?.rt_score}</Text>
            <Text style={styles.autohrText}>{fetchedData?.running_time}</Text>
          </View>
        </View>

        <Text style={styles.description}>{fetchedData?.description}</Text>
        {loader == true ? <ActivityIndicator /> : null}
      </View>
    </SafeAreaView>
  );
};

export default UserDetail;
