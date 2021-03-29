const {reactive} = require('@vue/reactivity');

class  Memori {
    
    constructor () {


        if(localStorage.getItem('scripts')){
            this.scripts = JSON.parse(localStorage.getItem('scripts'));
        } else {
            this.scripts=reactive(["document.body.append('TESTS')"]);
        }

 
    }

    tic() {
      
        this.runScript(this.script)
    }

    next(){

    }

    runScript(script) {
        var F=new Function (script);
        return(F());
    }

    write(script){

        try{
            this.runScript(script);
            this.scripts.push(script);

            const scripts = JSON.stringify(this.scripts);

            localStorage.setItem(scripts);

            console.log(scripts);
        } catch {
            console.log('error running script.')
        }
        
     
    }


    start(){
        console.log('started');

        this.script =  this.scripts[0];

        this.tic();

    }
}





//Memori.scripts=["console.log('hello world')"];




export default new Memori();