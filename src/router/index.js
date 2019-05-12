import Vue from 'vue';
import Router from 'vue-router';
// pages
import Home from '@/components/Home';
import Films from '@/components/Films';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Films',
      name: 'Films',
      component: Films
    },
    {
      path: '/Services',
      name: 'Services',
      component: Services
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Contact',
      name: 'Contact',
      component: Contact
    }
  ]
});
