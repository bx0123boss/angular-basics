import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from "./pages/todo/todo.component";
import { TODO_DATA } from '../assets/todo';
import { NTodo } from './models/todo.models';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
orderData() {
  this.todoData.sort((a, b) => a.priority - b.priority);
}
getTodoInfo(val: NTodo.TodoData) {
  console.log(val);
}
todoData =  TODO_DATA;
}
