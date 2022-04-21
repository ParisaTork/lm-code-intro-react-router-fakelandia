import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => <>
    <Header/>
    <main>
        <Outlet/>
    </main>
    <Footer/>
</>;

export default Layout;