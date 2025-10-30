import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { SiteList } from './components/site-list/site-list';
import { Contact } from './components/contact/contact';
import { Error } from './components/error/error';

export const routes: Routes = [
    {path:'home', title:'Accueil', component:Home},
    {path:'list', title:'Liste', component:SiteList},
    {path:'contact', title:'Contact', component:Contact},
    {path:'', redirectTo:'home', pathMatch:'full'},
    {path:'**', title:'Error', component:Error},
];
