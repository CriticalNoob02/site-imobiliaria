import './globals.css';
import { Inter } from 'next/font/google';
import { FixedItems } from './components/templates';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: {
  children: React.ReactNode;
}) {

    return (
        <html lang="pt-BR" className="scroll-smooth">
            <body className={inter.className}>
                <FixedItems>
                    {children}
                </FixedItems>
            </body>
        </html>
    );
}
