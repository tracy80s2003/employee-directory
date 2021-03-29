import axios from "axios";

const genders = ["male", "female"];
// Export an object containing methods we'll use for accessing the random user API
export default {
  getUsersByGender: function(gender) {
    return new Promise((resolve, reject) => {
      axios
        .get("https://randomuser.me/api/")
        .then(res => {
          const users = res.data;
          const results = users.map(user => {
            return {
              login: user.login,
              image: user.avatar_url,
              gender: gender
            };
          });
          resolve(results);
        })
        .catch(err => reject(err));
    });
  },
  // Return a Promise to simulate an async call
  getGenderList: function() {
    return new Promise(resolve => {
      resolve(genders);
    });
  }
};
