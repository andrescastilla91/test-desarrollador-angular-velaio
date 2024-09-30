# TodoApp - Aplicación de Gestión de Tareas

## Descripción

**TodoApp** es una aplicación de gestión de tareas desarrollada con **Angular 16**. La aplicación permite a los usuarios crear, actualizar y eliminar tareas, así como asignar personas y habilidades asociadas a cada tarea. Además, se utiliza Bootstrap para estilizar la interfaz, y se aplica el diseño Mobile First para garantizar una experiencia de usuario óptima en dispositivos móviles y de escritorio.

## Características

- **Gestión de Tareas**: Crear, actualizar y eliminar tareas.
- **Asignación de Personas y Habilidades**: Añadir personas asociadas a cada tarea, incluyendo habilidades específicas.
- **Componentes Standalone**: Uso de componentes standalone para mayor modularidad.
- **Diseño Responsivo**: Aplicación desarrollada con principios de **Mobile First**.
- **Gestión del Estado**: Utilización de un servicio Angular para gestionar el estado de tareas, personas y habilidades.
- **NgRx (Opcional)**: Se implementó NgRx para gestionar el estado global de la aplicación.

## Tecnologías Utilizadas

- **Angular 16**: Framework para desarrollo web frontend.
- **Bootstrap 5**: Framework CSS para el diseño de la interfaz de usuario.
- **RxJS**: Manejo de programación reactiva en Angular.
- **NgRx**: Manejo del estado global de la aplicación.
- **TypeScript**: Lenguaje de programación.
- **HTML5 y CSS3**: Tecnologías de marcado y diseño.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 16 o superior)
- **npm** (versión 8 o superior)
- **Angular CLI** (versión 16 o superior)

## Instalación

Sigue estos pasos para clonar el repositorio e instalar las dependencias necesarias:

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git

2. **Navegar al directorio del proyecto:**:

   ```bash
   cd tu-repositorio

3. **Instalar las dependencias:**:

   ```bash
   npm install

## Configuración

Asegúrate de que los estilos y scripts de Bootstrap estén correctamente configurados en el archivo angular.json para que los dropdowns funcionen adecuadamente.

   ```bash
   "styles": [
     "src/styles.css",
     "node_modules/bootstrap/dist/css/bootstrap.min.css"
   ],
   "scripts": [
     "node_modules/@popperjs/core/dist/umd/popper.min.js",
     "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
   ]
   ```

## Uso

Para ejecutar la aplicación localmente, ejecuta el siguiente comando:

   ```bash
   ng serve
   ```

## Buenas Prácticas
- **Componentes Standalone:** Se ha utilizado un componente standalone para el formulario de creación de tareas para mejorar la modularidad y facilitar su reutilización.
- **Diseño Mobile First:** Se ha aplicado la estrategia Mobile First para garantizar una buena experiencia en dispositivos móviles.
- **Validaciones Personalizadas:** Validaciones reactivas para garantizar que el nombre de cada persona asociada sea único.

## Dependencias Importantes
- **Bootstrap:** Estilización de la interfaz.
- **@ng-bootstrap/ng-bootstrap:** Para una integración de Bootstrap más fluida en Angular.
- **NgRx:** Para gestionar el estado global de la aplicación (opcional).

## Contribución

Si deseas contribuir al proyecto:

Haz un fork del repositorio.
1. Crea una nueva rama (git checkout -b feature/nueva-caracteristica).
2. Realiza tus cambios y haz commit (git commit -m 'Agregar nueva característica').
3. Haz push a la rama (git push origin feature/nueva-caracteristica).
4. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.
