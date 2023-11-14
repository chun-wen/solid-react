import { Rating } from "react-simple-star-rating";
import Card from "./components/Card";
import CardSkeleton from "./components/CardSkeleton";
import { useCustomFilter } from "./customHooks/useCustomFilter";
import { useCustomProducts } from "./customHooks/useCustomProducts";
import { customFilter } from "./utils/customFilter";

export function Better() {
  const products = useCustomProducts();
  const { filterRate, handleRating } = useCustomFilter();
  const filterProducts = customFilter(products, filterRate);

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col justify-center items-center">
        <span className="font-semibold">Minimum Rating </span>
        <Rating
          initialValue={filterRate}
          SVGclassName="inline-block"
          onClick={handleRating}
        />
      </div>
      <div className="h-full flex flex-wrap justify-center">
        {filterProducts.length === 0
          ? Array(24)
              .fill(0)
              .map((item, i) => <CardSkeleton key={i} />)
          : filterProducts.map((product, index) => (
              <Card {...product} key={index} />
            ))}
      </div>
    </div>
  );
}

export default Better;
