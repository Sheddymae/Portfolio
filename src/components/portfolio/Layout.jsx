import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '@/components/ScrollToTop';
export default function Layout({children}){return <><ScrollToTop/><Navbar/><main>{children}</main><Footer/></>}
