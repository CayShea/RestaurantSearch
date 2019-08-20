import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';



const ResultsList = ({ title, results, navigation }) => {
    if (!result.length){
        return null;
    }
    
    return(
        <View>
            <Text style={styles.headerText}>{ title }</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetails', { id: item.id })}>
                            <ResultsDetail item= {item}/>
                        </TouchableOpacity>
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
    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 15
    }
  });


  export default withNavigation(ResultsList);