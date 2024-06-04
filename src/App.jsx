import NavbarComp from './components/NavbarComp';
import HeroComp from './components/HeroComp';
import Service from './components/Service';
import FaqComp from './components/FaqComp';
import FooterComp from './components/FooterComp';

function App() {
  return (
    <div>
      <HeroComp />


      {/* Content */}

      <NavbarComp />
      <Service />
      {/* Content */}


      <FaqComp />
      <FooterComp />

    </div>
  );
}

export default App;
