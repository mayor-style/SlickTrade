// src/components/Tutorials/Tutorials.jsx
import React from "react";
import { FaPlayCircle } from "react-icons/fa";

const tutorialData = [
  {
    title: "How to Register an Account",
    description: "Step-by-step guide on creating an account on the platform.",
    link: "/tutorials/register-account",
  },
  {
    title: "How to Connect with a Vendor",
    description: "Learn how to find and contact service providers easily.",
    link: "/tutorials/connect-vendor",
  },
  {
    title: "Understanding the Dispute Process",
    description: "Comprehensive guide on how to resolve disputes.",
    link: "/tutorials/dispute-process",
  },
];

const Tutorials = () => {
  return (
    <section id="tutorials" className=" max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl text-white font-bold text-center mb-6">Tutorials & Guides</h2>
      <div className="space-y-4">
        {tutorialData.map((tutorial, index) => (
          <a
            key={index}
            href={tutorial.link}
            className="flex items-center justify-between bg-glass rounded-lg shadow-md p-4 hover:backdrop-blur-md transition-all"
          >
            <div>
              <h3 className="text-lg text-white font-semibold">{tutorial.title}</h3>
              <p className="text-white">{tutorial.description}</p>
            </div>
            <FaPlayCircle className="text-gold text-3xl" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Tutorials;
