import http from '../http';

export default {
  login(emails, senha) {
    return http.post('api/login',
      {
        email: emails,
        password: senha,
      })
      .then((response) => {
        localStorage.setItem('Token', response.data.access_token);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
