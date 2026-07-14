import { Todo } from "@/app/generated/prisma/client";

interface Props {
  todo: Todo;
  //   TODO: Acciones a llamar.
}

export const TodoItem = ({ todo }: Props) => {
  return <div>{todo.description}</div>;
};
