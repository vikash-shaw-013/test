import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0f1e25] via-[#132137] to-[#0f1e25]">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl font-bold text-cyan-400 mb-4">
          Ready to Take the Leap?
        </h1>
        <p className="text-lg text-gray-400 mb-8">
          Your journey to becoming a confident, skilled researcher starts here.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-2 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-md">
            Apply now
          </button>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row gap-6 w-full max-w-2xl justify-center mb-20">
          <div className="flex-1 bg-[#181f28] border-2 border-cyan-600 rounded-xl px-8 py-6 flex flex-col items-center shadow-sm">
            <p className="text-cyan-400 text-sm font-medium mb-2">Next Cohort</p>
            <p className="text-2xl font-bold text-cyan-400">2026</p>
          </div>
          <div className="flex-1 bg-[#181f28] border-2 border-cyan-600 rounded-xl px-8 py-6 flex flex-col items-center shadow-sm">
            <p className="text-cyan-400 text-sm font-medium mb-2">Enrollment</p>
            <p className="text-2xl font-bold text-cyan-400">Live now</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bg-[#132137] text-cyan-400 py-8 text-center border-t border-cyan-700">
        <div className="text-2xl font-semibold mb-2">
          <span className="font-normal">IRGDC</span>
        </div>
        <div className="text-sm opacity-70">© 2025. All rights reserved.</div>
        <div className="absolute right-6 bottom-6">
          <span className="bg-cyan-700 text-cyan-200 px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
            Powered by <span className="font-semibold">IRGDC</span>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;
