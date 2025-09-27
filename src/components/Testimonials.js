// components/Testimonials.js
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      score: "Band 8.5",
      text: "IELTSPro helped me improve my speaking score from 6.5 to 8.0 in just 6 weeks. The personalized feedback was invaluable!",
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      score: "Band 9.0",
      text: "The mock tests were incredibly realistic. I felt completely prepared on exam day thanks to the practice I had with IELTSPro.",
      avatar: "MC"
    },
    {
      name: "Priya Sharma",
      score: "Band 8.0",
      text: "As a working professional with limited time, the flexible schedule and AI-powered practice sessions were perfect for me.",
      avatar: "PS"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Student Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our students who achieved their target scores with our proven methods.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-blue-600 font-medium">{testimonial.score}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
            Read More Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;