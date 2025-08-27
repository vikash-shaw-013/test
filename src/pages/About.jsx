import React, { useState } from 'react';

const About = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => setStep((prev) => prev + 1);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d0d0d] text-[#ccb2fb] p-6">
      {step === 0 && (
        <div className="text-center space-y-4">
          <h2 className="text-xl">Hello hello 👋</h2>
          <h1 className="text-2xl font-semibold">Welcome to GDC 🚀</h1>
          <p className="text-lg">Please fill in the following questions, to help us know you better.</p>
          <button
            onClick={nextStep}
            className="bg-[#0a0217] text-[#ccb2fb] px-6 py-2 rounded hover:opacity-80"
          >
            Start
          </button>
          <p className="text-sm">press <span className="font-bold">Enter ↵</span></p>
        </div>
      )}

      {step === 1 && (
        <div className="text-center space-y-4">
          <p className="text-lg">
            <span className="font-semibold">Please note:</span> This form also contains questions where in you will be required submit your resume
          </p>
          <button
            onClick={nextStep}
            className="bg-[#0a0217] text-[#ccb2fb] px-6 py-2 rounded hover:opacity-80"
          >
            Continue
          </button>
          <p className="text-sm">press <span className="font-bold">Enter ↵</span></p>
        </div>
      )}

      {step === 2 && (
        <div className="text-center space-y-4 w-full max-w-xl">
          <label className="text-lg font-semibold">1 → What's your Full Name*</label>
          <input
            type="text"
            placeholder="Type your answer here..."
            className="w-full p-2 border-b-2 border-[#ccb2fb] bg-transparent text-[#ccb2fb] placeholder-[#ccb2fb]/70 focus:outline-none"
          />
          <button onClick={nextStep} className="bg-[#0a0217] text-[#ccb2fb] px-6 py-2 rounded hover:opacity-80">
            OK
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="text-center space-y-4 w-full max-w-xl">
          <label className="text-lg font-semibold">2 → Your Email ID*</label>
          <input
            type="email"
            placeholder="name@example.com"
            className="w-full p-2 border-b-2 border-[#ccb2fb] bg-transparent text-[#ccb2fb] placeholder-[#ccb2fb]/70 focus:outline-none"
          />
          <button onClick={nextStep} className="bg-[#0a0217] text-[#ccb2fb] px-6 py-2 rounded hover:opacity-80">
            OK
          </button>
        </div>
      )}

      {step === 4 && (
        <div className="text-center space-y-4 w-full max-w-xl">
          <label className="text-lg font-semibold">3 → What's your phone number?*</label>
          <input
            type="tel"
            placeholder="81234 56789"
            className="w-full p-2 border-b-2 border-[#ccb2fb] bg-transparent text-[#ccb2fb] placeholder-[#ccb2fb]/70 focus:outline-none"
          />
          <button onClick={nextStep} className="bg-[#0a0217] text-[#ccb2fb] px-6 py-2 rounded hover:opacity-80">
            OK
          </button>
        </div>
      )}

      {step === 5 && (
        <div className="text-center space-y-4 w-full max-w-xl">
          <label className="text-lg font-semibold">4 → Where are you located?*</label>
          <p className="text-sm">The training is online, but we would like to know where you are located.</p>
          <input
            type="text"
            placeholder="Type your answer here..."
            className="w-full p-2 border-b-2 border-[#ccb2fb] bg-transparent text-[#ccb2fb] placeholder-[#ccb2fb]/70 focus:outline-none"
          />
          <button onClick={nextStep} className="bg-[#0a0217] text-[#ccb2fb] px-6 py-2 rounded hover:opacity-80">
            OK
          </button>
        </div>
      )}

      {step === 6 && (
        <div className="text-center space-y-4 w-full max-w-xl">
          <label className="text-lg font-semibold">5 → How old are you?*</label>
          <input
            type="text"
            placeholder="Type your answer here..."
            className="w-full p-2 border-b-2 border-[#ccb2fb] bg-transparent text-[#ccb2fb] placeholder-[#ccb2fb]/70 focus:outline-none"
          />
          <button onClick={nextStep} className="bg-[#0a0217] text-[#ccb2fb] px-6 py-2 rounded hover:opacity-80">
            OK
          </button>
        </div>
      )}

      {step === 7 && (
        <div className="text-center space-y-4 w-full max-w-xl">
          <label className="text-lg font-semibold">6 → What was your sex assigned at birth?*</label>
          <div className="space-y-2">
            {['Male', 'Female', 'Do not wish to mention', 'Other'].map((option, index) => (
              <div
                key={index}
                className="border border-[#ccb2fb] bg-[#0a0217] text-[#ccb2fb] p-2 rounded cursor-pointer hover:opacity-80"
              >
                {String.fromCharCode(65 + index)}. {option}
              </div>
            ))}
          </div>
          <button onClick={nextStep} className="bg-[#0a0217] text-[#ccb2fb] px-6 py-2 rounded hover:opacity-80">
            OK
          </button>
        </div>
      )}

      {step === 8 && (
        <div className="text-center space-y-4 w-full max-w-xl">
          <label className="text-lg font-semibold">7 → What's your gender?*</label>
          <div className="space-y-2">
            {['Man', 'Women', 'Transgender Man', 'Transgender Women', 'Agender', 'Others'].map((option, index) => (
              <div
                key={index}
                className="border border-[#ccb2fb] bg-[#0a0217] text-[#ccb2fb] p-2 rounded cursor-pointer hover:opacity-80"
              >
                {String.fromCharCode(65 + index)}. {option}
              </div>
            ))}
          </div>
          <button onClick={nextStep} className="bg-[#0a0217] text-[#ccb2fb] px-6 py-2 rounded hover:opacity-80">
            OK
          </button>
        </div>
      )}

      {step === 9 && (
        <div className="text-center space-y-4 w-full max-w-xl">
          <label className="text-lg font-semibold">8 → What are your pronouns?*</label>
          <div className="space-y-2">
            {['She/her', 'he/him', 'they/them', 'Other'].map((option, index) => (
              <div
                key={index}
                className="border border-[#ccb2fb] bg-[#0a0217] text-[#ccb2fb] p-2 rounded cursor-pointer hover:opacity-80"
              >
                {String.fromCharCode(65 + index)}. {option}
              </div>
            ))}
          </div>
          <button onClick={nextStep} className="bg-[#0a0217] text-[#ccb2fb] px-6 py-2 rounded hover:opacity-80">
            OK
          </button>
        </div>
      )}

      {step === 10 && (
        <div className="text-center space-y-4 w-full max-w-xl">
          <label className="text-lg font-semibold">9 → Is this the first time you are applying at GDC?*</label>
          <div className="space-y-2">
            {['Yes', 'No, I have applied Before'].map((option, index) => (
              <div
                key={index}
                className="border border-[#ccb2fb] bg-[#0a0217] text-[#ccb2fb] p-2 rounded cursor-pointer hover:opacity-80"
              >
                {String.fromCharCode(65 + index)}. {option}
              </div>
            ))}
          </div>
          <button onClick={nextStep} className="bg-[#0a0217] text-[#ccb2fb] px-6 py-2 rounded hover:opacity-80">
            OK
          </button>
        </div>
      )}

      {step === 11 && (
        <div className="text-center space-y-4 w-full max-w-xl">
          <label className="text-lg font-semibold">10 → What's your bachelors' in?*</label>
          <input
            type="text"
            placeholder="Type your answer here..."
            className="w-full p-2 border-b-2 border-[#ccb2fb] bg-transparent text-[#ccb2fb] placeholder-[#ccb2fb]/70 focus:outline-none"
          />
          <button className="bg-[#0a0217] text-[#ccb2fb] px-6 py-2 rounded hover:opacity-80">
            OK
          </button>
        </div>
      )}
    </div>
  );
};

export default About;
