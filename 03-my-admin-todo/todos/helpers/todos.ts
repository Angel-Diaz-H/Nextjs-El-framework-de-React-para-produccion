import { Todo } from "@/app/generated/prisma/client";

const sleep = (seconds: number = 0): Promise<boolean> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(true), seconds * 1000);
  });
};

export const updateTodo = async (
  id: string,
  complete: boolean,
): Promise<Todo> => {
  // await sleep(2);
  // TODO: Optimistic update: Actualizar el estado de la UI antes de que la petición se complete.

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

export const deleteCompletedTodos = async (): Promise<boolean> => {
  await fetch(`/api/todos`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
  return true;
};
