import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { EstadoTarea, Tarea } from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private tareas = new BehaviorSubject<Tarea[]>([]);

  tareas$ = this.tareas.asObservable();

  agregarTarea(tarea: Tarea) {
    const tareasActuales = this.tareas.getValue();
    this.tareas.next([...tareasActuales, tarea]);
  }

  eliminarTarea(tareaId: number) {
    const tareasActuales = this.tareas.getValue().filter(t => t.id !== tareaId);
    this.tareas.next(tareasActuales);
  }

  listarTareas(filter: EstadoTarea) {
    return this.tareas.getValue().filter(t => {
      if (filter === 'pendientes') {
        return t.estado === 'pendientes';
      }
      if (filter === 'completadas') {
        return t.estado === 'completadas';
      }
      return true;
    });
  }

  actualizarEstadoTarea(tareaId: number, estado: EstadoTarea) {
    const tareasActuales = this.tareas.getValue().map(t => {
      if (t.id === tareaId) {
        return { ...t, estado };
      }
      return t;
    });
    
    this.tareas.next(tareasActuales);
  }

}
