type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  id?: string;
};

export function SectionHeading({ index, eyebrow, title, id }: SectionHeadingProps) {
  return (
    <header className="section-heading" data-reveal>
      <div className="section-heading__meta mono-label">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2 id={id}>{title}</h2>
    </header>
  );
}
