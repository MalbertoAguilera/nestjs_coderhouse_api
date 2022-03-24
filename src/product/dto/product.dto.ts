//lo que se envia entre cliente y servidor
export class CreateProductDTO{
      readonly description:string;
      readonly name:string;
      readonly imageURL:string;
      readonly price: number;
      readonly createdAt: Date;
}