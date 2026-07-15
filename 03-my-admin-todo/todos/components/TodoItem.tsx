"use client";
import { startTransition, useOptimistic } from "react";
import { Todo } from "@/app/generated/prisma/client";
import styles from "./TodoItem.module.css";
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";

interface Props {
  todo: Todo;
  //   TODO: Acciones a llamar.
  toggleTodo: (id: string, complete: boolean) => Promise<Todo | void>;
}

export const TodoItem = ({ todo, toggleTodo }: Props) => {
  const [todoOptimistic, toggleOptimistic] = useOptimistic(
    todo,
    (state, newCompleteValue: boolean) => ({
      ...state,
      complete: newCompleteValue,
    }),
  );

  const onToggleTodo = async () => {
    try {
      startTransition(() => {
        toggleOptimistic(!todoOptimistic.complete);
      });
      await toggleTodo(todoOptimistic.id, !todoOptimistic.complete);
    } catch (error) {
      startTransition(() => {
        toggleOptimistic(!todoOptimistic.complete);
      });
    }
  };

  return (
    <div
      className={todoOptimistic.complete ? styles.todoDone : styles.todoPending}
    >
      <div className="flex flex-col items-center justify-start gap-4 sm:flex-row">
        <div
          className={`flex cursor-pointer rounded-md bg-blue-100 p-2 hover:opacity-60 ${todoOptimistic.complete ? "bg-blue-100" : "bg-red-100"} `}
          // onClick={() =>
          //   toggleTodo(todoOptimistic.id, !todoOptimistic.complete)
          // }

          onClick={onToggleTodo}
        >
          {todoOptimistic.complete ? (
            <IoCheckboxOutline size={30} />
          ) : (
            <IoSquareOutline size={30} />
          )}
        </div>
        <div className="text-center sm:text-left">
          {todoOptimistic.description}
        </div>
      </div>
    </div>
  );
};
