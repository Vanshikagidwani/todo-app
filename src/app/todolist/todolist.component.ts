import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent implements OnInit {
  newTodo!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.newTodo = this.initializeForm();
    // console.log(this.newTodo);
  }

  initializeForm() {
    return this.fb.group({
      todo: this.fb.array([this.getFormGroup()]),
    });
  }

  getFormGroup() {
    return this.fb.group({
      title: [''],
      description: [''],
    });
  }

  get todo() {
    return this.newTodo.get('todo') as FormArray<FormGroup>;
  }

  addTodo() {
    this.todo.push(this.getFormGroup());
  }

  removeTodo(i: number) {
    this.todo.removeAt(i);
  }

  onSubmit() {
    console.log('hi');
    console.log(this.newTodo.value);
  }

  ngOnInit(): void {}
}
