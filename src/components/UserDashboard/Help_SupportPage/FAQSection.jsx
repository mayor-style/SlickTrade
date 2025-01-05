// src/components/FAQSection/FAQSection.jsx
import React, { useState } from "react";

const faqData = [
  { question: "How do I initiate a transaction?", answer: "Navigate to the ‘Transactions’ page, input your requirements, and select a vendor." },
  { question: "What should I do if a vendor does not respond?", answer: "Use the dispute resolution feature to escalate the issue." },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-4xl text-white mx-auto px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`border border-dark-gray rounded-lg p-3 cursor-pointer ${activeIndex === index ? "bg-dark-gray" : "bg-gray"}`}
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold flex justify-between items-center">
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </h3>
            {activeIndex === index && <p className="mt-2 ">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
