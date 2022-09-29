import React from "react";
import Testimonials from "./Testimonials";

// First Section type
function Section1(props) {
    // text animation on trigger
    const before = {
        opacity: 0,
        transform: "translateX(-100%)",
        transition: "0.5s"
    }

    const after = {
        opacity: 1,
        transform: "translateX(0)",
        transition: "0.5s"
    }

    //Section 1 return
    return (
        <section id={props.section} >
            <div className='sub-section pic'>
                
            </div>
            <div ref={props.sectionRef} id={props.id} className='sub-section text'>
            <div 
                className='animation-text'
                style={props.sectionVisible ? after : before}
            >
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <button  ><a href='#'>LEARN MORE</a></button>
            </div>
            </div>
        </section>
    )
}

function Section2(props) {
    return (
        <section id={props.section}>
            <div className="sub-section overlay">
                <div className="overlay-text">
                    <h2>{props.title}</h2>
                    <p>{props.text}</p>
                </div>
            </div>
        </section>
    )
}

function Section4() {
    return (
        <section id='gallery'>
            <div id='milkbottles' className="sub-gallery"></div>
            <div id='orange' className="sub-gallery"></div>
            <div id='cone' className="sub-gallery"></div>
            <div id='sugar' className="sub-gallery"></div>
        </section>
    )
}

export default function Main(props) {
    return (
        <main>
            <Section1
                id="target1"
                sectionRef={props.sectionRef1}
                section="info1"
                title="Transform your brand"
                text="We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you."
                sectionVisible={props.section1Visible}
            />
            <Section1
                id="target2"
                sectionRef={props.sectionRef2}
                section="info2"
                title="Stand out to the right audience"
                text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digital places."
                sectionVisible={props.section2Visible}
            />
            <Section2 
                section="info3"
                title="Graphic Design"
                text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."
            />
            <Section2 
                section="info4"
                title="Photography"
                text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
            />
            <Testimonials />
            <Section4 />
        </main>
    )
}


