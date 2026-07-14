"use client";
import { Todo } from "@/app/generated/prisma/client";
import { TodoItem } from "./TodoItem";
import * as api from "@/todos/helpers/todos";

interface Props {
  todos: Todo[];
}

export const TodosGrid = ({ todos }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={api.updateTodo} />
      ))}
    </div>
  );
};
