import React from "react";
import TitleHeader from "../components/title-header.jsx";
import { testimonials } from "../constants/index.js";
import GlowCard from "../components/glow-card.jsx";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="h-full w-full px-5 md:px-10">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="mt-16 columns-1 md:columns-2 lg:columns-3">
          {testimonials.map((testimonial, index) => (
            <GlowCard card={testimonial} key={index} index={index}>
              <div className="flex items-center gap-3">
                <div>
                  <img
                    src={testimonial.imgPath}
                    alt=""
                    className="h-15 w-15 rounded-full"
                  />
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-white-50">{testimonial.position}</p>
                </div>
              </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
