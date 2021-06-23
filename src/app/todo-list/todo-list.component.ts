import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoItem } from './todo-item';
import { NgModule } from '@angular/core';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { discardPeriodicTasks } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})


export class TodoListComponent {
  @Input() addTask: string = "";
  @Input() filter: string = "";

  allComplete: boolean = false;

  todoitem: TodoItem[] = [
    { task: "First Task", isComplete: true },
    { task: "Second Task", isComplete: true },
    { task: "Third Task", isComplete: false },
  ]

  CompleteTask(x: number) {
    this.todoitem[x].isComplete = true;
    if (this.todoitem.every(item => item.isComplete == true)) {
      this.allComplete = true;
    }
  }
  onDelete(index: number) {
    this.todoitem.splice(index, 1);
  }
  
  onEdit(index: number) {

  }

  AddTodo() {
    if ( this.addTask!="")
    {
    this.todoitem.push(
      {
        task: this.addTask,
        isComplete: false
      });
    this.addTask = "";
    this.allComplete = false;
    }
  }
}



