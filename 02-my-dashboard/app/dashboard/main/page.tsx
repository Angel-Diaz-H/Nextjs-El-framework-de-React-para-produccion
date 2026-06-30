import { SimpleWidget } from "@/components";

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Información general</span>
      <div className="m-4 flex flex-wrap gap-5">
        <SimpleWidget />
      </div>
    </div>
  );
}
