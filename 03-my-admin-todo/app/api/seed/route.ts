import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // delete * from todo

  await prisma.todo.createMany({
    data: [
      { description: "Piedra del alma", complete: true },
      { description: "Piedra del poder" },
      { description: "Piedra del tiempo" },
      { description: "Piedra de la realidad" },
      { description: "Piedra del espacio" },
    ],
  });

  //   const todo = await prisma.todo.create({
  //     data: { descrition: "Piedra del alma", complete: true },
  //   });

  return NextResponse.json({ message: "Seed executed successfully" });
}
