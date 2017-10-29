import axios from 'axios';

const POST_API_URL = 'https://jsonplaceholder.typicode.com/posts/';

/**
 * Utility object to make calls to the API.
 */
export default {
  /**
   * Fetches the first four posts from the API.
   */
  fetchFirstPosts: function() {
    return axios.get(POST_API_URL)
      .then(function(response) {
        return response.data.slice(0, 4);
      });
  },
  /**
   * Creates a new post on the API.
   */
  createNewPost: function(post) {
    return axios.post(POST_API_URL, post)
      .then(function(response) {
        return response.data;
      });
  }
};
