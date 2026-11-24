export const StockBadge = ({ inStock }: { inStock: boolean }) => {
  return (
    <span className={inStock ? "text-green-600" : "text-red-500"}>
      {inStock ? "Available" : "Out of Stock"}
    </span>
  );
};
