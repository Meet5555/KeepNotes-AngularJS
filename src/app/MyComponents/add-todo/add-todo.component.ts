import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  title:string
  desc: string
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter()
  @ViewChild('todoForm') todoForm: NgForm;

  onSubmit(form: NgForm){
    const todo = {
      sno: 8,
      title: this.title,
      desc: this.desc,
      active: true,
      createdAt : new Date()
    }
    this.todoAdd.emit(todo);
    form.resetForm();
  }
}
