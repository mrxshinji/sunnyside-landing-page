import React, { useEffect, useRef, useState } from 'react';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer';
import './assets/css/App.css';

function App() {
  // init active trigger
  const sectionRef1 = useRef(null)
  const sectionRef2 = useRef(null)
  const allSection = [sectionRef1, sectionRef2]
  const [section1Visible, setSection1Visible] = useState(false)
  const [section2Visible, setSection2Visible] = useState(false)
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: [0.5],
  }

  const [headerState, setHeaderState] = useState(true)


  useEffect(() => {

    window.addEventListener('scroll', (e) => {
      (window.scrollY > 644) ? setHeaderState(false) : setHeaderState(true);
    })

    const observer = new IntersectionObserver ((entries) => {
      entries.forEach(entry => {
        if (entry.target.id === "target1") {
          setSection1Visible(entry.isIntersecting);
        }
        if (entry.target.id === "target2") {
          setSection2Visible(entry.isIntersecting);
        } 
      }) 
    },options )
    allSection.forEach(section => observer.observe(section.current))

    return () => {
      allSection.forEach(section => observer.unobserve(section.current))
    }
  }, [])



  return (
    <div className="container">
      <Header state={headerState} />
      <Main 
        sectionRef1={sectionRef1} 
        sectionRef2={sectionRef2} 
        section1Visible={section1Visible} 
        section2Visible={section2Visible}
      />
      <Footer />
    </div>
  );
}

export default App;
