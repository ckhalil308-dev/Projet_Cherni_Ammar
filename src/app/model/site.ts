import { Comment } from "./comment";

export interface Site {
    id: string;
    title: string;
    era: string;
    thumbnail: string;
    address: string;
    price: number;
    open: boolean;
    creation_date: Date;
    rating: number;
    openingHours: string;
    visitorsPerYear: number;
    comments?: Comment[];
    gallery?: string[];
    isBC:boolean,
    description:string
}
