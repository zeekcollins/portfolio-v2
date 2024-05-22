import React, { useState, useEffect } from 'react';
import './App.css';
import 'particles.js';
import Header from './components/header/Header';
import Home from './components/home/Home'
import Social from './components/social/Social';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import SectionWrapper from './SectionWrapper';
import Loading from './components/loading/Loading';

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    if (!loadingComplete) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [loadingComplete]);
  
  useEffect(() => {
    window.particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 250,
          "density": {
            "enable": true,
            "value_area": 789.1476416322727
          }
        },
        "color": {
          "value": "#000000"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.48927153781200905,
          "random": false,
          "anim": {
            "enable": true,
            "speed": 0.2,
            "opacity_min": 0,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0,
            "sync": false
          }
        },
        "line_linked": {
          "enable": false,
          "distance": 150,
          "color": "#763841",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1.5,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 83.91608391608392,
            "size": 1,
            "duration": 3,
            "opacity": 1,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
    
    const timer = setTimeout(() => {
      setLoadingComplete(true);
    }, 8000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <>
      {!loadingComplete && <Loading setLoadingComplete={setLoadingComplete} />}
      <div className={`main-content ${loadingComplete ? 'main-appear' : ''}`}>
        <Header />
        <Social />

        <main className='main'>
          <Home />
          <SectionWrapper><About /></SectionWrapper>
          <SectionWrapper><Experience /></SectionWrapper>
          <SectionWrapper><Projects /></SectionWrapper>
          <SectionWrapper><Contact /></SectionWrapper>
          <Footer />
        </main>

        <ScrollUp />
      </div>
    </>
  );
}

export default App;
