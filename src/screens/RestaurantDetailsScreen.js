import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import yelp from '../api/yelp';
import { FlatList } from 'react-native-gesture-handler';


const RestaurantDetailsScreen = ({ navigation }) => {
  //use navigation props to locate the id that was set on ResultsList page
  const id = navigation.getParam('id');
  //set state
  const [ result, setResult ] = useState(null);

  //api helper function
  const getResult = async (id) => {
    try { 
      const response = await yelp.get(`/${id}`)
      setResult(response.data);
    } catch (err) {
      console.log("error!")
    }
  }

  //useeffect runs only once (when second argument is empty array) when componentDidMount
  useEffect(() => {
    getResult(id);
  }, []);

  //check for if result is still null
  if(!result){
    return null;
  }
  
  return (
    <View>
          <Text>{result.name}</Text>
          <FlatList 
            data={result.photos}
            keyExtractor={(result) => result}
            renderItem={({ item }) => {
              return (
                <Image source={{uri: item}} style={styles.image}/>
              )
            }}
            />
    </View>
    )
}






const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      height: 200,
      width: 300
    }
  });


  export default RestaurantDetailsScreen;