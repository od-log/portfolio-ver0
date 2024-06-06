import "./global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo-white.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
