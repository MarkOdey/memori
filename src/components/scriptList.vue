<template>
  <ol>
      <li v-for="script in scripts" :key="script">{{script}}</li>
  </ol>
</template>

<script>
import Memori from '../services/Memori';
export default {
    data:() => {
        return {

            scripts:Memori.scripts
        
        };
    },
    
    created(){




    },

}
</script>

<style>

</style>