export interface CardProps {
    id: string;
    img: string;
    name: string;
}

export interface BrandProps {
    brands: CardProps[];
}

export interface PhoneProps {
    phones : CardProps[];
}