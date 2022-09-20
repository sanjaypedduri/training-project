import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './admin/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { SidebarComponent } from './admin/sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PostsComponent } from './admin/dashboard/posts/posts.component';
import { CommentsComponent } from './admin/dashboard/comments/comments.component';
import { PagesComponent } from './admin/dashboard/pages/pages.component';
import { SettingsComponent } from './admin/dashboard/settings/settings.component';
import { PostlistComponent } from './admin/dashboard/posts/postlist/postlist.component'
import { PostsService } from './admin/dashboard/posts/postlist/posts.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';
import { LoginComponent } from './login/login.component';
import { SignComponent } from './sign/sign.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    DashboardComponent,
    PostsComponent,
    CommentsComponent,
    PagesComponent,
    SettingsComponent,
    PostlistComponent,
    SignupComponent,
    DummyComponent,
    LoginComponent,
    SignComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule ,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule

  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
