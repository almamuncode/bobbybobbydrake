"use client";
export function Toast({ message }: { message: string }) {
  return (
    <span role="status" aria-live="polite" className="mt-2 block text-xs">
      {message}
    </span>
  );
}
