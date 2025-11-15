/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 *
 */
class CodeEditorState {
    constructor(
        readonly content: string,
        readonly cursorPosition: number,
        readonly unsavedChanges: boolean
    ) {}

    copyWith({
        content,
        cursorPosition,
        unsavedChanges
    }:Partial<CodeEditorState>): CodeEditorState  {
        return new CodeEditorState(
            content ?? this.content,
            cursorPosition ?? this.cursorPosition,
            unsavedChanges ?? this.unsavedChanges
        );
    }

    displayState(): void {
        console.log(`Content: ${this.content}`);
        console.log(`Cursor Position: ${this.cursorPosition}`);
        console.log(`Unsaved Changes: ${this.unsavedChanges}`);
    }
}

class CodeEditorHistory {
    private history: CodeEditorState[] = [];
    private currentIndex: number = -1;

    saveState(state: CodeEditorState): void {
        // Si hay estados futuros, los eliminamos
        this.history = this.history.slice(0, this.currentIndex + 1);
        this.history.push(state);
        this.currentIndex++;
    }

    undo(): CodeEditorState | null {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return this.history[this.currentIndex];
        }
        return null; // No hay más estados para deshacer
    }

    redo(): CodeEditorState | null {
        if (this.currentIndex < this.history.length - 1) {
            this.currentIndex++;
            return this.history[this.currentIndex];
        }
        return null; // No hay más estados para rehacer
    }
}

function main() {
    const editorHistory = new CodeEditorHistory();

    let currentState = new CodeEditorState("Initial content", 0, false);
    editorHistory.saveState(currentState);

    // Simular algunas ediciones
    currentState = currentState.copyWith({ content: "First edit", cursorPosition: 10, unsavedChanges: true });
    editorHistory.saveState(currentState);

    currentState = currentState.copyWith({ content: "Second edit", cursorPosition: 20 });
    editorHistory.saveState(currentState);

    console.log("Current State:");
    currentState.displayState();

    // Deshacer
    const prevState = editorHistory.undo();
    if (prevState) {
        console.log("\nAfter Undo:");
        prevState.displayState();
    }

    // Rehacer
    const nextState = editorHistory.redo();
    if (nextState) {
        console.log("\nAfter Redo:");
        nextState.displayState();
    }
}

main();