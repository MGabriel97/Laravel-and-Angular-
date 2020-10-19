import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { StudentComponent } from './student/student.component';
import { NewsComponent } from './news/news.component';
import { CoordonatorComponent } from './coordonator/coordonator.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LanguageComponent} from './language/language.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { LogoutComponent } from './logout/logout.component';
import { AddcommentComponent } from './addcomment/addcomment.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
    {path:'contact',component:ContactComponent},
    {path:'home',component:HomeComponent},
    {path:'add',component:AboutComponent},
    {path:'coordonator',component:CoordonatorComponent},
    {path:'news',component:NewsComponent},
    {path:'student',component:StudentComponent},
    {path:'footer',component:FooterComponent},
    {path:'language',component:LanguageComponent},
    {path:'navbar',component:NavbarComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'profile',component:ProfilepageComponent},
    {path:'logout',component:LogoutComponent},
    {path:'about',component:AddcommentComponent},
    {path:'map',component:MapComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[ContactComponent,HomeComponent]
