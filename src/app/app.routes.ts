import { ChildrenOutletContexts, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AdminLogin } from './components/admin/admin-login/admin-login';
import { Error } from './components/error/error';
import { Admindashboard } from './components/admin/admindashboard/admindashboard';


export const routes: Routes = [
       { path:'home',component: Home 
        
      },
     
      { path:'admin', title:"Admin", component:AdminLogin},
       { path:'admindash', title:"Admin", component:Admindashboard},
       { path:'',component: Home 
        
      },
      
      { path: '**', component: Error }
];
