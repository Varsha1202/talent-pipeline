import React from "react";
import { Star, } from "lucide-react";

const LandingPage = () => {
  const stats = [
    { value: "50k", label: "Active Jobs" },
    { value: "100k", label: "Talented Professionals" },
    { value: "15k", label: "Company" },
    { value: "98%", label: "Success Rate" },
  ];

  const features=[
      {
      title: "AI-Powered Matching",
      desc: "Our algorithm connects talent and employers with precision to ensure quality hiring.",
    },
    {
      title: "Secure & Transparent",
      desc: "We prioritize privacy and transparency, ensuring a trusted experience for all users.",
    },
    {
      title: "Real-Time Updates",
      desc: "Stay informed about applications, interviews, and progress at every step.",
    },
    {
      title: "Seamless Collaboration",
      desc: "Built-in communication tools simplify team coordination during the hiring process.",
    },
  ];


    const testimonials = [
    {
      name: "Sarah Chen",
      role: "HR Director, TechCorp",
      text: "Talent Pipeline transformed our hiring process. We filled 10 positions in just 3 weeks with exceptional candidates.",
    },
    {
      name: "Michael Rodriguez",
      role: "Software Engineer",
      text: "I found my dream job within 2 weeks. The platform's recommendations were spot-on and the application process was seamless.",
    },
    {
      name: "Emily Watson",
      role: "CEO, StartupHub",
      text: "The AI matching saved us countless hours. We only interview candidates who are truly qualified and interested.",
    },
  ];
  

  return ( 
  
<div>

     <div
  className="relative flex items-center justify-start h-screen w-full bg-cover bg-center bg-blue-50 px-10 md:px-24"
  style={{ backgroundImage: "url('/Illustrators/img1.png')" }}
>
  <div className="absolute inset-0"></div>

  
  <div className="relative z-40 text-left max-w-2xl">
    <h1 className="font-sora-extrabold text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
      <span>Connect Talent</span>
      <br />
      <span>With Opportunity</span>
    </h1>

    <p className="text-lg md:text-2xl text-black/80 mb-10 max-w-xl">
      A comprehensive two-sided hiring platform that bridges exceptional
      talent with forward-thinking companies.
    </p>

    <div className="flex flex-col sm:flex-row items-start gap-4">
      <button className="px-8 py-4 bg-transparent border-2 border-black text-black font-semibold rounded-lg text-lg hover:bg-violet-300 hover:text-gray-900 transition-all">
        I’m Hiring Talent
      </button>
      <button className="px-8 py-4 bg-transparent border-2 border-black text-black font-semibold rounded-lg text-lg hover:bg-violet-300 hover:text-gray-900 transition-all">
        I’m Looking for Work
      </button>
    </div>
  </div>
</div>


 <div className="bg-neutral-50 dark:bg-neutral-900 py-16 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2 dark:text-neutral-50">
                  {item.value}
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


 <div className="bg-white dark:bg-neutral-950 py-20 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6 dark:text-neutral-50">
            Platform Features
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-16 max-w-3xl mx-auto">
            Designed for speed, trust, and collaboration — everything you need
            for efficient hiring and job discovery.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {features.map((feature, i) => (
              <div
                key={i}
                className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-8 shadow-sm hover:shadow-md transition-all text-center"
              >
                <h3 className="text-2xl font-semibold mb-3 dark:text-neutral-50">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


 <div className="bg-neutral-50 dark:bg-neutral-900 py-20 px-6">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-900 dark:text-neutral-50">
            What Our Users Say
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-16 max-w-3xl mx-auto">
            Trusted by thousands of companies and professionals
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white dark:bg-neutral-950 rounded-xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 text-yellow-400 fill-current mr-1"
                    />
                  ))}
                </div>
                <p className="text-neutral-700 dark:text-neutral-300 mb-6 text-base leading-relaxed">
                  {t.text}
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-full mr-4"></div>
                  <div className="text-left">
                    <div className="font-bold text-neutral-900 dark:text-neutral-50">
                      {t.name}
                    </div>
                    <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>



 <div className="bg-violet-300 dark:bg-neutral-100 py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-neutral-900">
            Ready to Transform Your Hiring?
          </h2>
          <p className="text-xl text-neutral-200 dark:text-neutral-700 mb-10">
            Join thousands of companies and professionals who have found success
            on Talent Pipeline
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg text-lg hover:bg-gray-200 transition-all w-full sm:w-auto">
              Start Hiring Now
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg text-lg font-semibold hover:bg-white/10 hover:text-gray-900 transition-all w-full sm:w-auto">
              Find Your Next Role
            </button>
          </div>
        </div>
      </div>


  



</div>
  );
};

export default LandingPage;
