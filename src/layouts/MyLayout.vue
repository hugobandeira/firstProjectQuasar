<template>
<div class="backgroud">
  <router-view />
</div>
  <!-- <q-layout view="lHh Lpr lFf" class="backgroud">
    <q-page-container>
    </q-page-container>
  </q-layout> -->
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
  background-image: url("https://images6.alphacoders.com/330/thumb-1920-330183.jpg");
  /* background-color: rgb(234, 236, 250); */
}
</style>
