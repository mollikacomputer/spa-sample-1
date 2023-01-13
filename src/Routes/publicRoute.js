import Home from "../Home/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Service from "../Pages/Service";

export const publicRoute = [
    {path:'/', name:Home, Component:Home},
    {path:'/about', name:About, Component:About},
    {path:'/contact', name:Contact, Component:Contact},
    {path:'/service', name:Service, Component:Service}
]