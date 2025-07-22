
import React from "react";
import { Link } from "react-router-dom";


export default function PortfolioFrontPage(props) {
  return (
    <div className="min-h-screen  mt-1"  style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743', height: '500px', borderRadius: '10px'}}>
      {/* Navbar */}
      <header className="flex justify-between items-center px-2 py-3 ">
        <h1 className="text-2xl font-bold">KRITI KUMARI</h1>
       
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6"  style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Hello, I'm Kriti 👋
        </h2>
        <p className="text-lg md:text-xl max-w-xl text-gray-600 mb-6"  >
          A passionate Frontend Developer building modern web applications.
        </p>
        <div className="space-x-4"  style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
          
          <Link className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition" to="/About">Contact Me</Link> 
          {/* <a
            href="#About"
            className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition"
          >
            Contact Me */}
          {/* </a> */}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-16 px-8"  >
        <div className="max-w-4xl mx-auto text-center"  style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
          <h3 className="text-3xl font-bold mb-4 mt-4">About Me</h3>
          <p className="text-gray-700 text-center"  >
            I'm a self-motivated developer with experience in React, JavaScript,
            HTML, CSS and more.<li> I love building user-friendly interfaces and clean frontend systems.</li>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500"  style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white', color: props.mode=== 'dark'?'white':'#042743'}}>
        &copy; {new Date().getFullYear()} Kriti Kumari. All rights reserved.
      </footer>
    </div>
  );
}



