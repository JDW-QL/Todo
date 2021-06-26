import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { TodoItem } from './todo-item';

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
  show = this.todoitem.map(s => false);
  @Input() eTask = this.todoitem.map(s => "");
  @Input() numLeft = this.calcRemainingTasks();

  CompleteTask(x: number) {
    this.todoitem[x].isComplete = true;
    this.calcAllComplete();
  }

  calcAllComplete() {
    this.numLeft = this.calcRemainingTasks()
  }

  calcRemainingTasks() {
    let result = this.todoitem.filter(s => !s.isComplete).length;
    if ( result == 0) { this.allComplete = true }
    return result;
  }

  onDelete(index: number) {
    this.todoitem.splice(index, 1);
    this.calcAllComplete()
  }

  EditButtonClick(index: number) {
    if (this.show[index])
    { 
      this.onEdit(index);
    }
    else
    {
    this.show[index] = !this.show[index];
    }
  }

  onEdit(index: number) {
    if ( this.eTask[index]!="")
    this.todoitem.splice(index, 1, 
      {
      task: this.eTask[index],
      isComplete: this.todoitem[index].isComplete
      })
      this.eTask[index]="";
      this.show[index] = !this.show[index];
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
    this.calcAllComplete();
    }
  }
}