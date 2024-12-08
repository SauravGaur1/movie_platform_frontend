import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/signup";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />

            <Route path="*" element={<Navigate to="/home" />} />
        </Route>
    )
);

export default router;
