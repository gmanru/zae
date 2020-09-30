import axios from "axios";

/**
 * Getch user info
 * @param {string} id unique user identificator
 * @return {Promise}
 */
export default function fetchUser(id) {
  return axios.get('https://api.vk.com/method/users.get', {
    params: { user_id: id, v: 5.52 },
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  });
}
