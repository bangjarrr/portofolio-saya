import NavbarComp from './components/Navbar/NavbarComp';
import HeroComp from './components/Hero/HeroComp';
import About from './components/About/AboutComp';
import FaqComp from './components/Contact/FaqComp';
import FooterComp from './components/Footer/FooterComp';
import { Suspense, lazy } from 'react';

const Service = lazy(() => import('./components/Stack/Service'));

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
