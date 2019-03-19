<template>
  <section class="">
    <div>
      <form class="container" @submit.prevent="logar()">
          <q-card color="white" style="width: 300px">
            <q-card-title>
               Login
            </q-card-title>
            <q-card-main>
              <div class="row">
                <div class="col-12 col-md6">
                  <q-input
                    v-model="email"
                    float-label="Email"
                  />
                </div>
                <div class="col-12 col-md6">
                  <q-input
                    type="password"
                    v-model="senha"
                    float-label="Senha"
                  />
                </div>
              </div>
              <div class="row" style="margin: 20px auto">
                <div class="col">
                  <div class="form-group">
                    <a href="" class="text-secondary">Esqueceu a senha?</a>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <div class="form-group text-center">
                    <q-btn style="margin-top: 10px;"
                    type="submit" color="secondary" label="Entrar" />
                  </div>
                </div>
              </div>
            </q-card-main>
          </q-card>
      </form>
    </div>
  </section>
</template>

<style scoped>
  section > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>

<script>
import auth from '../services/auth/index';
import http from '../services/http/index';
// import { Dialog } from 'quasar';

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      senha: '',
    };
  },
  methods: {
    logar() {
      auth.login(this.email, this.senha)
        .then((response) => {
          if (response) {
            this.$router.push('/user/perfil');
          }
        })
        .catch((error) => {
          console.error(error);
        });
      // Dialog.create();
      // this.$routes.push('/user');
    },
  },
  mounted() {
    const token = localStorage.getItem('token');
    if (token) {
      http.get('api/user/')
        .then((res) => {
          this.email = res.data.email;
          this.$router.push('/user/perfil');
          console.log(res.data);
        });
    }
  },
  computed: {
    set: () => {
      console.log('ssdsf');
    },
  },
};
</script>
