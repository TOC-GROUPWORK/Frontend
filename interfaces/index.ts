export interface CardProps {
    _id: string;
    img: string;
    name: string;
}

export interface PhoneProp {
    _id:string;
    name:string;
    img:string[];

}

export interface BrandProps {
    brands: CardProps[];
}

export interface PhoneProps {
    _id:string;
    name:string;
    img:string;
    models_list:PhoneProp[];
}

export interface PhonesProps {
    phones : PhoneProps;
}

export interface PhoneDetailProps {
    
}