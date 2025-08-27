import { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    { question: "Will VSSER help me get a job?", answer: "Yes! Our program includes career guidance and networking opportunities to help you secure positions in the field of psychology." },
    { question: "Will VSSER hire me after training", answer: "While we don't guarantee employment, many of our graduates have gone on to work with VSSER and our partner organizations." },
    { question: "Who should join VSSER", answer: "Qualified psychologists with a Master's degree or higher who are eager to enhance their practical skills and clinical experience." },
    { question: "Who shouldn't join VSSER", answer: "Individuals without foundational qualifications or those looking for purely theoretical learning without practical application." },
    { question: "Is this a remote program? How much time will I need to commit?", answer: "Yes, it's fully remote. You'll need to commit approximately 10-15 hours per week for live sessions and practical work." },
    { question: "Will I get to meet my fellow cohort members?", answer: "Absolutely! We organize regular virtual meetups and collaborative sessions to foster connections among cohort members." },
    { question: "What else will I get?", answer: "You'll gain access to exclusive resources, therapy tools, and lifetime membership in our professional community." },
    { question: "What kind of support will I get during the program?", answer: "You'll receive 1:1 mentorship, peer support, and regular feedback from experienced psychologists." },
    { question: "Are there assessments or certifications at the end of the program?", answer: "Yes, you'll complete practical assessments and receive a certification upon successful completion of the program." },
    { question: "What practical exposure will I gain?", answer: "You'll work on real case studies, conduct mock therapy sessions, and receive supervised practical experience." },
    { question: "Will I get to work with real users?", answer: "Yes, under supervision, you'll have opportunities to work with real clients in controlled, ethical environments." }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#09101a] min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#ccb2fb] mb-4">FAQs</h1>
          <p className="text-xl text-gray-300">Find answers to common questions about our program</p>
        </div>

        <div className="space-y-6 mb-16">
          {faqs.map((faq, index) => (
            <div key={index} className="relative bg-gradient-to-br from-[#232526] to-[#414345] p-1 rounded-2xl shadow-lg">
              <div className="bg-[#09101a] rounded-2xl">
                <button
                  className={`w-full text-left p-6 flex justify-between items-center rounded-2xl transition-colors ${
                    activeIndex === index
                      ? 'bg-gradient-to-r from-[#0f1722] to-[#02050a]'
                      : ''
                  }`}
                  onClick={() => toggleAnswer(index)}
                >
                  <h3 className="text-lg font-semibold text-[#ccb2fb]">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 text-gray-400 transform transition-transform ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeIndex === index && (
                  <div className="p-6 bg-gradient-to-l from-[#0f1722] to-[#02050a] rounded-b-2xl">
                    <p className="text-gray-200">{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="text-center bg-gradient-to-br from-[#232526] to-[#414345] p-1 rounded-2xl shadow-lg">
          <div className="bg-[#09101a] rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-[#ccb2fb] mb-4">Still have questions?</h3>
            <p className="text-gray-300 mb-6">
              Reach out to our team on email and we'll be happy to answer your questions :)
            </p>
            <a
              href="mailto:contact@rocketacademy.com"
              className="inline-block bg-gradient-to-l from-green-600 to-[#55e6a5] hover:from-[#55e6a5] hover:to-green-600 text-[#09101a] font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
