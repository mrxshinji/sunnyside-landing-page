import React from "react";
import emily from "../assets/images/image-emily.jpg"
import thomas from "../assets/images/image-thomas.jpg"
import jennie from "../assets/images/image-jennie.jpg"

// props take image, alt , text, name, job
function Testimonial(props) {
    return (
        <div className="testimonial">
            <div className="testimonial-pic-box">
                <img className="testimonial-pic" src={props.image} alt={props.alt} />
            </div>
            <p>{props.text}</p>
            <div className="testimonial-person">
                <p>{props.name}</p>
                <p>{props.job}</p>
            </div>
        </div>
    )
}

export default function Testimonials() {
    return (
        <section id="testimonial">
            <h3>CLIENT TESTIMONIALS</h3>
            <Testimonial 
                image={emily}
                alt="Emily"
                text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
                name="Emily R."
                job="Marketing Director"
            />
            <Testimonial 
                image={thomas}
                alt="Thomas"
                text="Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience."
                name="Thomas R."
                job="Chief Operating Officer"
            />
            <Testimonial 
                image={jennie}
                alt="Jennie"
                text="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
                name="Jennie F."
                job="Business Owner"
            />
        </section>
    )
}