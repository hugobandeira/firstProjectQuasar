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
        return response;
      })
      .catch((error) => {
        // window.alert(error);
        console.log(error);
      });
  },
  logout() {
    localStorage.removeItem('Token');
  },
};
