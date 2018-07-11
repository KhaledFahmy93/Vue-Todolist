import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import tasks  from './components/tasks.vue' 
import done from './components/done.vue'
import notdone from './components/notdone.vue'




const routes = [
       {path: '/tasks'  , component: tasks , name : 'tasks'} ,
       {path: '/done'  , component: done},
       {path: '/notdone'  , component: notdone},

      ];
  



const router = new VueRouter(
  { routes }
) ; 


Vue.use(VueRouter);


  export default({
  data: function(){
    return {
      name : "khaled"
    }
  },
  methods  : {
    deleteTask: function(){
      alert("sssssssssssssss")
    }
  }

});



export const bus = new Vue();

new Vue({
  render: h => h(App) , 
  router
}).$mount('#app')