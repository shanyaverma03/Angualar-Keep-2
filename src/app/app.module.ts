import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from 'src/app/login/login.component';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { Routes } from '@angular/router/src/config';
import { CanActivateRouteGuard } from 'src/app/can-activate-route.guard';
import { RouterService } from 'src/app/services/router.service';
import { NotesService } from 'src/app/services/notes.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';

const routes: Routes= [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[CanActivateRouteGuard]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [ AppComponent, HeaderComponent, LoginComponent, DashboardComponent],
  imports: [ 
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
