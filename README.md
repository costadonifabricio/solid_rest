# API REST para Concesionaria de Vehículos

## Descripción

Este proyecto implementa una API REST para gestionar vehículos y clientes en una concesionaria de vehículos. El código sigue los principios SOLID para asegurar que sea modular, mantenible y escalable. Se han separado las responsabilidades de controladores, servicios y repositorios, y se han implementado dos repositorios simulados (MongoDB y PostgreSQL) para demostrar el uso del Principio de Sustitución de Liskov.

## Requisitos del Proyecto

1. **Single Responsibility Principle (SRP)**:
   - Clases separadas para controladores, servicios y repositorios de vehículos y clientes.
   
2. **Open/Closed Principle (OCP)**:
   - Extensión del sistema para aplicar descuentos a los precios de los vehículos sin modificar el servicio original.

3. **Liskov Substitution Principle (LSP)**:
   - Dos repositorios diferentes para manejar vehículos: uno simulado para MongoDB y otro para PostgreSQL.

4. **Interface Segregation Principle (ISP)**:
   - Interfaces separadas para las operaciones de vehículos y clientes.

5. **Dependency Inversion Principle (DIP)**:
   - Los servicios de vehículos y clientes dependen de interfaces, no de implementaciones concretas.

## Tecnologías

- **Node.js**
- **TypeScript**
- **Express.js**
- **MongoDB (simulado)**
- **PostgreSQL (simulado)**

## Instalación

### Requisitos previos

Asegúrate de tener instalado:

- **Node.js** (v14+)
- **npm**

### Clonar el repositorio

```bash
git clone https://github.com/costadonifabricio/solid_rest.git
cd nombre-repositorio
