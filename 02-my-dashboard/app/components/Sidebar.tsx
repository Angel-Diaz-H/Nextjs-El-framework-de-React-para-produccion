export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="left-0 z-10 h-screen min-h-screen w-64 bg-gray-900 text-slate-300"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg font-bold text-white md:text-2xl">
          Dash<span className="text-blue-500">8</span>.
        </h1>
        <p className="text-sm text-slate-500">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex items-center space-x-2">
          <span>
            <img
              className="h-8 w-8 rounded-full"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80"
              alt=""
            />
          </span>
          <span className="text-sm font-bold md:text-base">Angel Díaz</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        <a
          href="#"
          className="inline-flex w-full items-center space-x-2 border-b border-slate-700 bg-blue-800 px-2 py-3 transition duration-150 ease-linear hover:bg-white/5"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg leading-5 font-bold text-white">
              Dashboard
            </span>
            <span className="hidden text-sm text-white/50 md:block">
              Data Overview
            </span>
          </div>
        </a>

        <a
          href="#"
          className="inline-flex w-full items-center space-x-2 border-b border-slate-700 px-2 py-3 transition duration-150 ease-linear hover:bg-white/5"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg leading-5 font-bold text-slate-300">
              Counter
            </span>
            <span className="hidden text-sm text-slate-500 md:block">
              Estado local
            </span>
          </div>
        </a>
      </div>
    </div>
  );
};
