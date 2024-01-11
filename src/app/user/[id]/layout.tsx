// import =================================================== //
import UserNav from '@/widgets/nav/user';
import type { Metadata } from 'next';
import type { ReactNode } from "react"; 

// types ==================================================== //
interface Props {
  children: ReactNode
}

// constants ================================================ //
const metadata: Metadata = {
  title: 'Profile',
}

// main ===================================================== //
function RootLayout ({ children }: Props) {

  return (
    <html lang="en">
      <body>
        {children}
        <UserNav />
      </body>
    </html>
  );

}

// exports ================================================== //
export default RootLayout;
export { metadata };