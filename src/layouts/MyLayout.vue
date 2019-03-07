<template>
  <q-layout view="lHh Lpr lFf" class="backgroud">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
// import { openURL } from 'quasar';

export default {
  name: 'MyLayout',
  data() {
    return {
      // leftDrawerOpen: this.$q.platform.is.desktop,
    };
  },
  methods: {
    // openURL,
  },
};
</script>

<style>
.backgroud{
  background-color: rgb(234, 236, 250);
}
</style>
