import { Item } from "../items/item";
export interface Hero {
    id: number;
    name: string;
    money: number;
    items: Item[];
    life: number;
    strength: number;
}