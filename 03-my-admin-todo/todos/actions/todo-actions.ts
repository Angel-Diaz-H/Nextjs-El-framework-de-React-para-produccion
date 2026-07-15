"use server";
import { Todo } from "@/app/generated/prisma/client";
import prisma from "@/app/lib/prisma";
import { revalidatePath } from "next/cache";

export const toggleTodo = async (
  id: string,
  complete: boolean,
): Promise<Todo> => {
  const todo = await prisma.todo.findFirst({ where: { id } });
  if (!todo) {
    throw new Error("Todo no encontrado");
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath("/dashboard/server-todos");
  return updatedTodo;
};

export const addTodo = async (description: string) => {
  try {
    const todo = await prisma.todo.create({ data: { description } });
    revalidatePath("/dashboard/server-todos");
    return todo;
  } catch (error) {
    return { message: "Error creando  el todo" };
  }
};
