// export const dynamic = "force-dynamic";
// export const revalidate = 0;

import prisma from "@/app/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";

export const metadata = {
  title: "Listado de TODOS",
  description: "Listado de TODOS",
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  return (
    <div>
      <div className="mx-5 mb-5 w-full px-3">
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </div>
  );
}
