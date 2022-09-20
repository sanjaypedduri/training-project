import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentsComponent } from './admin/dashboard/comments/comments.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PagesComponent } from './admin/dashboard/pages/pages.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { SettingsComponent } from './admin/dashboard/settings/settings.component';
import { HomeComponent } from './admin/home/home.component';
import { DummyComponent } from './dummy/dummy.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
// import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      {path:'',redirectTo:'login',pathMatch:'full'},
      {path:'dashboard', component:DashboardComponent},
      {path:'posts',component:PostsComponent},
      {path:'comments',component:CommentsComponent},
      {path:'pages',component:PagesComponent},
      {path:'settings',component:SettingsComponent},
      {path:'signup', component:SignComponent},
      {path:'login',component:LoginComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
