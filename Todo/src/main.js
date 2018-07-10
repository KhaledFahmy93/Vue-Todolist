import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import tasks  from './components/tasks.vue' 
import done from './components/done.vue'
import notdone from './components/notdone.vue'
import HelloWorld from './components/HelloWorld.vue'



const routes = [
       {path: '/tasks'  , component: tasks , name : 'tasks'} ,
       {path: '/done'  , component: done},
       {path: '/notdone'  , component: notdone},
       {path: '/hello'  , component: HelloWorld}
      ];
  


const router = new VueRouter(
  { routes }
) ; 


Vue.use(VueRouter);


new Vue({
  render: h => h(App) , 
  router
}).$mount('#app')