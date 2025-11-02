import { ChildrenOutletContexts, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AdminLogin } from './components/admin/admin-login/admin-login';
import { Error } from './components/error/error';
import { Admindashboard } from './components/admin/admindashboard/admindashboard';
import { Contact } from './components/contact/contact';
import { SiteList } from './components/site-list/site-list';
import { Changepasswords } from './components/admin/changepasswords/changepasswords';


export const routes: Routes = [
      { path:'home', title:"Home", component: Home },
      { path:'contact', title:"Contact", component:Contact},
      { path:'siteList', title:"Sites", component:SiteList},
     
      { path:'admin', title:"Admin", component:AdminLogin},
      { path:'admindash', title:"Adminpass", component:Admindashboard},
         { path:'changepassword', title:"Adminchange", component:Changepasswords},
      { path:'',component: Home },
      
      { path: '**', component: Error }
];
