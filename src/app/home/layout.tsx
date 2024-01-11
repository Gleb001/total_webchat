// import =================================================== //
import { HomeNav } from '@/widgets/nav/home';
import type { Metadata } from 'next';
import type { ReactNode } from "react";

// types ==================================================== //
interface Props {
  children: ReactNode
}

// constants ================================================ //
const metadata: Metadata = {
  title: 'Webchat',
}

// main ===================================================== //
function RootLayout ({ children }: Props)  {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="../../../static/favicon.ico" />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
        <HomeNav />
      </body>
    </html>
  )
}

// exports ================================================== //
export default RootLayout;
export { metadata };