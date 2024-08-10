import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
    Outlet
} from "react-router-dom";
// import StudentForm from "./pages/StudentForm";
import CertificatePage from "../pages/CertificatePage";
import Login from "../Components/Login/Login";
import Signup from "../Components/Signup/Signup";
import Navbar from "../Components/Navbar";
import Dashboard from "../Components/Dashboard/dashboard";
import Modules from "../CourseModules/Modules";
import ModuleDetails from "../CourseModules/ModuleDetails";

// import Sharepdf from './Components/sharepdf/Sharepdf';
// import Savepdf from './Components/Savepdf/Savepdf';
// import Printpdf from '../Printpdf';

function Router() {
    const isUser = true;
    const router = createBrowserRouter([
        {
            path: "/",
            element: <>
                {
                    isUser ? <Navigate to={'/dashboard'} /> :
                        <Login />
                }
            </>
        },
        {
            path: "/signup",
            element: <>
                {
                    isUser ? <Navigate to={'/dashboard'} /> :
                        <Signup />
                }
            </>
        },
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/dashboard",
                    element: <>
                        {
                            isUser ? <Dashboard /> :
                                <Navigate to={'/'} />
                        }
                    </>
                },
                {
                    path: "/course-modules",
                    element: <>
                        {
                            isUser ? <Modules /> :
                                <Navigate to={'/'} />
                        }
                    </>
                },
                {
                    path: "/cp/:id",
                    element: <>
                        {
                            isUser ? <CertificatePage /> :
                                <Navigate to={'/'} />
                        }
                    </>

                },
                {
                    path: "/module-details",
                    element: <>
                        {
                            isUser ? <ModuleDetails /> :
                                <Navigate to={'/'} />
                        }
                    </>
                },
            ]
        }
    ]);

    function Layout() {

        return <div>
            <Navbar />
            <Outlet />
        </div>
    }

    return <RouterProvider router={router} />
}

export default Router;
