import prisma from "@/app/lib/prisma";

export const metadata = {
  title: "Listado de TODOS",
  description: "Listado de TODOS",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  console.log({ todos });
  return <div>{JSON.stringify(todos)}</div>;
}
