import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import File from './components/Home/File';
import Recycle from './components/Home/Recycle';
import Share from './components/Home/Share';
import Transport from './components/Transport';
import Download from './components/Transport/Download';
import Finish from './components/Transport/Finish';
import Upload from './components/Transport/Upload';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Navigate to="home" />
            },
            {
                path: 'home',
                element: <Home />,
                children: [
                    {
                        path: '',
                        element: <Navigate to="document" />
                    },
                    {
                        path: 'document',
                        element: <File />
                    },
                    {
                        path: 'share',
                        element: <Share />
                    },
                    {
                        path: 'recycle',
                        element: <Recycle />
                    }
                ]
            },
            {
                path: 'transport',
                element: <Transport />,
                children: [
                    {
                        path: '',
                        element: <Navigate to="download" />
                    },
                    {
                        path: 'download',
                        element: <Download />
                    },
                    {
                        path: 'upload',
                        element: <Upload />
                    },
                    {
                        path: 'finish',
                        element: <Finish />
                    }
                ]
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
