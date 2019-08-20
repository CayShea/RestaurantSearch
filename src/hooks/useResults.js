import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {

     //helper function to initiate api request
     //using async/await for asynchronous request and try/catch to handle errors
const [ results, searchResults ] = useState([]);
const [ error, setError ] = useState('');


const searchApi = async termPassedIn => {
    console.log('displaying some data');
    try {
        const response = await yelp.get('/search', {
            params: {
                limit: 50,
                term: termPassedIn,
                location: 'phoenix'
            }
        });
        searchResults(response.data.businesses);
    } catch (err) {
        setError('Oh my! Something went wrong. Please wait while we check for the disturbance in our Force.')
    }        
};

//Hook to load data just on first render
useEffect(() => {
    searchApi('pasta');
}, []);


    return [ error, setError, results, searchApi ];
};