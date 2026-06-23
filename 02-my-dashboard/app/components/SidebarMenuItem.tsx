"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react/jsx-runtime";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
  subTitle: string;
}

export const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {
  const currentPath = usePathname();

  return (
    <Link
      href={path}
      className={`inline-flex w-full items-center space-x-2 border-b border-slate-700 px-2 py-3 transition duration-150 ease-linear hover:bg-white/5 ${currentPath === path ? "bg-blue-800" : ""} `}
    >
      <div>
        <div>{icon}</div>
      </div>

      <div className="flex flex-col">
        <span className="text-lg leading-5 font-bold text-white">{title}</span>
        <span className="hidden text-sm text-white/50 md:block">
          {subTitle}
        </span>
      </div>
    </Link>
  );
};
