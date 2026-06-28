import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "./globals.css";

// ── EDIT ME: this text shows in the browser tab and in link previews ──
export const metadata = {
  title: "Iman Maity | Marketing × Technology",
  description:
    "MBA (Marketing) + CS engineer building at the intersection of product, marketing, and data.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
