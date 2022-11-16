<template>
  <div id="app">
    <prettify-text width="200" height="200" :arc-title="'南京航建电子科技有限公司'" :font-size="20" :angle="20" :offset="130"></prettify-text>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {}
  },
  methods: {
    onClick: function (e) {
      console.log('click', e);
    },
  }
}
</script>

<style lang="scss">

</style>
