import prisma from "@/app/lib/prisma";
import { TodosGrid } from "@/components/todos";

export const metadata = {
  title: "Listado de TODOS",
  description: "Listado de TODOS",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      {/* TODO: Formaulario para agregar. */}

      <TodosGrid todos={todos} />
    </div>
  );
}
