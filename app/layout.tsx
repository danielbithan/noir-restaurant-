import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'NOIR | Seafood by the Mediterranean', description: 'NOIR — מסעדת דגים ופירות ים על חוף תל אביב' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="he"><body>{children}</body></html>; }
