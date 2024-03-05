// import =================================================== //
import type { Metadata } from 'next';
import "@/shared/ui/index.css";
import { Inter } from "next/font/google";
import StoreProvider from './storeProvider';
import { ReactNode } from 'react';

// types ==================================================== //
interface Props {
  children: ReactNode
}

// constants ================================================ //
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin', 'cyrillic'],
  weight: "400"
});
const metadata: Metadata = {
  title: 'WebChat',
}

// main ===================================================== //
function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="../../static/favicon.ico" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  )
}

// exports ================================================== //
export default RootLayout;
export { metadata };