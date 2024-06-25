import NavbarComp from './components/NavbarComp';
import HeroComp from './components/HeroComp';
import About from './components/AboutComp';
import FaqComp from './components/FaqComp';
import FooterComp from './components/FooterComp';
import { Suspense, lazy } from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import NavbarContact from './components/Contact/NavbarContact';
import FooterContact from './components/Contact/FooterContact';

const Service = lazy(() => import('./components/Service'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <HeroComp />
        <NavbarComp />
        <About />
        <Suspense fallback={<div>Loading...</div>}>
          <Service />
        </Suspense>
        <FooterComp />
      </>
    ),
  },
  {
    path: '/contact',
    element:
      <>
        <NavbarContact />
        <FaqComp />
        <FooterContact />
      </>
  }
])

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
