import type { Metadata } from 'next';
import { FilterItems } from "./../components/templates";

export const metadata: Metadata = {
    title: 'Filtros',
};

export default function Filter() {

    return (
        <main>
            <FilterItems/>
        </main>
    );
}
