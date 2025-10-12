import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing page',
    description: 'Esta es la página de precios de mi servicio',
    keywords: [
        'Contacto',
        'Angel',
        'Información',
    ]
};

export default function Pricing() {
    return (
        <>
            <span className="text-7xl">Pricing page</span>
        </>
    )
}