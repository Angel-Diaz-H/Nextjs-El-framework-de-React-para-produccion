import { Todo } from "@/app/generated/prisma/client";
import { TodoItem } from "./TodoItem";

interface Props {
  todos: Todo[];
}

export const TodosGrid = ({ todos }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
