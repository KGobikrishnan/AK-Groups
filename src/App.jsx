import React from 'react';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import EcosystemSwitcher from './components/Widgets/EcosystemSwitcher';

const App = () => {
  return (
    <ReactLenis root options={{ smoothWheel: true, duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) }}>
      <div className="min-h-screen bg-white relative">
        <Navbar />
        <EcosystemSwitcher />
        <Home />
      </div>
    </ReactLenis>
  );
};

export default App;
