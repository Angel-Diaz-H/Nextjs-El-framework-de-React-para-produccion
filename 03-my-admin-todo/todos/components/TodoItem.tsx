"use client";
import { Todo } from "@/app/generated/prisma/client";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  //   TODO: Acciones a llamar.
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  return (
    <div className={todo.complete ? styles.todoDone : styles.todoPending}>
      <div className="flex flex-col items-center justify-start gap-4 sm:flex-row">
        <div
          className={`flex cursor-pointer rounded-md bg-blue-100 p-2 hover:opacity-60 ${todo.complete ? "bg-blue-100" : "bg-red-100"} `}
          onClick={() => toggleTodo(todo.id, !todo.complete)}
        >
          {todo.complete ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>
        <div className="text-center sm:text-left">{todo.description}</div>
      </div>
    </div>
  );
};
