import { COLORS } from "../helpers/colors.ts";

/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */
interface Hamburger {
    prepare(): void;
}

class ChickenBurger implements Hamburger {
    prepare(): void {
        console.log('Preparing %cChicken Burger', COLORS.yellow);
    }
}

class BeefBurger implements Hamburger {
    prepare(): void {
        console.log('Preparing %cBeef Burger', COLORS.red);
    }
}

class BeanBurger implements Hamburger {
    prepare(): void {
        console.log('Preparing %cBean Burger', COLORS.green);
    }
}

abstract class Restaurant {
    protected abstract createHamburger(): Hamburger;

    orderHamburger(): void {
        const burger = this.createHamburger();
        burger.prepare();
    }
}

class ChickenRestaurant extends Restaurant {
    createHamburger(): Hamburger {
        return new ChickenBurger();
    }
}

class BeefRestaurant extends Restaurant {
    createHamburger(): Hamburger {
        return new BeefBurger();
    }
}

class BeanRestaurant extends Restaurant {
    createHamburger(): Hamburger {
        return new BeanBurger();
    }
}

// Client code
function main() {
    let restaurant: Restaurant;

    const burgerType = prompt("Enter burger type (chicken/beef/bean):")?.toLowerCase();
    switch (burgerType) {
        case "chicken":
            restaurant = new ChickenRestaurant();
            break;
        case "beef":
            restaurant = new BeefRestaurant();
            break;
        case "bean":
            restaurant = new BeanRestaurant();
            break;
        default:
            console.log('%cUnknown burger type!', COLORS.red);
            return;
    }

    restaurant.orderHamburger();
}

main();