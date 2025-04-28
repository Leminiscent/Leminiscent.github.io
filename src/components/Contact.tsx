import { useState, useRef } from 'react';
import { Send, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Import icons
import linkedinIcon from '/assets/ico/linkedin_favicon.ico';
import githubIcon from '/assets/ico/github_favicon.ico';
import githubWhiteIcon from '/assets/ico/github_white_favicon.ico';
import leetcodeIcon from '/assets/ico/leetcode_favicon.ico';
import hackerrankIcon from '/assets/ico/hackerrank_favicon.ico';
import codingameIcon from '/assets/ico/codingame_favicon.ico';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (form.current) {
        const result = await emailjs.sendForm(
          'service_xztbg9d',
          'template_zb8yyj3',
          form.current,
          'y-FDawJtiOmxwnZne'
        );

        if (result.text === 'OK') {
          setSubmitStatus({
            success: true,
            message: 'Thanks for your message! I\'ll get back to you soon.'
          });

          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        }
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);

      // Clear the success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  // Social links data
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: linkedinIcon,
      url: 'https://www.linkedin.com/in/lemuel-nogueira/'
    },
    {
      name: 'GitHub',
      icon: githubIcon,
      darkIcon: githubWhiteIcon,
      url: 'https://github.com/Leminiscent'
    },
    {
      name: 'LeetCode',
      icon: leetcodeIcon,
      url: 'https://leetcode.com/u/Leminiscent/'
    },
    {
      name: 'HackerRank',
      icon: hackerrankIcon,
      url: 'https://www.hackerrank.com/profile/nogueiralemuel'
    },
    {
      name: 'CodinGame',
      icon: codingameIcon,
      url: 'https://www.codingame.com/profile/d890db260048070cb25553310498eed74712845'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
            Get In Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to explore opportunities? I'd love to hear from you!
          </p>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info */}
            <div className="lg:w-1/3">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md h-full">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 p-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-600 dark:text-indigo-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                      </h4>
                      <a
                        href="mailto:nogueiralemuel@gmail.com"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        nogueiralemuel@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Follow Me
                </h3>

                <ul className="space-y-6">
                  {socialLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center group"
                      >
                        {link.darkIcon ? (
                          <>
                            <img
                              src={link.icon}
                              alt={link.name}
                              className="w-8 h-8 block dark:hidden transition-transform duration-300 group-hover:scale-125"
                            />
                            <img
                              src={link.darkIcon}
                              alt={link.name}
                              className="w-8 h-8 hidden dark:block transition-transform duration-300 group-hover:scale-125"
                            />
                          </>
                        ) : (
                          <img
                            src={link.icon}
                            alt={link.name}
                            className="w-8 h-8 transition-transform duration-300 group-hover:scale-125"
                          />
                        )}
                        <span className="ml-3 text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                  Send Me a Message
                </h3>

                <form ref={form} onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                      required
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                      required
                    ></textarea>
                  </div>

                  {/* Form status message */}
                  {submitStatus && (
                    <div
                      className={`p-4 mb-6 rounded-lg ${submitStatus.success
                        ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
                        : 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300'
                        }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-6 py-3 flex items-center justify-center ${isSubmitting
                      ? 'bg-indigo-400 cursor-not-allowed'
                      : 'bg-indigo-600 hover:bg-indigo-700'
                      } text-white rounded-lg shadow-md transition-all duration-300 transform hover:translate-y-px`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;