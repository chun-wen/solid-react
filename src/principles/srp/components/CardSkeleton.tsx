import { Skeleton } from "@/components/ui/skeleton";

export default function CardSkeleton() {
  return (
    <div className="w-56 flex flex-col justify-between items-center m-2 max-w-sm bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Skeleton className="m-4 rounded-t-lg h-48 w-3/4" />
      <Skeleton className="m-8 rounded-t-lg h-2 w-3/4" />
      <div className="flex flex-col px-5 pb-5 w-full">
        <Skeleton className="h-2 mb-2 w-full" />{" "}
        {/* Subtitle/Description */}
        <div className="flex items-center mt-2.5 mb-5">
          <Skeleton className="h-2 w-1/4 mr-1" /> {/* Rating */}
          <Skeleton className="h-2 w-1/4 mr-1" />
          <Skeleton className="h-2 w-1/4" />
        </div>
        <Skeleton className="h-4 mb-3 w-full" /> {/* Price */}
        <Skeleton className="h-10 w-full" /> {/* Button */}
      </div>
    </div>
  );
}
