import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

// Validador personalizado para verificar si el nombre ya existe en el arreglo de personas.
export function nombreUnicoValidator(personas: AbstractControl[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const nombre = control.value?.toLowerCase().trim();

    // Verifica si el nombre ya existe en otras personas.
    const nombreExiste = personas.some(personaControl => 
      personaControl !== control.parent &&  // Evita compararse a sí mismo
      personaControl.get('nombre')?.value?.toLowerCase().trim() === nombre
    );

    return nombreExiste ? { nombreUnico: true } : null;
  };
}