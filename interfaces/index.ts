import { ObjectEncodingOptions } from "fs";

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

export interface ServiceProps {
    AIS: Object;
    DTAC: Object;
    TRUE: Object;
}

export interface PhoneDetailProps {
    _id:string;
    name: string;
    img: string[];
    color_name: string[];
    color_style: string[];
    detail: ServiceProps;
    links?: any;
}

export interface IStudent{
    path: string;
    name: string;
    code: string;
}