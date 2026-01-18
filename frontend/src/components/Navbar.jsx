import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-transparent w-full">
      <div className="flex items-center justify-between px-10 py-5">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-neutral-800 dark:bg-neutral-100 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl dark:text-neutral-900">
              TP
            </span>
          </div>
          <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-50 leading-none">
            Talent Pipeline
          </span>
        </div>

        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              For Employers
            </a>
            <a
              href="#"
              className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              For Job Seekers
            </a>
            <a
              href="#"
              className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
            >
              Pricing
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="px-5 py-2 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
              Sign In
            </button>
            <button className="px-6 py-2 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all">
             Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
