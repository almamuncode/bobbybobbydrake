import "../globals.css";
import type { Viewport } from "next";
export const viewport: Viewport = {
  themeColor: "#111111",
  colorScheme: "dark",
};
export default function EntryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
