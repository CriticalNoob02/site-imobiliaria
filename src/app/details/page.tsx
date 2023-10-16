import type { Metadata } from 'next';
import { DetailsItems } from "../components/templates";

export const metadata: Metadata = {
    title: 'Detalhes',
};

export default function Details() {

    return (
        <main>
            <DetailsItems/>
        </main>
    );
}
