import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import Email from '../pages/Email';
import Password from '../pages/Password';
import ChangePassword from '../pages/ChangePassword';
import OTP from '../pages/OTP';
import Dashboard from '../pages/Dashboard';
import AllCertificates from '../pages/AllCertificates';
import IssuedCert from '../pages/IssuedCert';
import CreateCert from '../pages/CreateCert';
import Settings from '../pages/Settings';
import IssuedCertForm from "../pages/IssuedCertForm";
import { useGlobalState } from "../contextApi/ContextApi";
import ChangeEmail from "../pages/ChangeEmail";
import NavbarWithSideBar from "../component/NavbarWithSideBar/NavbarWithSideBar";
import DetailPage from "../pages/DetailPage";
import AllStudents from "../pages/AllStudents";
import AddStudents from "../pages/AddStudents";
import NotFoundPage from "../component/NotFoundPage/NotFoundPage";
function Router() {
    const { isUser } = useGlobalState()
    const router = createBrowserRouter([
        {
            path: "*",
            element: <>
                <NotFoundPage/>
            </>
        },{
            path: "/",
            element: <>
                {
                    isUser ? <Navigate to={'/home'} /> :
                        <Password />
                }
            </>
        },
        {
            path: "/email",
            element: <Email />
        },
        {
            path: "/ce",
            element: <ChangeEmail />
        },
        {
            path: "/changepassword",
            element: <ChangePassword />
        },
        {
            path: "/otp",
            element: <OTP />
        },
        {
            path: "/dp/:cn",
            element: <>
                {
                    isUser ? <NavbarWithSideBar>
                        <DetailPage />
                    </NavbarWithSideBar> : <Navigate to={'/'} />

                }

            </>
        },
        {
            path: "/allstudent",
            element: <>
                {
                    isUser ? <NavbarWithSideBar>
                        <AllStudents />
                    </NavbarWithSideBar> : <Navigate to={'/'} />

                }

            </>
        },
        {
            path: "/addstudents",
            element: <>
                {
                    isUser ? <NavbarWithSideBar>
                        <AddStudents />
                    </NavbarWithSideBar> : <Navigate to={'/'} />

                }

            </>
        },
        {
            path: "/home",
            element: <>
                {
                    isUser ? <NavbarWithSideBar>
                        <Dashboard />
                    </NavbarWithSideBar> : <Navigate to={'/'} />

                }

            </>
        },
        {
            path: "/changepassword",
            element: <>
                {
                    isUser ? <NavbarWithSideBar>
                        <ChangePassword />
                    </NavbarWithSideBar> : <Navigate to={'/'} />

                }

            </>
        },
        {
            path: "/allcertificates",
            element: <>
                {
                    isUser ? <NavbarWithSideBar>
                        <AllCertificates />
                    </NavbarWithSideBar> : <Navigate to={'/'} />
                }
            </>
        },
        {
            path: "/issuedcertificates",
            element: <>
                {
                    isUser ? <NavbarWithSideBar>
                        <IssuedCert />
                    </NavbarWithSideBar> : <Navigate to={'/'} />
                }
            </>
        },
        {
            path: "/createcertificate",
            element: <>
                {
                    isUser ? <NavbarWithSideBar>
                        <CreateCert />
                    </NavbarWithSideBar> : <Navigate to={'/'} />
                }
            </>
        },
        {
            path: "/settings",
            element: <>
                {
                    isUser ? <NavbarWithSideBar>
                        <Settings />
                    </NavbarWithSideBar> : <Navigate to={'/'} />
                }
            </>
        },
        {
            path: "/issuedcertificateform",
            element: <>
                {
                    isUser ? <NavbarWithSideBar>
                        <IssuedCertForm />
                    </NavbarWithSideBar> : <Navigate to={'/'} />
                }
            </>
        },
    ]);

    return <RouterProvider router={router} />
}

export default Router;
