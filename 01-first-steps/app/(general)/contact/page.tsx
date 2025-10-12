import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact page',
    description: 'Esta es la página de contacto de la empresa',
    keywords: [
        'Contacto',
        'Angel',
        'Información',
    ]
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact page</span>
        </>
    )
}