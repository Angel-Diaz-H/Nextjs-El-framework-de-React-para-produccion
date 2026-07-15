"use client";
import { Todo } from "@/app/generated/prisma/client";
import { TodoItem } from "./TodoItem";
import * as todosApi from "@/todos/helpers/todos";
import { useRouter } from "next/navigation";

interface Props {
  todos: Todo[];
}

export const TodosGrid = ({ todos }: Props) => {
  const router = useRouter();

  const toggleTodo = async (id: string, complete: boolean) => {
    const updatedTodo = await todosApi.updateTodo(id, complete);
    router.refresh();
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};
