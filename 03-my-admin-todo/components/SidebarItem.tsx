"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  icon: React.ReactNode;
  path: string;
  title: string;
}

export const SidebarItem = ({ icon, path, title }: Props) => {
  const pathName = usePathname();

  return (
    <li>
      <Link
        href={path}
        className={`group relative flex items-center space-x-4 rounded-2xl px-4 py-3 hover:bg-sky-600 hover:bg-linear-to-r hover:text-white ${
          pathName === path
            ? `bg-linear-to-r from-sky-600 to-cyan-400 text-white`
            : ``
        }`}
      >
        {icon}
        <span className="group-hover:text-white">{title}</span>
      </Link>
    </li>
  );
};
