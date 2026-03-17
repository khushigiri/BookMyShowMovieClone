import React from "react";
import Navbar from "../components/Navbar/Navbar";

const DefaultLayoutHoc = (WrappedComponent) => {
  const Layout = (props) => {
    return (<div className="bg-gray-50">

      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main>
        <WrappedComponent {...props} />
      </main>

    </div>
    );

  };

  return Layout;
};

export default DefaultLayoutHoc;
