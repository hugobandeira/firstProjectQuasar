import axiosInstance from '../../plugins/axios';

export default {
  login(email, senha) {
    return axiosInstance.post('api/login',
      {
        email,
        password: senha,
      })
      .then((response) => {
        localStorage.setItem('Token', response.data.access_token);
      }).catch((error) => {
        console.log(error);
      });
  },
};
