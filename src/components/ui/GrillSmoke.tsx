/** Decorative steam drawn with CSS; no image downloads or client JavaScript. */
export function GrillSmoke({ className = "" }: { className?: string }) {
  return (
    <div className={`grill-smoke ${className}`} aria-hidden="true">
      <span />
      <span />
    </div>
  );
}
