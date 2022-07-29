import axios from 'axios';

export const request = () => {
    return  axios.get("https://jsonplaceholder.typicode.com/posts")
};