import React from "react";

function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-center">
        <div>
          Small, artisan label that offers a thoughtfully curated collection of
          high quality everyday essentials made.
        </div>
        <div>Products</div>
        <div>Contact Us</div>
        <div>Support</div>
      </div>
      <div className="flex justify-between items-center p-10 border ">
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </footer>
  );
}

export default Footer;
