export default function SectionHeading({ index, eyebrow, title, description, id }) {
  return (
    <div className="section-heading">
      <div className="section-heading__meta">
        <span className="section-index">{index}</span>
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <div className="section-heading__body">
        <h2 id={id}>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
