export class Hero {
    id: number;

    constructor(
        public name: string
    ) { }

    myName(): string {
        return this.name;
    }
}

let hero = new Hero("Leung");

console.log(hero.myName());