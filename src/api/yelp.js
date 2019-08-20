import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer eh-_lADrTVEci5xmF9d85rLzlqxhuqSdSSzOfklHVd-Z5sL0nZyVv75Iyot6rhyBE96IfbdynQf3ONZFvxV6G4VlI7u9q5MXDwWrLNfKXcThu5_1Iozyik01RRtTXXYx'
    }
});