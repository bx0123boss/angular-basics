import { Component, EventEmitter, Input, LOCALE_ID, Output } from '@angular/core';
import { NTodo } from '../../models/todo.models';
import { CommonModule,registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
registerLocaleData(es);
@Component({
  selector: 'app-todo',
  imports: [CommonModule],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-ES'
    }
  ],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  @Input({required: true}) todoData!: NTodo.TodoData;
  @Input() isFirst!: boolean;
  @Input() isLast!: boolean;
  @Input() isEven!: boolean;
  @Input() isOdd!: boolean;
  @Output() onClickIcon= new EventEmitter<NTodo.TodoData>();

  get progress() {
    return this.todoData.progress * 100;
  }
}
