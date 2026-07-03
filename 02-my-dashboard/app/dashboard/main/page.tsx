import { WidgetsGrid } from "@/components/dashboard/WidgetsGrid";

export const metadata = {
  title: "Admin dashboard",
  description: "Admin dashboard",
};

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>
      <WidgetsGrid />
    </div>
  );
}
