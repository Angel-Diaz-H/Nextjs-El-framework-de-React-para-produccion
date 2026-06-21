export const Navbar = () => {
  console.log("navbar creado");
  return (
    <nav className="bg-opacity-30 m-2 flex rounded-2xl bg-blue-900 p-2">
      <span>Home</span>
      <div className="flex flex-1"></div>
      <a className="mr-2" href="/about">
        About
      </a>
      <a className="mr-2" href="/pricing">
        Pricing
      </a>
      <a className="mr-2" href="/contact">
        Contact
      </a>
    </nav>
  );
};
