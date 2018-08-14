import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = () => async (dispatch,getState,api) => {
  //const res = await axios.get('http://react-ssr-api.herokuapp.com/users');
  const res = await api.get('/users');
  console.log(res)
  dispatch({
    type: FETCH_USERS,
    payload: res
  })

};