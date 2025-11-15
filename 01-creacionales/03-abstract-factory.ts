/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */
interface Hamburger {
    prepare(): void;
}

interface Drink {
    pour(): void;
}

interface FastFoodFactory {
    createHamburger(): Hamburger;
    createDrink(): Drink;
}

// Implementaciones concretas de Hamburgers y Drinks
class VeggieBurger implements Hamburger {
    prepare(): void {
        console.log("Preparing a veggie burger.");
    }
}

class ChickenBurger implements Hamburger {
    prepare(): void {
        console.log("Preparing a chicken burger.");
    }
}

class Soda implements Drink {
    pour(): void {
        console.log("Pouring a soda.");
    }
}

class Juice implements Drink {
    pour(): void {
        console.log("Pouring a juice.");
    }
}

// Fábricas concretas
class VeggieFastFoodFactory implements FastFoodFactory {
    createHamburger(): Hamburger {
        return new VeggieBurger();
    }
    createDrink(): Drink {
        return new Juice();
    }
}

class ChickenFastFoodFactory implements FastFoodFactory {
    createHamburger(): Hamburger {
        return new ChickenBurger();
    }
    createDrink(): Drink {
        return new Soda();
    }
}

function main (factory: FastFoodFactory) {
    const burger = factory.createHamburger();
    const drink = factory.createDrink();
    
    burger.prepare();
    drink.pour();
}

console.log("Order from Veggie Fast Food:");
main(new VeggieFastFoodFactory());

console.log("\nOrder from Chicken Fast Food:");
main(new ChickenFastFoodFactory());