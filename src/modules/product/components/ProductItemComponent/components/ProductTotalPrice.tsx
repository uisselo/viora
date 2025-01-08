export function ProductTotalPrice({ value }: { value: string }) {
  return (
    <p className="text-sm font-semibold md:text-base whitespace-nowrap">
      {value}
    </p>
  );
}
