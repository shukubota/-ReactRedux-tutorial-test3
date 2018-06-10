import request from 'superagent';

const requestFetchUser = user => ({
  type: 'REQUEST_FETCH_USER',
  payload: { user },
});

const signIn = user => ({
  type: 'SIGN_IN',
  payload: { user },
});

// api通信 非同期通信のやり方 https://tisnote.com/react-redux-axios/ 非同期処理はreducerには書けない

export const asyncSignIn = user => (dispatch) => {
  const url = 'http://localhost:8080/api/users/signin';
  dispatch(requestFetchUser(user));
  return request
    .post(url)
    .set('Content-Type', 'application/json')
    .send({ user })
    .then((res) => {
      console.log(res);
      dispatch(signIn(res.body));
      localStorage.setItem('isAuthenticated', true);
      window.location = ('/')
    })
    .catch((err) => {
      console.log(err);
    });
};
