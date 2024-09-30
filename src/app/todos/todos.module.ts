import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodoComponent } from './components/todo/todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTodoComponent } from "./components/create-todo/create-todo.component";


@NgModule({
  declarations: [
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    ReactiveFormsModule,
    CreateTodoComponent,
]
})
export class TodosModule { }
