interface SectionHeadingProps {
  title: string;
  description?: string;
}

function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <header className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-gray-600 dark:text-gray-300">{description}</p>
      )}
    </header>
  );
}

export default SectionHeading;
