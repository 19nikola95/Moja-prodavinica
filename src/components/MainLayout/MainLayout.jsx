import { MainLayoutFooter } from "./MainLayoutFooter";
import { MainLayoutHeader } from "./MainLayoutHeader";


export function MainLayout({ children }) {
  return <>
    <MainLayoutHeader/>
    <main>{children}</main>
   <MainLayoutFooter/>
  </>
}