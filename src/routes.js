import React from 'react';
import Home from './pages/Home';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Movie from './pages/Movie';
import ErrorPage from './pages/ErrorPage';
import Layout from './components/Layout';

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      }, 
      {
        path: "/directors",
        element: <Directors/>,
      },
      {
        path: "/actors",
        element: <Actors />,
      },
      {
        path: '/movie/:id',
        element: <Movie />,
      },
    ],
  },
];

export default routes;