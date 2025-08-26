import React, { useEffect, useState } from 'react';
import { motion,Variants } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import {EnvelopeIcon,PhoneIcon,MapPinIcon,PaperAirplaneIcon} from '@heroicons/react/24/outline';
import { personalInfo} from '../data/portfolio';
import { Github, Linkedin, Twitter, Mail } from "lucide-react"; // modern icons
import { useForm, ValidationError } from "@formspree/react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}
const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants:Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};


function Contact () {
  const [state, handleSubmit] = useForm("mkgvnzgl");
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });


  // Handle input changes
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  useEffect(()=>{

    if (state.succeeded) {
      setFormData({name: '',
      email: '',
      phone: '',
      message: ''})
      setTimeout(() => {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          duration: 4000,
          position: 'top-center',
          style: {
            background: '#149c6c',
            color: 'white',
            borderRadius: '12px',
            padding: '16px',
          },
        });
      }, 100);
     
    }
  },[state.succeeded])

   const socials = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Jerry3048",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "www.linkedin.com/in/arewa-tolulope-1496a7238",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      url: "https://twitter.com/yourusername",
    },
    {
      name: "Email",
      icon: <Mail className="w-6 h-6" />,
      url: "mailto:arewatolulope5@gmail.com",
    },
  ];

  
  return (
    <section
      id="contact"
      className="py-20 bg-white dark:bg-dark-bg transition-colors duration-300"
    >
      <Toaster />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Get In <span className="text-primary dark:text-secondary">Touch</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to start your project? Let's discuss how we can work together
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Let's start a conversation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  I'm always interested in hearing about new opportunities and interesting projects. 
                  Whether you have a question or just want to say hi, feel free to drop me a line.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {/* Email */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-secondary transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 dark:bg-secondary/10 rounded-full">
                    <EnvelopeIcon className="h-6 w-6 text-primary dark:text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors duration-300"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-secondary transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 dark:bg-secondary/10 rounded-full">
                    <PhoneIcon className="h-6 w-6 text-primary dark:text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Phone</h4>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors duration-300"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </motion.div>

                {/* Location */}
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-secondary transition-all duration-300"
                >
                  <div className="p-3 bg-primary/10 dark:bg-secondary/10 rounded-full">
                    <MapPinIcon className="h-6 w-6 text-primary dark:text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Location</h4>
                    <span className="text-gray-600 dark:text-gray-300">
                      {personalInfo.location}
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                  Follow me on
                </h4>
                  <div className="flex gap-4 justify-center md:justify-start mt-6">
                  {socials.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-900 hover:text-white transition-all hover:dark-bg-green-100"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary dark:focus:border-secondary focus:ring-2 focus:ring-primary/20 dark:focus:ring-secondary/20 transition-all duration-300 outline-none"
                      placeholder="Your full name"
                    />
                  <ValidationError
                  prefix='Name'
                  field='name'
                  
                  errors={state.errors}
                  />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary dark:focus:border-secondary focus:ring-2 focus:ring-primary/20 dark:focus:ring-secondary/20 transition-all duration-300 outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                    <ValidationError
                  prefix='Email'
                  field='email'
                  errors={state.errors}
                  />

                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary dark:focus:border-secondary focus:ring-2 focus:ring-primary/20 dark:focus:ring-secondary/20 transition-all duration-300 outline-none"
                    placeholder="+1 (555) 123-4567"
                  />
                    <ValidationError
                  prefix='Phone'
                  field='phone'
                  errors={state.errors}
                  />

                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-2xl bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary dark:focus:border-secondary focus:ring-2 focus:ring-primary/20 dark:focus:ring-secondary/20 transition-all duration-300 outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                    <ValidationError
                  prefix='Message'
                  field='message'
                  errors={state.errors}
                  />

                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={state.submitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {state.submitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
          {state.succeeded && <p className='text-white'>Thank you i will get back to you !</p>}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;