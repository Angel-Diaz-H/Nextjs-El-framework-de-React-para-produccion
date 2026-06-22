import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/dashboard/counter");

  return (
    <>
      <h1 className="text-3xl font-bold">Hola mundo</h1>
    </>
  );
}
