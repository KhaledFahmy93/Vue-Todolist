<template >
    <div class='' >
      <div class='view' 
	  			 v-for="list in lists" v-bind:key="list.id" v-bind:id="list.id" 
                 v-bind:task="list.task" v-bind:done="list.done">
                  <input  :checked='!list.done'    class="toggle" type="checkbox">
                  <label>{{ list.task }}</label>
                  <button class="destroy" @click='deleteitem()'>   destroy </button>
      </div>
    </div>
</template>

<script lang="js"> 
import {bus} from '../main';
 
import axios from 'axios'; 
  export default{
    name: 'tasks',
    
    data() {
      return {
		lists : [], 
      }
	},

    mounted() {
        var x =this ;
        axios.get("http://127.0.0.1:8000/api/tasks")
        .then(function (response) {
          var  data =JSON.parse(response.request.response) ;
          x.lists= data.data;
        
        })
        .catch(function(error){
          console.log(error)
        });
    },
    
	methods:{
		 deleteitem: function (){
			console.log('this');
			
		// 	let  index = this.lists.indexOf(task);
		// 	let x = this ;
		// 	 axios.post("http://127.0.0.1:8000/api/tasks/"+task.id+"/delete")
        // .then(function (response) {
		//  if(response.request.response){
		// 	 x.lists.splice(index,1);
		//  } 
        
        // })
        // .catch(function(error){
        //   console.log(error)
        // });

		 }
	},
 
  
    
    created() {
		bus.$on('new_task', data => {
				console.log(this.lists)
			let	task = { 'task' : data , 'done' : 0}
         this.lists.push(task);

		});
	},
    

  }
</script>

<style scoped >

 
</style>
