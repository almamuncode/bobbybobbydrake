"use client";
import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import { Toast } from "@/components/ui/Toast";
export function CopyAddressButton({
  address,
  label,
  copied,
  error,
}: {
  address: string;
  label: string;
  copied: string;
  error: string;
}) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    if (!message) return;
    const id = setTimeout(() => setMessage(""), 5000);
    return () => clearTimeout(id);
  }, [message]);
  return (
    <div>
      <button
        className="button border border-line bg-surface"
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(address);
            setMessage(copied);
          } catch {
            setMessage(error);
          }
        }}
      >
        {message === copied ? <Check size={15} /> : <Copy size={15} />} {label}
      </button>
      <Toast message={message} />
    </div>
  );
}
