import NavbarComp from './components/NavbarComp';
import HeroComp from './components/HeroComp';
import About from './components/AboutComp';
import FaqComp from './components/FaqComp';
import FooterComp from './components/FooterComp';
import { Suspense, lazy } from 'react';

const Service = lazy(() => import('./components/Service'));

export default function App() {
  return (
    <div>
      <HeroComp />

      {/* Content */}
      <NavbarComp />
      <About />
      <Suspense fallback={<div>Loading services...</div>}>
        <Service />
      </Suspense>
      {/* Content */}

      <FaqComp />
      <FooterComp />
    </div>
  );
}
