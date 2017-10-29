import axios from 'axios';

const POST_API_URL = 'https://jsonplaceholder.typicode.com/posts/';

export default {
  fetchFirstPosts: function() {
    return axios.get(POST_API_URL)
      .then(function(response) {
        return response.data.slice(0, 4);
      });
  },
  createNewPost: function(post) {
    return axios.post(POST_API_URL, post)
      .then(function(response) {
        return response.data;
      })
      .catch(function(error) {
        return error;
      });
  }
};
