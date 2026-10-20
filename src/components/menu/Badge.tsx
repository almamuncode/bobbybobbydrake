export function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-mustard/20 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wide text-mustard">
      {children}
    </span>
  );
}
