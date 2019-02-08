import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Archive from './views/Archive.vue';
import EditNote from './components/EditNote.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/archive',
      name: 'archive',
      component: Archive
    },
    {
      path: '/note/:id',
      name: 'editNote',
      component: EditNote,
      props: (route) => ({
        id: parseInt(route.params.id),
        header: 'Edit note',
        actionName: 'Save changes'
      })
    }
  ]
});
