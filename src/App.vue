<template>
<h1>hello</h1>
<script-list></script-list>
<editor></editor>
</template>

<script>

import  Memori  from './services/Memori.js';
import editor from './components/editor'
import scriptList from './components/scriptList'

export default {
  name: 'App',
  created() {
    console.log('Created',Memori);
    Memori.start();
  },
  components: {
    editor : editor,
    scriptList: scriptList
  }
}
</script>

<style>

</style>
