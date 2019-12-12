import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 6,
        key: 'AIzaSyAmIVcsu9puT0LFlmlv35Mv7rZ5ktcqw94'
    }
});