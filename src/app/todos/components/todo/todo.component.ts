import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { EstadoTarea, Tarea } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  protected statusfilter: EstadoTarea = 'todas';
  protected statusForm: boolean = false;
  protected listaTareas: Tarea[] = [];

  constructor(
    private todoService: TodoService
  ) { }

  ngOnInit() {
    this.todoService.tareas$.subscribe(() => this.getTareas());
  }

  protected applyFilter(filter: EstadoTarea) {
    this.statusfilter = filter;
    this.getTareas();
  }

  protected getTareas() {
    this.listaTareas = this.todoService.listarTareas(this.statusfilter);
  }

  protected updateStatusTarea(tarea:Tarea, event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const isChecked = inputElement.checked;
    this.todoService.actualizarEstadoTarea(tarea.id, isChecked? 'completadas' : 'pendientes')
  }


}
