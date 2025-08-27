import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    rating: 5,
    quote: 'The training program was packed with relatable case studies and actionable insights that brought complex ideas to life. It broke down the often-intimidating role of leadership into something authentic and human. Frameworks like structured problem-solving and reflective thinking proved to be game-changers. The emphasis on inclusivity and adaptability deeply resonated with me, and personalized feedback sharpened my decision-making. This experience has made collaboration and innovation feel more natural, and far more impactful.',
    name: 'Sampurna Nag',
    role: 'Professional Researcher',
    image: '../assets/Sampurna Nag.png',
    highlights: ['relatable stories', 'practical examples', 'structured case formulations'],
  },
  {
    rating: 5,
    quote: 'The sessions were incredibly engaging, enriched by diverse perspectives from mentors and industry experts. Case studies and simulation exercises proved invaluable in preparing me for real-world challenges. Addressing practical concerns like managing information overload in communication was a standout. Overall, the program was demanding, inspiring, and deeply rewarding a perfect launchpad for someone entering the field with fresh ideas and ambition.',
    name: 'Celina Daniel',
    role: 'Professional Researcher',
    image: '../assets/Celina Daniel.png',
    highlights: ['real-world practice', 'perfect launchpad'],
  },
  {
    rating: 5,
    quote: 'The training was immensely valuable and filled with deep insights. It offered a wealth of practical learning and strategic understanding. Overall, it was an enriching experience that has equipped me with the clarity, skills, and confidence to thrive in my journey as a researcher and entrepreneur.',
    name: 'Angelina Johnson',
    role: 'Professional Researcher',
    image: '../assets/Celina Daniel.png',
    highlights: ['highly beneficial', 'very insightful'],
  },
];

function highlightText(text, highlights) {
  if (!highlights || highlights.length === 0) return text;
  let result = text;
  highlights.forEach((phrase) => {
    const regex = new RegExp(`(${phrase})`, 'gi');
    result = result.replace(
      regex,
      '<span class="bg-cyan-400 px-1 rounded text-[#0f1e25] font-medium">$1</span>'
    );
  });
  return result;
}

const TestimonialCarousel = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0f1e25] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400">
          Hear from our members
        </h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation
          className="testimonialSwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-gradient-to-br from-[#132137] to-[#181f28] rounded-2xl p-1 shadow-lg max-w-2xl mx-auto border border-cyan-400">
                <div className="bg-[#181f28] rounded-2xl p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-2xl ${
                          i < testimonial.rating ? 'text-cyan-400' : 'text-gray-700'
                        }`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p
                    className="text-gray-300 italic mb-6 leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: highlightText(testimonial.quote, testimonial.highlights),
                    }}
                  />
                  <div className="flex items-center mt-4">
                    <div className="w-12 h-12 rounded-full bg-[#181f28] mr-4 overflow-hidden border-2 border-cyan-400">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-[#0f1e25]">{testimonial.name}</p>
                      <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
