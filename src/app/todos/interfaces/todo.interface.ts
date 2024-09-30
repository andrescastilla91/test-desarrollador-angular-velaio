export interface Tarea {
  id: number;
  nombreTarea: string;
  fechaMaxima: string;
  personas: Persona[];
  estado: EstadoTarea;
}

interface Persona {
  nombre: string;
  edad: number;
  habilidades: Habilidad[];
}

interface Habilidad {
  nombreHabilidad: string;
}

export type EstadoTarea = 'pendientes' | 'completadas' | 'todas';