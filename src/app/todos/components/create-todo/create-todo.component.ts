import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { nombreUnicoValidator } from 'src/app/shared/services/custom-validators';
import { ToastNotificationsComponent } from 'src/app/shared/components/toast-notifications/toast-notifications.component';
import { ToastNotificationsService } from 'src/app/shared/services/toast-notifications.service';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ToastNotificationsComponent],
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements AfterViewInit {

  @Output() eventTaskSuccess: EventEmitter<boolean> = new EventEmitter<boolean>();

  protected tareaForm: FormGroup;

  constructor(
    private todoService: TodoService,
    private toastNotificationsService: ToastNotificationsService,
    private fBuilder: FormBuilder
  ) {
    this.tareaForm = this.fBuilder.group({
      nombreTarea: ['', Validators.required],
      fechaMaxima: ['', Validators.required],
      personas: this.fBuilder.array([])
    });
    this.agregarPersona();
  }

  ngAfterViewInit() {
    this.toastNotificationsService.dataToast.emit({
      form: this.tareaForm
    });
  }


  // Método para verificar si un campo es inválido y ha sido tocado
  isInvalidField(control: AbstractControl | null): boolean {
    return control ? control.invalid && (control.touched || control.dirty) : false;
  }

  // Metodo para obtener el formulario de personas
  get personas(): FormArray {
    return this.tareaForm.get('personas') as FormArray;
  }

  // Metodo para crear un nuevo formulario de persona
  nuevaPersona(): FormGroup {
    return this.fBuilder.group({
      nombre: ['', [Validators.required, nombreUnicoValidator(this.personas.controls)]],
      edad: ['', [Validators.required, Validators.min(18)]],
      habilidades: this.fBuilder.array([])
    });
  }

  // Metodo para agregar una persona al formulario
  agregarPersona(index?: number) {
    if(index != undefined) {
      this.toastNotificationsService.dataToast.emit({
        validationForm: true,
      });
      if(this.tareaForm.valid) {
        this.personas.push(this.nuevaPersona());
        this.agregarHabilidad(this.personas.length - 1);
      } 
    }else{
      this.personas.push(this.nuevaPersona());
      this.agregarHabilidad(this.personas.length - 1);
    }
  }

  // Metodo para eliminar una persona del formulario
  eliminarPersona(index: number) {
    if(this.personas.length > 1){
      this.personas.removeAt(index);
    }else{
      this.toastNotificationsService.dataToast.emit({
        customMessage: 'Debe haber al menos una persona asociada a la tarea',
      });
    }
  }

  // Metodo para obtener las habilidades
  getHabilidades(index: number): FormArray {
    return this.personas.at(index).get('habilidades') as FormArray;
  }

  // Metodo para crear un nuevo formulario de habilidad
  nuevaHabilidad(): FormGroup {
    return this.fBuilder.group({
      nombreHabilidad: ['', Validators.required]
    });
  }

  // Metodo para agregar una habilidad al formulario
  agregarHabilidad(personaIndex: number, habilidadIndex?: number) {
    if(habilidadIndex != undefined) {
      if(this.getHabilidades(personaIndex).at(habilidadIndex).invalid) {
        if(this.getHabilidades(personaIndex).at(habilidadIndex).get('nombreHabilidad')?.hasError('required')) {
          this.toastNotificationsService.dataToast.emit({
            customMessage: 'Ingrese el nombre de la habilidad',
          });
        }
      }
      if(this.getHabilidades(personaIndex).at(habilidadIndex).valid) this.getHabilidades(personaIndex).push(this.nuevaHabilidad());
    }else{
      this.getHabilidades(personaIndex).push(this.nuevaHabilidad());
    }
  }

  // Metodo para eliminar una habilidad del formulario
  eliminarHabilidad(personaIndex: number, habilidadIndex: number) {
    if(this.getHabilidades(personaIndex).length > 1) {
      this.getHabilidades(personaIndex).removeAt(habilidadIndex);
    }else{
      this.toastNotificationsService.dataToast.emit({
        customMessage: 'Debe haber al menos una habilidad asociada a la persona',
      });
    }
  }

  // Metodo para agregar una tarea
  protected agregarTarea() {
    this.toastNotificationsService.dataToast.emit({
      validationForm: true,
    });
    if(this.tareaForm.valid) {
      this.todoService.agregarTarea({id: Date.now(), estado: 'pendientes', ...this.tareaForm.value});
      this.eventTaskSuccess.emit(true);
    }
  }

}
