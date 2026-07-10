import { CiBookmarkCheck } from "react-icons/ci";

export const SidebarItem = () => {
  return (
    <ul className="mt-8 space-y-2 tracking-wide">
      {/* TODO: src/components <SidebarItem /> */}
      {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}

      <li>
        <a
          href="#"
          className="relative flex items-center space-x-4 rounded-xl bg-linear-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white"
        >
          <CiBookmarkCheck size={30} />
          <span className="-mr-1 font-medium">Dashboard</span>
        </a>
      </li>

      <li>
        <a
          href="#"
          className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600"
        >
          <CiBookmarkCheck size={30} />
          <span className="group-hover:text-gray-700">Categories</span>
        </a>
      </li>
    </ul>
  );
};
