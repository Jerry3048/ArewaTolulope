import { DocumentArrowDownIcon, MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { personalInfo } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const stats = [
  { value: '2+', label: 'Years of experience' },
  { value: '10+', label: 'Projects built' },
  { value: '2', label: 'Products contributed to' },
];

function About() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resumeUrl;
    link.download = `${personalInfo.name}-Resume.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const contact = [
    { icon: <MapPinIcon className="h-5 w-5" />, text: personalInfo.location },
    { icon: <EnvelopeIcon className="h-5 w-5" />, text: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <PhoneIcon className="h-5 w-5" />, text: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  ];

  return (
    <section id="about" className="scroll-mt-20 py-20 bg-gray-50 dark:bg-dark-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="About me" />

          <div className="grid lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-16 items-start">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-full max-w-xs aspect-[4/5] object-cover rounded-lg border border-gray-200 dark:border-dark-border"
            />

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{personalInfo.title}</h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
                  {personalInfo.bio}
                </p>
              </div>

              <dl className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200 dark:border-dark-border">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dd className="text-3xl font-semibold text-primary dark:text-primary-light">{s.value}</dd>
                    <dt className="mt-1 text-sm text-gray-600 dark:text-gray-300">{s.label}</dt>
                  </div>
                ))}
              </dl>

              <ul className="space-y-3 text-sm">
                {contact.map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                    <span className="text-primary dark:text-primary-light">{item.icon}</span>
                    {item.href ? (
                      <a href={item.href} className="hover:text-primary dark:hover:text-primary-light transition-colors">
                        {item.text}
                      </a>
                    ) : (
                      <span>{item.text}</span>
                    )}
                  </li>
                ))}
              </ul>

              <button
                onClick={handleDownloadResume}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <DocumentArrowDownIcon className="h-5 w-5" />
                Download resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;