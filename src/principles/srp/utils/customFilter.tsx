import { IFilterProducts } from "../interface/I_Products";

export function customFilter(
  products: IFilterProducts[],
  filterRate: number
) {
  return products.filter(
    (product: IFilterProducts) =>
      Number(product.rating.rate) > filterRate
  );
}
