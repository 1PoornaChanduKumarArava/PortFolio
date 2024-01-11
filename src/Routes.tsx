import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Education from "./Education";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Experience from "./Experience";
import Awards from "./Awards";

const Approute = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/education',
                element:<Education/>
            },
            {
                path:'/experience',
                element:<Experience/>
            },
            {
                path:'/projects',
                element:<Projects/>
            },
            {
                path:'/awards',
                element:<Awards/>
            },
            {
                path:'/certifications',
                element:<Certifications/>
            }
        ]
    }

])

export default Approute