export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#main"
      className="fixed left-4 top-3 z-100 -translate-y-24 rounded-lg bg-mustard px-5 py-3 text-charcoal focus:translate-y-0"
    >
      {label}
    </a>
  );
}
