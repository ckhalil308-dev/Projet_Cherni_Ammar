import { ChildrenOutletContexts, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AdminLogin } from './components/admin/admin-login/admin-login';
import { Error } from './components/error/error';
import { Admindashboard } from './components/admin/admindashboard/admindashboard';
import { Contact } from './components/contact/contact';
import { SiteList } from './components/site-list/site-list';
import { Changepasswords } from './components/admin/changepasswords/changepasswords';
import { SiteSelected } from './components/site-selected/site-selected';
import { AdminComments } from './components/admin/admin-comments/admin-comments';


export const routes: Routes = [
      { path:'home', title:"Home", component: Home },
      { path:'contact', title:"Contact", component:Contact},
      { path:'siteList', title:"Sites", component:SiteList},
      { path:'siteselected/:idsite', title:"Sites", component:SiteSelected}, 
      { path:'admin', title:"Login", component:AdminLogin},
      { path:'admindash', title:"Dashboard", component:Admindashboard,
            children: [
              { path:'comments', title:'Comments', component:AdminComments},
              { path:'',component: Admindashboard },
              { path:'', redirectTo:'home', pathMatch:'full' },
              { path: '**', title:'Error', component: Error }
            ]
      },
      { path:'changepassword', title:"Adminchange", component:Changepasswords},
      { path:'', redirectTo:'home', pathMatch:'full' },
      { path: '**', title:'Error', component: Error }
];
