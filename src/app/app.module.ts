import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodolistModule } from './todolist/todolist.module';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [AppComponent, LoginpageComponent, ProjectComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    TodolistModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
