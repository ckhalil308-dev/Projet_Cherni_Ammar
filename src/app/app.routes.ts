import { ChildrenOutletContexts, Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AdminLogin } from './components/admin/admin-login/admin-login';
import { Error } from './components/error/error';


export const routes: Routes = [
       { path:'home',component: Home 
        
      },
     
      { path:'admin', title:"Admin", component:AdminLogin},
       { path:'',component: Home 
        
      },
        { path:'*',component:Error 
        
      },
     
];
