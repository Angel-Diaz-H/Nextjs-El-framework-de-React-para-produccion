import { Todo } from "@/app/generated/prisma/client";

export const updateTodo = async (
  id: string,
  complete: boolean,
): Promise<Todo> => {
  const body = { complete };
  const Todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return Todo;
};

export const createTodo = async (description: string): Promise<Todo> => {
  const body = { description };
  const Todo = await fetch(`/api/todos`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return Todo;
};
