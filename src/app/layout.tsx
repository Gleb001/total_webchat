// import =================================================== //
import type { Metadata } from 'next';
import "@/shared/ui/index.css";
import { Inter } from "next/font/google";
import StoreProvider from './storeProvider';

// constants ================================================ //
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  weight: "400"
})
export const metadata: Metadata = {
  title: 'WebChat',
}

// main ===================================================== //
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}
