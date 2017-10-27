import axios from 'axios';

export default {
  fetchFirstPosts: function() {
    return axios.get('https://jsonplaceholder.typicode.com/posts/')
      .then(function(response) {
        return response.data.slice(0, 4);
      });
  }
};
