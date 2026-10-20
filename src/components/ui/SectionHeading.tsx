import type { ReactNode } from "react";
export function SectionHeading({
  eyebrow,
  title,
  description,
  icon,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="mb-10">
      <div className="heading-eyebrow">
        {icon && (
          <span className="heading-icon" aria-hidden="true">
            {icon}
          </span>
        )}
        <p className="eyebrow">{eyebrow}</p>
      </div>
      <h2 className="section-title whitespace-pre-line">{title}</h2>
      <span className="heading-accent" aria-hidden="true" />
      {description && (
        <p className="mt-4 max-w-2xl text-muted">{description}</p>
      )}
    </div>
  );
}
