import axios from "axios";

// const genders = ["male", "female"];
// Export an object containing methods we'll use for accessing the random user API
export default {
  getUsers: function() {
    return axios.get('https://randomuser.me/api/?results=20&nat=us')
  }
};
