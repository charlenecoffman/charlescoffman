import React from 'react';

export const AboutAuthor: React.FC = () => {
  return (
    <section id="about" className="w-full px-4 pt-52 pb-12 relative z-10">
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto gap-8">
        {/* Text Content */}
        <div className="w-full md:w-2/3 bg-[#060e1fcc] p-6 rounded-lg shadow-md backdrop-blur-sm">
          <h2 className="text-3xl font-semibold mb-4">About Author</h2>
          <p className="text-lg">Charles Coffman writes character-driven science fiction with heart, humor, and a healthy dose of chaos. His debut novella, The Junk God Protocol, introduced readers to the crew of the Valiant, a mismatched family of salvagers tangled in mysteries far bigger than themselves. He followed it with Tidebound, a high-stakes story of betrayal, redemption, and sibling loyalty.</p>
          <p className="text-lg">Currently, Charles is hard at work on The Silence Between Stars, the next installment in the Valiant Salvage series—a haunting tale of contagion, memory, and the quiet strength of found family.</p>
          <p className="text-lg">When he's not writing, Charles works as a software engineer, wrangles plot twists like bugs in code, and drinks too much coffee. He lives in Alabama with his family and a rotating cast of animals who may or may not be plotting against him.</p>
        </div>

        {/* Author Image */}
        <div className="w-full md:w-1/3">
            <img
            src="/charles.png"
            alt="Charles Coffman"
            className="w-64 h-64 object-cover rounded-full shadow-lg mx-auto"
            />
        </div>
      </div>
    </section>
  );
};
