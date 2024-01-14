import Footer from "./views/Fotter/index";
import Navbar from "./views/Header";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
