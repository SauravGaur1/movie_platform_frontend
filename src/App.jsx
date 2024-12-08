import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "./store/user/user-slice";
import { getUser } from "./store/user/user-controller";
import { Link, NavLink, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Header />
            <div className="bg-black text-slate-50">
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default App;
