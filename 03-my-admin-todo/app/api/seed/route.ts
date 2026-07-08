import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany(); // delete * from todo

  await prisma.todo.createMany({
    data: [
      { descrition: "Piedra del alma", complete: true },
      { descrition: "Piedra del poder" },
      { descrition: "Piedra del tiempo" },
      { descrition: "Piedra de la realidad" },
      { descrition: "Piedra del espacio" },
    ],
  });

  //   const todo = await prisma.todo.create({
  //     data: { descrition: "Piedra del alma", complete: true },
  //   });

  return NextResponse.json({ message: "Seed executed successfully" });
}
