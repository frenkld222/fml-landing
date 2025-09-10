export const metadata = {
  title: "FML Real Estate Company",
  description: "Buy into premium houses and condos for investment.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
