import NavbarComp from './components/NavbarComp';
import HeroComp from './components/HeroComp';
import About from './components/AboutComp';
import Service from './components/Service';
import FaqComp from './components/FaqComp';
import FooterComp from './components/FooterComp';

export default function App() {
  return (
    <div>
      <HeroComp />


      {/* Content */}

      <NavbarComp />
      <About />
      <Service />
      {/* Content */}


      <FaqComp />
      <FooterComp />

    </div>
  );
}