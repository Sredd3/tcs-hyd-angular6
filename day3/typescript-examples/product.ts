import { ProductDescriptor } from "./productdescriptor";

export class Product implements ProductDescriptor{

    constructor(
        private _name:string, 
        private _price:number, 
        private _desc?:string){}

     getDescription(){ return this._desc};
     
     getName(){return this._name};

}

