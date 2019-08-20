import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const ResultsDetail = ({ item }) => {
    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{ uri: item.image_url }}
            />
            <Text style={styles.name}>{ item.name }</Text>
            <Text>{ item.rating } Stars out of {item.review_count} Reviews</Text>
        </View>
    )
}






const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 15
    },
    name:{
        fontSize: 16,
        fontWeight: 'bold'
    },
    image: {
        width: 250,
        height: 250,
        borderRadius: 4
    }
  });


  export default ResultsDetail;