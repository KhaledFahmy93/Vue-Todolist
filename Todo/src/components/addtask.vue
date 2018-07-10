<template lang="html">

   <div class=''>
       <!-- <input class="new-todo"
                    autocomplete="off" 
                    placeholder="What needs to be"  v-model="newtask">
                    <button @click="submit" type='submit' id="submit"> submit</button>
       -->
    </div>
</template>

<script lang="js">
  import axios from 'axios'; 
  export default  {
      name: 'addtask',
    
    data() {
      return {
        lists : [],
        newtask : ''
      }
    },
    methods: {
        submit(){
            let x= this ;
            let obj =   {'task':this.newtask ,'done' : 0} ;
            axios.post('http://127.0.0.1:8000/api/tasks/new',obj) 
                .then(function (response) {
                    console.log(x.newtask );
                     console.log("success");
                      x.$emit("addtask" , x.newtask);
                })
                .catch(function (error) {
                    console.log('failed');
                     x.$emit("addtask" , x.newtask);
                });   
        }
        

    },

      mounted() {
        var x =this ;
        console.log(this.newtask)

   
    },
   
}
</script>

<style scoped>
 #submit {
    width:49px;
    height:33px;
    margin-left: 382px;
    background-color: beige;
}

  
</style>
