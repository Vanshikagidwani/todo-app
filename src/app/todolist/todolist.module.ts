import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodolistComponent } from './todolist.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodolistComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [TodolistComponent],
})
export class TodolistModule {}
