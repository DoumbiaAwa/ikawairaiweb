import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from '../proprietaire/login/login.component';
import { AppRoutingModule } from './tabs-routing.module';

@NgModule({
   declarations: [
     TabsComponent,
     LoginComponent 
  ],
  imports: [
    CommonModule,
    MatDialogModule ,
    AppRoutingModule,
    BrowserModule 
    
  ]
})
export class TabsModule { }
