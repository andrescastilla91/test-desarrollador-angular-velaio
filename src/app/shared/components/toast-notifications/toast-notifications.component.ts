import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormGroup } from '@angular/forms';
import { Toast } from 'bootstrap';
import { ToastNotificationsService } from '../../services/toast-notifications.service';
import { ToastNotifications } from '../../interfaces/toast-notifications.interface';

@Component({
  selector: 'app-toast-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast-notifications.component.html',
  styleUrls: ['./toast-notifications.component.scss'],
})
export class ToastNotificationsComponent {
  
  private toast: Toast | undefined;
  private dataToast: ToastNotifications | undefined;
  private form: FormGroup | undefined;

  protected mensajeError: string = 'Todos los campos son requeridos';

  constructor(
    private toastNotificationsService: ToastNotificationsService
  ) {
    this.toastNotificationsService.dataToast.subscribe((data) => {
      if(data){
        this.dataToast = {...this.dataToast, ...data};
        if(data?.form) this.form = this.dataToast?.form;
        if(data?.customMessage){
          this.mensajeError = this.dataToast?.customMessage!;
          this.toast?.show();
        }
        if(data?.validationForm){
          this.validarFormulario();
        }
      }
    });
  }

  ngOnInit() {
    const toastEl = document.getElementById('errorToast');
    if (toastEl) this.toast = new Toast(toastEl);
  }

  // Metodo para validar formulario y mostrar mensaje de error
  validarFormulario() {
    this.form?.markAllAsTouched();
    if (this.form?.invalid) {
      if (this.form.get('nombreTarea')?.hasError('required')) {
        this.mensajeError = 'Ingrese el nombre de la tarea';
      } else if (this.form.get('fechaMaxima')?.hasError('required')) {
        this.mensajeError = 'Ingrese la fecha máxima';
      }else {
        (this.form.get('personas') as FormArray).controls.forEach((persona, index) => {
          if (persona.get('nombre')?.hasError('required')) {
            this.mensajeError = `Ingrese el nombre de la persona ${index + 1}`;
          } else if (persona.get('nombre')?.hasError('nombreUnico')) {
            this.mensajeError = `El nombre de la persona ${index + 1} ya existe`;
          } else if (persona.get('edad')?.hasError('required')) {
            this.mensajeError = `Ingrese la edad de la persona ${index + 1}`;
          } else if (persona.get('edad')?.hasError('min')) {
            this.mensajeError = `La edad de la persona ${index + 1} debe ser mayor o igual a 18 años`;
          } else {
            (persona.get('habilidades') as FormArray).controls.forEach((habilidad, indexHabilidad) => {
              if (habilidad.get('nombreHabilidad')?.hasError('required')) {
                this.mensajeError = `Ingrese el nombre de la habilidad ${indexHabilidad + 1} de la persona ${index + 1}`;
              }
            });
          }
        });
      }

      this.toast?.show();
    }
  }
  
}
