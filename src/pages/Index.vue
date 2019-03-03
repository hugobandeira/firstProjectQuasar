<template>
  <q-page class="flex flex-center">
    <form class="container" @submit.prevent="logar()">
        <div class="row">
          <div class="col-12 col-md6">
            <div class="form-group">
              <label for="">Email</label>
              <div class="form-inputs">
                <input type="email" class="form-control" v-model="email">
              </div>
            </div>
          </div>
          <div class="col-12 col-md6">
            <div class="form-group">
              <label for="">Senha</label>
              <div class="form-inputs">
                <input type="password" class="form-control" v-model="senha">
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <a href="" class="text-secondary">Esqueceu a senha?</a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <div class="form-group">
              <button type="submit" class="btn btn-primary btn-lg btn-block text-uppercase">
                Entrar
              </button>
            </div>
          </div>
        </div>
      </form>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',
};
</script>
