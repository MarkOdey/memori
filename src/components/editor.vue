<template>
<dir>
  <Textarea @input="textUpdated" v-model="value" :autoResize="true" rows="5" cols="30" />
  <button class="btn" @click="runScript()">remember</button>
</dir>

</template>

<script>
import Textarea from 'primevue/textarea';
import Memori from '../services/Memori';

export default {
    data(){
        return {
            value : "test"
        }
    },

    created(){




    },

    methods:{
        textUpdated: ()=>{

        },
        runScript: function(){
            console.log('run script', this.value)
            Memori.write(this.value)
        }
    },

    components:{
        Textarea
    }


}
</script>

<style>
    textarea {
   
     
    }
</style>