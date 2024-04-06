import logo from './logo.svg';
import './App.css';
import Hero from './components/hero/hero';
import Program from './components/programs/Program';
import Reasons from './components/reasons/Reasons';
import Plans from './components/plans/Plans';
import Testimonials from './components/Testimonials/Testimonials';
import Join from './components/join/Join';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
    
    <Hero/>
<Program/>
<Reasons/>
<Plans/>
<Testimonials/>
<Join/>
<Footer/>
    </div>
  );
}

export default App;
