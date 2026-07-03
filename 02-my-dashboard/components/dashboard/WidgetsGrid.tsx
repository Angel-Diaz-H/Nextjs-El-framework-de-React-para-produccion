import { SimpleWidget } from "./SimpleWidget";

export const WidgetsGrid = () => {
  return (
    <div className="m-4 flex flex-wrap gap-5">
      <SimpleWidget />
      <SimpleWidget />
      <SimpleWidget />
      <SimpleWidget />
    </div>
  );
};
