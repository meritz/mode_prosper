import { Category} from "./interface-category";

export interface Product {
    title: string;
    description: string;
    pictures: string[];
    id: number;
    price: number;
    category: Category;
    state: string;
    createdAt: number;
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