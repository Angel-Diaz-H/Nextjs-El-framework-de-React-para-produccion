import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact page",
  description: "Esta es la página de contacto de mi servicio",
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact page</span>
    </>
  );
}
