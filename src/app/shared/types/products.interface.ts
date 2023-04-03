export interface ProductsInterface {
  id: string;
  name: string;
  articleCode: string;
  price: number;
  discount: number;
  new: boolean;
  discountAvailable: boolean;
  color: string;
  imageUrl: string;
  count: number;
  type: string;
  model: string;
  memory: string;
  detailsImages: Array<string>;
}

export interface ColorsInterface {
  color: 'black' | 'white' | 'gold';
}
