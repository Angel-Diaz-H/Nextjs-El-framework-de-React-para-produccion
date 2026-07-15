import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
import * as yup from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = Number(searchParams.get("take") ?? "10");
  const skip = Number(searchParams.get("skip") ?? "0");

  if (isNaN(take)) {
    return NextResponse.json({ error: "Take inválido" }, { status: 400 });
  }

  if (isNaN(skip)) {
    return NextResponse.json({ error: "Skip inválido" }, { status: 400 });
  }

  const todos = await prisma.todo.findMany({ take, skip });
  return NextResponse.json(todos);
}

const postSchema = yup.object({
  // Se puede añadir max, min, etc. según sea necesario.
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false), //! TODO.
});

export async function POST(request: Request) {
  try {
    // const {complete, description} =  await postSchema.validate(await request.json());
    const body = await postSchema.validate(await request.json());
    const todo = await prisma.todo.create({ data: body });
    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
}

export async function DELETE() {
  try {
    const deletedTodos = await prisma.todo.deleteMany({
      where: { complete: true },
    });
    return NextResponse.json(`${deletedTodos.count} to-do eliminados`);
  } catch (error) {
    return NextResponse.json(error, { status: 404 });
  }
}
