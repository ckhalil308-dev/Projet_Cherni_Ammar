import { Commentaires } from "./commentaires";

export interface Sites {
    id: number;
    title: string;
    era: string;
    thumbnail: string;
    address: string;
    price: number;
    open: boolean;
    creation_date: string;
    rating: number;
    openingHours: string;
    visitorsPerYear: number;
    comments?: Commentaires[];
    gallery?: string[];
    description:string
}
