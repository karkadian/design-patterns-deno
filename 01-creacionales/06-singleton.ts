/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */

class DragonBalls {
    private static instance: DragonBalls;
    private balls: number = 0;

    private constructor() {
        console.log('¡Se han creado las Dragon Balls!');
    }

    public static getInstance(): DragonBalls {
        if (!DragonBalls.instance) {
            DragonBalls.instance = new DragonBalls();
        }
        return DragonBalls.instance;
    }

    public addBall(): void {
        if (this.balls < 7) {
            this.balls++;
            console.log(`Has recogido una Dragon Ball. Total: ${this.balls}`);
            return;
        }

        console.log('Ya tienes las 7 Dragon Balls. ¡Invoca a Shenlong!');
    }

    public summonShenlong(): void {
        if (this.balls === 7) {
            console.log('¡Shenlong ha sido invocado! Pide tu deseo.');
            this.balls = 0;
            return;
        }

        console.log(`Te faltan ${7 - this.balls} Dragon Balls para invocar a Shenlong.`);
    }
}

function main() {
    const gokuDragonBalls = DragonBalls.getInstance();
    gokuDragonBalls.addBall();
    gokuDragonBalls.addBall();

    const vegetaDragonBalls = DragonBalls.getInstance();
    vegetaDragonBalls.addBall();
    vegetaDragonBalls.addBall();
    vegetaDragonBalls.addBall();
    vegetaDragonBalls.addBall();
    vegetaDragonBalls.addBall();

    vegetaDragonBalls.summonShenlong();

    gokuDragonBalls.addBall();
    gokuDragonBalls.summonShenlong();
}

main();