import { Item } from "../items/item";
export class Hero {
    id: any;
    name: string;
    money: number;
    items: Item[];
    life: number;
    strength: number;
    power: string;
    constructor(
        id: number,
        name: string,
        money: number,
        items: Item[],
        life: number,
        strength: number,
        power: string,
        public alterEgo?: string
    ){}
}
