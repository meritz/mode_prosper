import { Category} from "./interface-category";

export interface Product {
    title: string;
    description: string;
    pictures: string[];
    id: string;
    price: number;
    category: Category;
    state: string;
    createdAt: Date;
    commissions: number;
    availability: Availability;
    city: string;
    averageStar: number;
}

export interface Availability {
    available: boolean;
    type: string;
    feed?: number;
}