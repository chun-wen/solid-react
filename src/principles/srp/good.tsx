import { Filter, filterProducts } from "./filter";
import { useProducts } from "./hooks/useProducts";
import { useRateFilter } from "./hooks/useRateFilter";
import { Product } from "./product";

export function Good() {
  const { products } = useProducts();

  const { filterRate, handleRating } = useRateFilter();

  return (
    <div className="flex flex-col h-full">
      <Filter
        filterRate={filterRate as number}
        handleRating={handleRating}
      />
      <div className="h-full flex flex-wrap justify-center">
        {filterProducts(products, filterRate).map((product: any) => (
          <Product product={product} />
        ))}
      </div>
    </div>
  );
}
