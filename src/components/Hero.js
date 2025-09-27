// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-r from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Achieve Your <span className="text-blue-600">Dream IELTS Score</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of successful students with our proven teaching methods, 
              personalized feedback, and cutting-edge AI tools to maximize your IELTS potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 shadow-md">
                Start Free Trial
              </button>
              <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition duration-300">
                View Courses
              </button>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start space-x-6 text-gray-600">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">98%</div>
                <div className="text-sm">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">4.9/5</div>
                <div className="text-sm">Student Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">5000+</div>
                <div className="text-sm">Students Trained</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1584697964358-3e14ca57658b?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Students learning" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-blue-600 font-bold text-lg">Band 7+ Guarantee</div>
                <div className="text-sm text-gray-600">Or get your money back</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;