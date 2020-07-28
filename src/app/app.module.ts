import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChildrenaccComponent } from './childrenacc/childrenacc.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ChildrenaccComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule,

    //For router navigation
    RouterModule.forRoot([{
      path: '',
        component: LoginComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
        //For router with single page
        children:[
          {
            path: 'admin',
            component: AdminComponent
          },
          {
            path: 'childrenacc',
            component: ChildrenaccComponent
          },
        ]
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
