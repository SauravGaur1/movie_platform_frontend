import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import App from "./App";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>,
  ),
);

export default router