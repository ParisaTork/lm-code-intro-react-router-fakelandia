import { Routes, Route } from "react-router-dom";
import Home from '../Home/Home';
import Confession from "../Confession/Confession";
import Misdemeanour from "../Misdemeanour/Misdemeanour";
import NotFound from "../NotFound/NotFound";
import Layout from "../Layout/Layout";


const Router = () => <Routes>
    <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="confession" element={<Confession/>} />
        <Route path="misdemeanour" element={<Misdemeanour/>} />
        <Route path="*" element={<NotFound/>} />
    </Route>
</Routes>

export default Router;