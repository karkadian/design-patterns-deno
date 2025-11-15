# Patrones de Diseño en TypeScript con Deno

Este repositorio contiene implementaciones prácticas de los patrones de diseño más comunes utilizando TypeScript y el runtime de Deno. Cada patrón está implementado en archivos separados con ejemplos ejecutables.

## Estructura del Proyecto

- `01-creacionales/`: Implementaciones de patrones creacionales
  - `01-builder.ts`: Patrón Builder
  - `01.2-builder.ts`: Variación del patrón Builder
  - `02-factory-method.ts`: Patrón Factory Method
  - `02.2-factory-method.ts`: Variación del patrón Factory Method
  - `03-abstract-factory.ts`: Patrón Abstract Factory
  - `03.2-abstract-factory.ts`: Variación del patrón Abstract Factory
  - `04-prototype.ts`: Patrón Prototype
  - `04.2-prototype.ts`: Variación del patrón Prototype
  - `05-inmutabilidad.ts`: Conceptos de inmutabilidad
  - `05.2-inmutabilidad.ts`: Variación de inmutabilidad
  - `06-singleton.ts`: Patrón Singleton
  - `06.2-singleton.ts`: Variación del patrón Singleton
  - `07.2-factory-function.ts`: Función fábrica

- `helpers/`: Utilidades auxiliares
  - `colors.ts`: Definiciones de colores para consola
  - `sleep.ts`: Función de espera

## Requisitos

- [Deno](https://deno.com/) instalado en el sistema

## Cómo Ejecutar

Cada archivo `.ts` es un ejemplo ejecutable independiente. Para ejecutar un patrón específico:

```bash
deno run <ruta/al/archivo.ts>
```

### Ejemplos

```bash
# Ejecutar el patrón Builder
deno run 01-creacionales/01-builder.ts

# Ejecutar el patrón Singleton
deno run 01-creacionales/06-singleton.ts
```

Si deseas ejecutar con recarga automática (modo desarrollo), puedes usar la tarea definida en `deno.json`:

```bash
deno task dev
```

Nota: La tarea `dev` espera un archivo `main.ts` en la raíz, que no está presente actualmente. Para desarrollo, ejecuta los archivos individualmente.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas agregar nuevos patrones o mejorar las implementaciones existentes, por favor crea un issue o un pull request.

## Referencias

- [Design Patterns - Refactoring Guru](https://refactoring.guru/es/design-patterns)
- [Deno Manual](https://deno.com/manual)