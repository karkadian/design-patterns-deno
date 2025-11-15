/**
 * ! Patrón Prototype:

 * Es un patrón de diseño creacional que nos permite copiar objetos existentes sin hacer
 * que el código dependa de sus clases.
 * 
 * * Es útil cuando queremos duplicar el contenido, 
 * * el título y el autor de un documento, por ejemplo o cualquier objeto complejo.
 * 
 * https://refactoring.guru/es/design-patterns/prototype
 */

class Document {
  constructor(
    public title: string,
    public content: string,
    public author: string
  ) {}

  // Método para clonar el objeto actual
  clone(): Document {
    return new Document(this.title, this.content, this.author);
  }

  display(): void {
    console.log(`Title: ${this.title}`);
    console.log(`Content: ${this.content}`);
    console.log(`Author: ${this.author}`);
  }
}

function main() {
  // Crear un documento original
  const originalDoc = new Document(
    "Patrón Prototype",
    "El patrón Prototype es un patrón de diseño creacional...",
    "Juan Pérez"
  );

  console.log("Documento Original:");
  originalDoc.display();

  // Clonar el documento original
  const clonedDoc = originalDoc.clone();
  clonedDoc.title = "Patrón Prototype - Clonado"; // Modificar el título del clon

  console.log("\nDocumento Clonado:");
  clonedDoc.display();
}

main();