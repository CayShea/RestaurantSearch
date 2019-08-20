import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

//set State in parent component (here). Then pass callback function to child (<SearchBar/>)
const SearchScreen = () => {

    const [ term, searchTerm ] = useState('');
    const [ error, setError, results, searchApi ] = useResults();


    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price
        });
    };

    return(
        // <View style={{ flex: 1 }}>
        <>
            <SearchBar
                onEnter={(text) => searchTerm(text)}
                term={ term }
                onTermSubmit={() => searchApi(term)}
            />
            { error ? <Text>{setError}</Text> : null }
            <ScrollView>
                <ResultsList 
                    title="Cost Effective"
                    results={filterResultsByPrice('$')}
                />
                <ResultsList 
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}
                />
                <ResultsList 
                    title="Big Spender"
                    results={filterResultsByPrice('$$$')}
                />
            </ScrollView>
        </>
        // </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default SearchScreen;