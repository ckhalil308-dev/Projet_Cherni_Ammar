import { ChildrenOutletContexts, RouterModule, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AdminLogin } from './components/admin/admin-login/admin-login';
import { Error } from './components/error/error';
import { Admindashboard } from './components/admin/admindashboard/admindashboard';
import { Contact } from './components/contact/contact';
import { SiteList } from './components/site-list/site-list';
import { Changepasswords } from './components/admin/changepasswords/changepasswords';
import { SiteSelected } from './components/site-selected/site-selected';
import { AdminComments } from './components/admin/admin-comments/admin-comments';
import { AddSite } from './components/admin/add-site/add-site';
import { guardGuard } from './guard-guard';
import { EditSite } from './components/admin/edit-site/edit-site';
import { SiteMap } from './components/site-map/site-map';
import { ContactNav } from './contact-nav/contact-nav';
import { FAQ } from './f.a.q/f.a.q';

  

export const routes: Routes = [
      { path:'home', title:"Home", component: Home },
      { path:'contact',title:"Contact", component:ContactNav,
            children:[
               { path:'contactForm', title:"Contact", component:Contact},
               { path:'F.A.Q', title:"F.A.Q", component:FAQ},
              { path:'',redirectTo:'contactForm', pathMatch:'full' },



            ]
      },  
   
      { path:'siteList', title:"Sites", component:SiteList},      
      { path:'siteselected/:idsite', title:"Sites", component:SiteSelected}, 
      { path:'admin', title:"Login", component:AdminLogin},
      { path:'admindash', title:"Dashboard", component:Admindashboard, canActivate:[guardGuard]},
      { path:'addsite', title:"Add site", component:AddSite},
      { path:'editsite/:idsite', title:"Edit site", component:EditSite},
      { path:'comments', title:'Comments', component:AdminComments , canActivate:[guardGuard]},
      { path:'changepassword', title:"Adminchange", component:Changepasswords},
      { path:'', redirectTo:'home', pathMatch:'full' },
      { path: '**', title:'Error', component: Error }
      
]; 
