import React from 'react'

const Footer = () => {
  return (
      <footer className="bg-white dark:bg-neutral-950 py-16 px-6 border-t border-neutral-200 dark:border-neutral-800">
        <div className="mx-auto max-w-7xl">
          <div className="md:grid-cols-5 mb-12 grid gap-8">
            <div className="md:col-span-2">
              <div className="items-center mb-4 flex space-x-2">
                <div className="w-10 h-10 bg-neutral-800 dark:bg-neutral-100 rounded-lg items-center justify-center flex">
                  <span className="text-white font-bold text-xl dark:text-neutral-900">TP</span>
                </div>
                <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">Talent Pipeline</span>
              </div>
              <p className="text-neutral-600 mb-6 dark:text-neutral-400">
                Connecting exceptional talent with forward-thinking companies through innovative technology and human insight.
              </p>
              <div className="flex space-x-4">
                {['F', 'T', 'L', 'I'].map((social, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-neutral-100 dark:bg-neutral-900 rounded-lg items-center justify-center flex hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
                    <span className="text-neutral-900 dark:text-neutral-100 font-bold">{social}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold text-neutral-900 mb-4 dark:text-neutral-50">For Employers</h4>
              <ul className="space-y-3">
                {['Post a Job', 'Browse Candidates', 'Pricing', 'Resources'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-neutral-900 mb-4 dark:text-neutral-50">For Job Seekers</h4>
              <ul className="space-y-3">
                {['Find Jobs', 'Create Profile', 'Career Advice', 'Salary Guide'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-neutral-900 mb-4 dark:text-neutral-50">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Contact', 'Blog', 'Careers'].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <div className="md:flex-row justify-between items-center flex flex-col">
              <p className="text-neutral-600 mb-4 md:mb-0 dark:text-neutral-400">
                © 2024 Talent Pipeline. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, i) => (
                  <a key={i} href="#" className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer