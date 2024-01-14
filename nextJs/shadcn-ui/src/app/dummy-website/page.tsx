import Blog from "./views/Blogs/index";
import Hero from "./views/Hero/index";
import Pricing from "./views/Pricing/index";
import React from "react";
import Service from "./views/Services/index";
import Testimonial from "./views/Testimonial/index";

function DummyWebsite() {
  return (
    <div>
      <Hero />
      <Service />
      <Testimonial />
      <Pricing />
      <Blog />
    </div>
  );
}

export default DummyWebsite;
