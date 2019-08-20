import React from 'react';
import { StyleSheet, Text, View, TextInput, Icon } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ onEnter, term , onTermSubmit }) => {
    return(
        <View>
            <View style={styles.background}>
                <Feather style={styles.iconStyle} name='search' />
                <TextInput 
                    style={styles.searchInput}
                    placeholder='Search'
                    value={ term }
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={onEnter}
                    onEndEditing={onTermSubmit}
                />
            </View>
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
    searchInput: {
        flex: 1,
        fontSize: 20
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    },
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row',
        marginBottom: 10
    }
  });

  export default SearchBar;