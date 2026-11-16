import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { Github, Linkedin } from 'lucide-react';
import { GITHUB_URL, LINKEDIN_URL } from '../data/socials';
import { useForm, ValidationError } from '@formspree/react';
import { personalInfo } from '../data/portfolio';
import SectionHeading from './SectionHeading';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const empty: FormData = { name: '', email: '', phone: '', message: '' };

const inputClass =
  'w-full px-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-dark-border rounded-lg text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors text-sm';
const labelClass = 'block text-sm font-medium text-gray-800 dark:text-gray-200 mb-2';
const errorClass = 'text-red-600 dark:text-red-400 text-xs mt-1';

function ContactForm({ formId }: { formId: string }) {
  const [state, handleSubmit] = useForm(formId);
  const [formData, setFormData] = useState<FormData>(empty);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  useEffect(() => {
    if (state.succeeded) {
      setFormData(empty);
      toast.success('Message sent. I will reply within 24 hours.', {
        duration: 5000,
        position: 'top-center',
        style: { background: '#1B365D', color: '#fff', borderRadius: '8px', padding: '14px 20px', fontWeight: 500 },
      });
    }
  }, [state.succeeded]);

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Full name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your full name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} className={errorClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Email address</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="you@example.com" />
          <ValidationError prefix="Email" field="email" errors={state.errors} className={errorClass} />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone number <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+234 800 000 0000" />
        <ValidationError prefix="Phone" field="phone" errors={state.errors} className={errorClass} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className={`${inputClass} resize-none`} placeholder="Tell me about your project or role." />
        <ValidationError prefix="Message" field="message" errors={state.errors} className={errorClass} />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <PaperAirplaneIcon className="h-5 w-5" />
        {state.submitting ? 'Sending...' : 'Send message'}
      </button>

      {state.succeeded && (
        <p role="status" className="text-sm font-medium text-accent dark:text-emerald-400">
          Thank you. Your message has been sent.
        </p>
      )}
    </form>
  );
}

function Contact() {
  const formId = import.meta.env.VITE_API_KEY;

  const details = [
    { icon: <EnvelopeIcon className="h-5 w-5" />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <PhoneIcon className="h-5 w-5" />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <MapPinIcon className="h-5 w-5" />, label: 'Location', value: personalInfo.location, href: null },
  ];

  const socials = [
    { name: 'GitHub', icon: <Github className="w-5 h-5" />, url: GITHUB_URL },
    { name: 'LinkedIn', icon: <Linkedin className="w-5 h-5" />, url: LINKEDIN_URL },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-bg">
      <Toaster />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            title="Get in touch"
            description="Have a project or a role in mind? Send a message and I will reply within 24 hours."
          />

          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-16">
            <div className="space-y-8">
              <ul className="space-y-5">
                {details.map((item) => (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="p-2.5 rounded-lg bg-primary/10 text-primary dark:text-primary-light">{item.icon}</span>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-gray-900 dark:text-gray-100 hover:text-primary dark:hover:text-primary-light transition-colors break-all">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-gray-900 dark:text-gray-100">{item.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="flex gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="p-3 rounded-lg border border-gray-200 dark:border-dark-border text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light hover:border-primary/60 transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 border-l-2 border-accent pl-4">
                Currently available for freelance work.
              </p>
            </div>

            {formId ? (
              <ContactForm formId={formId} />
            ) : (
              <p role="status" className="text-sm text-gray-600 dark:text-gray-400">
                The contact form is unavailable. Set VITE_API_KEY to your Formspree form ID to enable it.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;