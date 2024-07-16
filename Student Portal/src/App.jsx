import 'bootstrap/dist/css/bootstrap.min.css';

// import Sharepdf from './Components/sharepdf/Sharepdf';
// import Savepdf from './Components/Savepdf/Savepdf';
// import Printpdf from '../Printpdf';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import StudentForm from './pages/StudentForm';
import CertificatePage from './pages/CertificatePage';

const App = () => {
  const router = createBrowserRouter([
{
  path:'/',
  element:<>
  <StudentForm/>
  </>
},
{
  path:'/cp/:id',
  element:<>
  <CertificatePage/>
  </>
}
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;
