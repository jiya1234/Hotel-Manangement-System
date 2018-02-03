import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule , Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import {DataService} from './data.service';
import {LoginService} from './login/login.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; 
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
//import {FlashMessageModule} from 'angular-flash-message';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guard/auth.guard';
import {AuthenticationGuard} from './guard/authentication.guard';
import { ValidateService } from './services/validate.service';
import {AuthenticationService} from './services/authentication.service';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VprofileComponent } from './vprofile/vprofile.component';
import { AdminsComponent } from './admins/admins.component';
import { PollingRoomComponent } from './polling-room/polling-room.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';




const appRoutes: Routes = [
  {
  path: 'login',
  component : LoginComponent
},
{
  path: '',
  component : HomeComponent
},
{
  path: 'signup',
  canActivate : [AuthGuard],
  component : SignupComponent
},
{
  path: 'admin',
  component : AdminComponent ,
}, 
{
  path : 'profile',
  
  component: ProfileComponent , 
},
{
  path : 'dashboard',
  canActivate: [AuthenticationGuard],
  
  component : DashboardComponent , 
},
{
  path : 'admins',
  
  component : AdminsComponent , 
},
{
  path : 'vprofile',
  
  component : VprofileComponent , 
},
{
  path : 'pollingRoom',
  
  component : PollingRoomComponent , 
} ,
{
  path: 'adminpanel',
  component: AdminPanelComponent,
} 

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    FooterComponent,
    AdminComponent,
    HeaderComponent,
    ProfileComponent,
    DashboardComponent,
    VprofileComponent,
    AdminsComponent,
    PollingRoomComponent,
    AdminPanelComponent,
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [DataService , 
    LoginService ,
     ValidateService,
     AuthGuard,
     AuthenticationGuard,
     AuthenticationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
