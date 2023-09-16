import type { Metadata } from 'next';
import { HomeItems } from "./components/templates";

export const metadata: Metadata = {
    title: 'Chaves Novas',
};

export default function Home() {

    return (
        <main>
            <HomeItems/>
        </main>
    );
}
