import { Commentaires } from "./commentaires";

export interface Sites {
    id: number;
    title: string;
    era: string;
    imageUrl: string;
    adresse: string;
    price: number;
    open: boolean;
    creation_date: Date;
    rating?: number;
    openingHours?: string;
    visitorsPerYear?: number;
    comments?: Commentaires[];
    
}
