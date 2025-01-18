import { createBrowserRouter } from 'react-router-dom';
import Home from '@/pages/Home/index';
import CaseStudies from '@/pages/CaseStudies';
import WhoWeAre from '@/pages/WhoWeAre';
import WhatWeDo from '@/pages/WhatWeDo';
import Layout from '@/components/Layout';
import ErrorPage from '@/pages/ErrorPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout><Home/></Layout>,
        errorElement: <ErrorPage />
    },
    {
        path: '/what-we-do',
        element: <Layout><WhatWeDo/></Layout>,
        errorElement: <ErrorPage />
    },
    {
        path: '/who-we-are',
        element: <Layout><WhoWeAre/></Layout>,
        errorElement: <ErrorPage />
    },
    {
        path: '/case-studies',
        element: <Layout><CaseStudies/></Layout>,
        errorElement: <ErrorPage />
    },
    {
        path: '*',
        element: <ErrorPage />
    }
]);